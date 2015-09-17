var webpack = require('webpack');

module.exports = function(config) {
	config.set({
		frameworks: ['jasmine'],
	    files: [
	      'src/app.tests.js'
	    ],
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
				extensions: ['', '.js', '.json', '.jsx']
			},
	     	module: {
				resolve: {
					extensions: ['', '.js', '.json', '.jsx']
				},
	        	loaders: [{
	        		test: /\.jsx?$/, 
	        		exclude: /(bower_components|node_modules)/,
	          		loader: 'babel?optional[]=runtime&stage=0'
	        	}],
	        	postLoaders: [{
	          		test: /\.jsx?$/, 
	          		exclude: /(node_modules|bower_components|(.*)-test.js)/,
	          		loader: 'istanbul-instrumenter'
	        	}]
	      	}
	    },
	    webpackMiddleware: { noInfo: true }
	});
}