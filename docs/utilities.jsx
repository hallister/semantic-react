import React from 'react';

exports.Colors = ['red', 'orange', 'yellow', 'olive', 'green',
                  'teal', 'blue', 'violet', 'purple', 'pink',
                  'brown', 'grey', 'black'];

exports.Components = {
    button: 'Button',
    buttons: 'Buttons',
    iconbutton: 'IconButton',
    labeledbutton: 'LabeledButton',
    socialbutton: 'SocialButton',
    divider: 'Divider'
}

export function generateExample(component, props, children, name, indent = 0) {
    if (!component) return;

    let ignore = ['key', 'style'];
    let example = Array(indent + 1).join('\t') + `<${component.type || component.name || component}`;

    Object.keys(props || {}).forEach(prop => {
        if (ignore.indexOf(prop) == -1) {
            if (typeof props[prop] === 'string') {
                example += ` ${prop}="${props[prop]}"`;
            } else if (typeof props[prop] === 'boolean') {
                example += ` ${prop}`;
            } else {
                example += ` ${prop}={${props[prop]}}`;
            }
        }
    });

    if (!children) {
        example += '/>\n';
    } else {
        example += '>';

        if (typeof children == 'object') {
            example += '\n';

            if (Array.isArray(children)) {
                Object.keys(children).forEach(child => {
                    if (typeof children[child] === 'string') {
                        example += Array(indent + 2).join('\t') + children[child] + '\n';
                    } else {
                        example += generateExample(children[child].component, children[child].props, children[child].children, name, indent + 1);
                    }
                });
            } else {
                example += generateExample(children.component, children.props, children.children, name, indent + 1)
            }
        } else {
            example += children;
        }

        if (example.slice(-1) === '\n') {
            example += Array(indent + 1).join('\t');
        }

        example += `</${component.type || component.name || component}>\n`;
    }

    return example;

}

export function parseProps(props, value) {
    let newProps = {};

    Object.keys(props).forEach(prop => {
        if (props[prop] === true) {
            newProps[prop] = value;
        } else {
            newProps[prop] = props[prop];
        }
    });

    return newProps;
}

export function parseChildren(children, value) {
    if (Array.isArray(children) === true) {
        return children.map(child => {
            if (child === true) {
                return value;
            } else {
                return child;
            }
        });
    }

    if (children === true) {
        return value;
    } else {
        return children;
    }
}

export function cloneElement(component, props, children) {
    return React.createElement(
        component,
        props || {},
        children || []
    );
}

export function createComponent(component, props, children, name, code = false, index = 0) {
    if (children && typeof children !== 'string' && !code) {
        /* eslint-disable */
        children = exampleParser(children, name);
        /* eslint-enable */
    }

    if (!code) {
        return cloneElement(component, Object.assign({ key: name + index }, props), children);
    } else {
        return generateExample(component, props, children, name);
    }
}

export function createManyComponents(example, name, code) {
    let clones = [];

    example.each.forEach(attr => {
        let props = parseProps(example.do.props, attr);
        let children = parseChildren(example.do.children, attr);

        clones.push(createComponent(example.component, props, children, name, code));
    });

    return clones;
}

export function createMultipleComponents(example, name, code) {
    let clones = [];

    example.forEach((demo, index) => {
        if (typeof demo == 'string') {
            clones.push(demo + '\n');
        } else {
            clones.push(createComponent(demo.component, demo.props, demo.children, name, code, index));
        }
    });

    return clones;
}

export function exampleParser(demo, example, code = false) {
    let examples = [];

    if (Array.isArray(demo)) {
        examples = createMultipleComponents(demo, example, code);
    } else if (demo.each) {
        examples = createManyComponents(demo, example, code);
    } else {
        examples.push(createComponent(demo.component, demo.props, demo.children, example, code));
    }

    return examples;
}

export function configParser(config, code = false) {
    let clones = {};

    Object.keys(config).forEach(example => {
        clones[example] = exampleParser(config[example], example, code);
    });

    return clones;
}
