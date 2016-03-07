/**
 * Radium enhanced semantic UI elements
 */
/* eslint-disable */
import Radium from 'radium';

import * as elements from './elements';
import * as modules from './modules';
import * as views from './views';
import * as collections from './collections';

function exportWithRadium(components) {
    for (let name of Object.keys(components)) {
        if (typeof components[name] === "function") {
            module.exports[name] = Radium(components[name]);
        } else {
            module.exports[name] = components[name];
        }
    }
}

exportWithRadium(elements);
exportWithRadium(modules);
exportWithRadium(views);
exportWithRadium(collections);

/* eslint-enable */
