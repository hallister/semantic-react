/* eslint-disable */
var path = require('path');
var glob = require('glob');

module.exports = {
    title: 'Semantic UI Components for React',
    components: function () {
        return glob.sync(path.resolve(__dirname, 'src/components/**/*.jsx')).filter(function (module) {
            // exclude tests files
            return !(/(__tests__|examples)/.test(module));
        });
    },
    skipComponentsWithoutExample: true,
    serverPort: 4000,
    getExampleFilename: function (componentPath) {
        var parsed = path.parse(componentPath);
        var exampleDir = path.join(parsed.dir, 'examples');
        return path.join(exampleDir, parsed.name + '.examples.md');
        // return componentPath.replace(/\.jsx?$/, '.examples.md');
    },
    getComponentPathLine: function (componentPath) {
        /** @var {string} */
        var name = path.basename(componentPath, '.jsx');
        // capitalize
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return 'import { ' + name + ' } from \'semantic-react\';';
    },
    template: "./src/styleguide.template.html",
    
    updateWebpackConfig: function(webpackConfig, env) {
        var dir = path.join(__dirname, 'src', 'components');
        var styleguideComponentsDir = path.join(__dirname, 'src', 'styleguide');
        
        var babelConfig = {
            test: /\.(jsx|js)$/,
            loader: 'babel',
            include: [
                dir,
                styleguideComponentsDir
            ],
            exclude: /(__tests__|node_modules|examples)/,
        };
        
        if (process.env.NODE_ENV !== 'production') {
            babelConfig.query = { presets:  ['react-hmre'] };
        }
        
        webpackConfig.module.loaders.push(babelConfig);
        
        webpackConfig.devtool = 'inline-source-map';
        webpackConfig.resolve.extensions.push('.es6');
        
        // Add enhanced props loader
        webpackConfig.resolveLoader.modulesDirectories.unshift('src/loaders');

        // webpackConfig.resolve.alias['rsg-components/TableOfContents'] = path.join(__dirname, 'src/styleguide/TableOfContents');
        webpackConfig.resolve.alias['rsg-components/StyleGuide'] = path.join(__dirname, 'src/styleguide/StyleGuide');
        return webpackConfig;
    }
};
/* eslint-enable */
