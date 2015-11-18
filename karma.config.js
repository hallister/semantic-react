/* eslint-disable */
var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'sinon-chai'],
        files: [
          'src/app.tests.js'
        ],
        client: {
            mocha: {
                bail: true
            }
        },
        browsers: [ 'Chrome' ],
        preprocessors: {
           'src/app.tests.js': ['webpack'],
           'src/components/semantic-react.jsx': ['coverage']
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
                extensions: ['', '.js', '.jsx', '.es6']
            },
            plugins: [
                new webpack.IgnorePlugin(/react\/lib\/ReactContext/)
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
                }]
            }
        },
        webpackMiddleware: { noInfo: true }
    });
}
/* eslint-enable */
