/*var webpack = require('webpack');
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
*/

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
	console.log(path.join(__dirname, 'src'));
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});