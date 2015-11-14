/* eslint-disable */
var exec = require('child_process').exec;
var path = require('path');
var command_line, environ;

switch (process.argv[2]) {
case 'start':
    command_line = 'node server.js';
    environ = 'development';
    break;
case 'build':
    command_line = path.normalize('./node_modules/.bin/webpack') + ' --colors --progress --config webpack-production.config.js';
    environ = 'production';
    break;
case 'build:min':
    command_line = path.normalize('./node_modules/.bin/uglifyjs') + ' ' + path.normalize('./dist/semantic-react.js') + ' -o ./dist/semantic-react.min.js -c -m';
    environ = 'production';
    break;
case 'test':
    command_line = path.normalize('./node_modules/.bin/karma') + ' start --single-run --no-auto-watch karma.config.js';
    environ = 'test';
case 'test:watch':
    command_line = path.normalize('./node_modules/.bin/karma') + ' start --auto-watch --no-single-run karma.config.js';
    break;
}

if (process.platform === 'win32') {
    command_line = 'set NODE_ENV=' + environ + '&&' + command_line;
} else {
    command_line = 'NODE_ENV=' + environ + ' ' + command_line;
}

var command = exec(command_line);

command.stdout.on('data', function(data) {
    process.stdout.write(data);
});
command.stderr.on('data', function(data) {
    process.stderr.write(data);
});
command.on('error', function(err) {
    process.stderr.write(err);
});
/* eslint-enable */
