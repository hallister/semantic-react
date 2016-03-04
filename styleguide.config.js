/* eslint-disable */
var path = require('path');
var glob = require('glob');

module.exports = {
    title: 'Semantic UI Components for React',
    components: function () {
        return glob.sync(path.resolve(__dirname, 'src/components/**/*.jsx')).filter(function (module) {
            // exclude tests files
            return !(/__tests__/.test(module));
        });
    },
    skipComponentsWithoutExample: true,
    serverPort: 4000,
    getExampleFilename: function (componentPath) {
        return componentPath.replace(/\.jsx?$/, '.examples.md');
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
        
        webpackConfig.module.loaders.push(
            {
                test: /\.(jsx|es6)$/,
                loaders: ['babel'],
                include: [
                    dir,
                    styleguideComponentsDir
                ],
                exclude: /(__tests__|node_modules)/
            }
        );
        webpackConfig.devtool = 'inline-source-map';
        webpackConfig.resolve.extensions.push('.es6');
        
        // webpackConfig.resolve.alias['rsg-components/TableOfContents'] = path.join(__dirname, 'src/styleguide/TableOfContents');
        return webpackConfig;
    }
};
/* eslint-enable */
