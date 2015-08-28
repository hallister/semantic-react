var webpack = require('webpack');
var DevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

new DevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	contentBase: path.join(__dirname, 'src')
}).listen(3000, '0.0.0.0', function (err, result) {
	if (err) {
		console.warn(err);
	}

	console.log('Listening at 0.0.0.0:3000');
})