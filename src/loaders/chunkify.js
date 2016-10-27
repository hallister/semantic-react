'use strict';

const remark = require('remark');
const visit = require('unist-util-visit');
const hljs = require('highlight.js');
const path = require('path');
const fs = require('fs');

const CODE_PLACEHOLDER = '<%{#code#}%>';

/**
 * Separate Markdown and code examples that should be rendered as a playground in a style guide.
 *
 * @param {string} markdown
 * @returns {Array}
 */
module.exports = function chunkify(markdown, contextDir) {
    let codeChunks = [];

    /*
     * - Highlight code in fenced code blocks with defined language (```html) if the language is not `example`.
     * - Extract indented and fenced code blocks without language or if language is `example`.
     * - Leave all other Markdown or HTML as is.
     */
    function processCode() {
        return (ast) => {
            visit(ast, 'code', node => {
                if (node.lang && node.lang === 'require') {
                    try {
                        const pathTo = path.resolve(contextDir, node.value);
                        let requireSource = fs.readFileSync(pathTo, 'utf8');
                        // remove all imports
                        requireSource = requireSource.replace(/(import.*|.*require.*)/g, '');
                        codeChunks.push(requireSource.trim());
                        node.type = 'html';
                        node.value = CODE_PLACEHOLDER;
                    } catch (e) {
                        // ignore
                    }
                } else if (node.lang && node.lang !== 'example') {
                    let highlighted;
                    try {
                        highlighted = hljs.highlight(node.lang, node.value).value;
                    }
                    catch (exception) {
                        highlighted = exception.message;
                    }
                    node.value = highlighted;
                } else {
                    codeChunks.push(node.value);
                    node.type = 'html';
                    node.value = CODE_PLACEHOLDER;
                }
            });
        };
    }

    const rendered = remark()
        .use(processCode)
        .process(markdown)
            .contents
        ;

    let chunks = [];
    const textChunks = rendered.split(CODE_PLACEHOLDER);
    textChunks.forEach(chunk => {
        if (chunk) {
            chunks.push({
                type: 'markdown',
                content: chunk,
            });
        }
        const code = codeChunks.shift();
        if (code) {
            chunks.push({
                type: 'code',
                content: code,
            });
        }
    });

    return chunks;
};
