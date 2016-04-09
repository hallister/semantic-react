/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: ['mocha'],
        files: [
          'src/app.tests.js'
        ],
        client: {
            mocha: {
                bail: true
            }
        },
        browsers: [ 'jsdom' ],
        preprocessors: {
           'src/app.tests.js': ['webpack', 'sourcemap'],
           'src/components/semantic-react.jsx': ['coverage']
        },
        reporters: [ 'mocha', 'coverage' ],
        coverageReporter: {
            instrumenters: { isparta : require('isparta') },
            instrumenter: {
              '**/*.js': 'isparta'
          },
            dir: 'dist/coverage',
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
            ]
        },
        webpack: {
            devtool: 'inline-source-map',
            debug: true,
            resolve: {
                extensions: ['', '.js', '.jsx', '.es6', '.json']
            },
            plugins: [
                new webpack.IgnorePlugin(/react\/lib\/(ReactContext|ExecutionEnvironment)/)
            ],
            module: {
                preLoaders: [{
                    test: /\.(jsx?|es6)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                }],
                loaders: [{
                    test: /\.(jsx?|es6)$/,
                    exclude: /node_modules/,
                    loader: 'babel'
                },{
                    test: /\.json$/,
                    loader: 'json'
                }]
            }
        },
        webpackMiddleware: { noInfo: true }
    });
}
/* eslint-enable */
