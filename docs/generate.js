#!/usr/bin/env babel-node

import fs from 'fs';
import path from 'path';

function generateModule(json, file) {
    return `/* eslint-disable */
exports.${ file } = ${ json }
/* eslint-enable */`;
}

function buildDocs(raw) {
    let expor = {};
    let api = JSON.parse(raw);

    for (let filepath in api) {
        let file = path.parse(filepath);
        let component = file.dir.match(/([^\/]*)\/*$/)[1];

        if (!expor[component]) expor[component] = [];

        expor[component].push(generateModule(JSON.stringify(api[filepath], null, 4), file.name));
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
