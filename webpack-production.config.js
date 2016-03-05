/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var pack = require('./package.json');

var externals = [];
externals.push(/^react(\/.*)?$/, /^react-dom(\/.*)?$/);

module.exports = {
    devtool: 'source-map',
    entry: './src/components/index',
    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        },
        'react/lib/ReactTransitionGroup': {
            root: 'React.addons.ReactTransitionGroup',
            commonjs2: 'react/lib/ReactTransitionGroup',
            commonjs: 'react/lib/ReactTransitionGroup',
            amd: 'react/lib/ReactTransitionGroup'
        }
    },
    plugins: [
        new webpack.IgnorePlugin(/ReactContext/)
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: pack.name + '.js',
        library: 'SemanticReact',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    },
    module: {
        preLoaders: [
            {
                test: /\.(jsx?|es6)$/,
                exclude: [/node_modules/, /docs/, /lib/],
                loader: 'eslint-loader'
            }
        ],
        loaders: [{
            test: /\.(jsx?|es6)?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
/* eslint-enable */
