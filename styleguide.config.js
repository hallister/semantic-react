/* eslint-disable */
var path = require('path');
var glob = require('glob');

module.exports = {
    title: 'Semantic UI Components for React',
    sections: [
        {
            name: 'Elements',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/elements/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples|simple\/)/.test(module));
                });
            }
        },
        {
            name: 'Simple elements',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/elements/simple/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        },
        {
            name: 'Collections - Form',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/collections/form/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        },
        {
            name: 'Collections - Grid',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/collections/grid/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        },
        {
            name: 'Collections - Table',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/collections/table/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        },
        {
            name: 'Collections - Message',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/collections/message/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        },
        {
            name: 'Collections - Breadcrumb',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/collections/breadcrumb/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        },
        {
            name: 'Modules',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/modules/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        },
        {
            name: 'Views',
            components: () => {
                return glob.sync(path.resolve(__dirname, 'src/components/views/**/*.jsx')).filter(module => {
                    return !(/(__tests__|examples)/.test(module));
                });
            }
        }
    ],
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
        webpackConfig.resolveLoader.modulesDirectories.unshift(path.join(__dirname, 'src', 'loaders'));

        webpackConfig.resolve.alias['rsg-components/StyleGuide'] = path.join(__dirname, 'src/styleguide/StyleGuide');
        return webpackConfig;
    }
};
/* eslint-enable */
