/* eslint-disable */

/* The intent of this script is a cross-platfrom way to run node scrips.
 * it suffers from a number of bugs. The version below works, but exec buffers
 * so it eventually overflows. Spawn should be used, but the time required to
 * get it to work is probably not worth it.
 */

var exec = require('child_process').exec;
var path = require('path');
var glob = require('glob');
var command_line, environ;

function execute(command_line, environ) {
    if (process.platform === 'win32') {
        command_line = 'set NODE_ENV=' + environ + '&&' + command_line;
    } else {
        command_line = 'NODE_ENV=' + environ + ' ' + command_line;
    }

    var command = exec(command_line, { maxBuffer: 4*1024 });

    command.stdout.on('data', function(data) {
        process.stdout.write(data);
    });
    command.stderr.on('data', function(data) {
        process.stderr.write(data);
    });
    command.on('error', function(err) {
        process.stderr.write(err);
    });
}

switch (process.argv[2]) {
case 'start':
    command_line = 'node server.js';
    environ = 'development';
    execute(command_line, environ);
    break;
case 'build':
    command_line = path.normalize('./node_modules/.bin/webpack') + ' --colors --progress --config webpack-production.config.js';
    environ = 'production';
    execute(command_line, environ);
    break;
case 'docs:gen':
    // node can't expand globs, so we have to do it manually. This is far more effecient that just react-docgening each file one at a time
    glob(path.normalize('./src/components/**/*.jsx'), function(stuff, files) {
        var components = [];

        // we ignore any top-level src/components file AND anything in animate AND any test files.
        for (var index = 0; index < files.length; ++index) {
            if (path.dirname(files[index]) !== 'src/components' &&
                path.dirname(files[index]) !== 'src/components/modules/animate' &&
                !(/__tests__/.test(files[index])))
            {
                components.push(files[index]);
            }
        }

        command_line = path.normalize('./node_modules/.bin/react-docgen') + ' ' + components.join(' ') + ' -x jsx | ' + path.normalize('./node_modules/.bin/babel-node') + ' ./docs/generate.es6';
        environ = 'development';
        execute(command_line, environ);
    });
    break;
case 'build:min':
    command_line = path.normalize('./node_modules/.bin/uglifyjs') + ' ' + path.normalize('./dist/semantic-react.js') + ' -o ./dist/semantic-react.min.js -c -m';
    environ = 'production';
    execute(command_line, environ);
    break;
case 'test':
    command_line = path.normalize('./node_modules/.bin/karma') + ' start --single-run --no-auto-watch karma.config.js';
    environ = 'test';
    execute(command_line, environ);
case 'test:watch':
    command_line = path.normalize('./node_modules/.bin/karma') + ' start --auto-watch --no-single-run karma.config.js';
    execute(command_line, environ);
    break;
}

/* eslint-enable */
