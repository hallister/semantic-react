var webpack = require('webpack');

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
          'src/app.tests.js': ['webpack']
        },
        reporters: [ 'spec', 'coverage' ],
        coverageReporter: {
            dir: 'dist/reports/coverage',
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
            },
            plugins: new webpack.IgnorePlugin(/react-dom/)
        },
        webpackMiddleware: { noInfo: true }
    });
}
