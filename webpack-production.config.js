var path = require('path');
var webpack = require('webpack');
var pack = require('./package.json');

var externals = [];
externals.push(/^react(\/.*)?$/, /^react-dom(\/.*)?$/);

module.exports = {
    entry: './src/components/semantic-react',
    externals: {
        react: 'React'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: pack.name + '-' + pack.version + '.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6'],
        alias: {
            react: __dirname + '/node_modules/react',
            'react/addons': __dirname + '/node_modules/react/addons'
        }
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
            loaders: ['babel?optional[]=runtime&stage=0'],
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
