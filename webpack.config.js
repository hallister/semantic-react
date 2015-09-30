var path = require('path');
var webpack = require('webpack');

// TODO: Eventually Docs need eslinting as well

module.exports = {
    devtool: 'eval',
    entry: [
        //'webpack-dev-server/client?http://0.0.0.0:3000',
        //'webpack/hot/only-dev-server',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6'],
        alias: {
            "react": __dirname + '/node_modules/react',
            "react/addons": __dirname + '/node_modules/react/addons'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /docs/, /lib/],
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.(jsx|es6)$/,
                loaders: ['babel?optional[]=runtime&stage=0'],
                include: path.join(__dirname, 'src')
                //exclude: /node_modules/
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
