var path = require('path');
var webpack = require('webpack');
var package = require('./package.json');

var externals = [];
externals.push(/^react(\/.*)?$/, /^react-dom(\/.*)?$/);

module.exports = {
    entry: './src/components/semantic-react',
    externals: externals,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: package.name + '-' + package.version + '.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            "react": __dirname + '/node_modules/react',
            "react/addons": __dirname + '/node_modules/react/addons'
        }
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel?optional[]=runtime&stage=0'],
            include: path.join(__dirname, 'src'),
            exclude: /node_modules/
        },{
            test: /\.json$/,
            loader: "json-loader"
        }]
    }
};