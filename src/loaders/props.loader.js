'use strict';

/**
 * This is modified version of props loader from react-styleguidist
 * Added loading of composed props
 */
/* eslint-disable */
var path = require('path');
var fs = require('fs');
var reactDocs = require('react-docgen');

function resolveComposedProps(composes, props, contextDir) {
    let newProps = {};
    for (let composedPath in composes) {
        let fullPath = path.resolve(contextDir, composes[composedPath]) + '.jsx';
        try {
            let source = fs.readFileSync(fullPath, 'utf8');
            let composedProps = reactDocs.parse(source);
            if (composedProps.composes) {
                Object.assign(composedProps.props, resolveComposedProps(composedProps.composes, composedProps.props, path.dirname(fullPath)));
            }
            Object.assign(newProps, composedProps.props);
            
        } catch (e) {
            console.log('Error when parsing', path.basename(fullPath));
            console.log(e.toString());
            console.log();
        }
    }
    Object.assign(newProps, props);
    return newProps;
}

module.exports = function (source) {
    this.cacheable && this.cacheable();

    var props;
    try {
        props = reactDocs.parse(source);
        if (props.composes) {
            props.props = resolveComposedProps(props.composes, props.props, this.context);
        }
    }
    catch (e) {
        console.log('Error when parsing', path.basename(this.request));
        console.log(e.toString());
        console.log();
        props = {};
    }
    
    
    return [
        'if (module.hot) {',
        '	module.hot.accept([]);',
        '}',
        'module.exports = ' + JSON.stringify(props)
    ].join('\n');

};
/* eslint-enable */
