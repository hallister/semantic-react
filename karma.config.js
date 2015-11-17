/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
          'src/app.tests.js'
        ],
        client: {
            mocha: {
                bail: true
            }
        },
        browsers: [ 'PhantomJS' ],
        preprocessors: {
           'src/app.tests.js': ['webpack'],
           'src/components/**/*.jsx': ['coverage']
        },
        reporters: [ 'spec', 'coverage' ],
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
            resolve: {
                extensions: ['', '.js', '.json', '.jsx', '.es6']
            },
            plugins: [
                new webpack.IgnorePlugin(/react\/lib\/ReactContext/)
            ],
            module: {
                preLoaders: [{
                    test: /\.(jsx?|es6)$/,
                    exclude: [/node_modules/, /docs/, /lib/],
                    loader: 'eslint-loader'
                }],
                loaders: [{
                    test: /\.(jsx?|es6)$/,
                    exclude: /(bower_components|node_modules)/,
                    loader: 'babel?optional[]=runtime&stage=0'
                }]
            }
        },
        webpackMiddleware: { noInfo: true }
    });
}
/* eslint-enable */
