import fs from 'fs';
import path from 'path';

let ignoreList = [
    'primarybutton',
    'successbutton',
    'warningbutton',
    'dangerbutton',
    'defaultProps'
]

function generateModule(json, file) {
    return `/* eslint-disable */
exports.${ file } = ${ json }
/* eslint-enable */`;
}

function resolveProps(componentPath, component, api) {
    let newProps = {};
    if (component.composes) {
        for (let composedPath of component.composes) {
            // Resolve defaultProps
            if (/defaultProps/.test(composedPath)) {
                Object.assign(newProps, require('./components/defaultProps.js').defaultProps.props);
            } else {
                // recursivly resolve composed props
                let composedComponentPath = path.join(path.dirname(componentPath), composedPath) + '.jsx';
                // replace windows separators if any
                composedComponentPath = composedComponentPath.replace(/\\/g, '/');
                // console.log(api);
                let composedProps = resolveProps(composedComponentPath, api[composedComponentPath], api);
                if (composedProps) {
                    Object.assign(newProps, composedProps);
                }
            }
        }
    }
    // add own props
    Object.assign(newProps, component.props);
    return newProps;
}

function buildDocs(raw) {
    let expor = {};
    let api = JSON.parse(raw);
    // console.log(api);

    for (let filepath in api) {
        let file = path.parse(filepath);

        if (ignoreList.indexOf(file.name) == -1) {
            let component = file.dir.match(/([^\/]*)\/*$/)[1];

            if (!expor[component]) expor[component] = [];
            if (api[filepath] && api[filepath].props) {
                api[filepath].props = resolveProps(filepath, api[filepath], api);
            }
            expor[component].push(generateModule(JSON.stringify(api[filepath], null, 4), file.name));
        }
    }

    Object.keys(expor).forEach(component => {
        let file = expor[component].join('\n');

        fs.writeFileSync('./docs/components/' + component + '/props.js', file);
    });

}

let json = '';

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    let chunk = process.stdin.read();
    if (chunk !== null) {
        json += chunk;
    }
});

process.stdin.on('end', function() {
    buildDocs(json);
})
