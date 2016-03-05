/**
 * Radium enhanced semantic UI elements
 */
/* eslint-disable */
var Radium = require('radium');

var elements = require('./lib/elements');
var modules = require('./lib/modules');
var views = require('./lib/views');
var collections = require('./lib/collections');

function exportWithRadium(components) {
    Object.keys(components).forEach(function (name) {
        if (typeof components[name] === "function") {
            module.exports[name] = Radium(components[name]);
        } else {
            module.exports[name] = components[name];
        }
    });
}

exportWithRadium(elements);
exportWithRadium(modules);
exportWithRadium(views);
exportWithRadium(collections);

/* eslint-enable */
