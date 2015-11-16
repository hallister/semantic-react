/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

// TODO: Eventually Docs need eslinting as well

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        './docs/docs'
    ],
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/(.*ReactContext.*)/)
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6', '.json'],
        alias: {
            react: __dirname + '/node_modules/react',
            'react/addons': __dirname + '/node_modules/react/addons'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.(jsx?|es6)$/,
                exclude: [/node_modules/, /lib/],
                loader: 'eslint-loader'
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
        loaders: [
            {
                test: /\.(jsx|es6)$/,
                loaders: ['babel?optional[]=runtime&stage=0'],
                include: [
                    path.join(__dirname, 'docs'),
                    path.join(__dirname, 'src')
                ]
                // exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
/* eslint-enable */
