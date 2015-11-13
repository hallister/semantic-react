import React from 'react';
import * as propList from './props';
import ExampleGen from '../examplegen';
import PropGen from '../propgen';
import DocBlock from '../docblock';

import { Segment, Label } from '../../../src/components/elements';
import Examples from './examples';

let TEXTDEMOS = {};

function generateExamples(component, props, children, name) {
    if (!component || (!component.type && !component.name)) return;

    let ignore = ['key', 'style', 'className'];
    let example = `<${component.type || component.name}`;

    Object.keys(props || {}).forEach(prop => {
        if (ignore.indexOf(prop) > -1) return;
        example += typeof props[prop] === 'string' ? ` ${prop}="${props[prop]}"` : ` ${prop}=${props[prop]}`;
    });

    if (!children) {
        example += '/>\n';
    } else {
        example += '>';

        if (typeof children !== 'string') {
            Object.keys(children).forEach(child => {
                example += child;
            });
        } else {
            example += children;
        }

        example += `</${component.type || component.name}>\n`;
    }

    if (!TEXTDEMOS[name]) TEXTDEMOS[name] = '';
    TEXTDEMOS[name] += example || '';
    return;

}

function parseProps(props, value) {
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

function parseChildren(children, value) {
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

function cloneElement(component, props, children) {
    return React.createElement(
        component,
        props || {},
        children || []
    );
}

function createComponent(component, props, children, name, index = 0) {
    let element = cloneElement(component, Object.assign({ key: name + index }, props), children);

    generateExamples(component, props, children, name);

    return element;
}

function createManyComponents(example, name) {
    let clones = [];

    example.each.forEach(attr => {
        let props = parseProps(example.do.props, attr);
        let children = parseChildren(example.do.children, attr);

        clones.push(createComponent(example.component, props, children, name));
    });

    return clones;
}

function createMultipleComponents(example, name) {
    let clones = [];

    example.forEach((demo, index) => {
        clones.push(createComponent(demo.component, demo.props, demo.children, name, index));
    });

    return clones;
}

function exampleParser(exampleConfig) {
    let clones = {};

    Object.keys(exampleConfig).forEach(example => {
        let demo = exampleConfig[example];

        if (Array.isArray(demo)) {
            clones[example] = createMultipleComponents(demo, example);
        } else if (demo.each) {
            clones[example] = createManyComponents(demo, example);
        } else {
            if (!clones[example]) clones[example] = [];
            clones[example].push(createComponent(demo.component, demo.props, demo.children, example));
        }
    });

    return clones;
}

let ButtonDoc = (props) => {
    TEXTDEMOS = {}
    let { children, ...other } = props;

    let exampleObject = (exampleParser(Examples));
    let exampleArray = [];

    Object.keys(exampleObject).forEach(example => {
        exampleArray.push(
            <div
                key={example}
            >
                <Segment>
                    {exampleObject[example]}
                </Segment>

                <Segment>
                    <Label
                        attached="top"
                        color="blue"
                    >
                        Code
                    </Label>
                    <pre><code className="html">{TEXTDEMOS[example]}</code></pre>
                </Segment>
            </div>
        )
    });

    return (
        <DocBlock title={props.params.component}>
            <ExampleGen>
                {exampleArray}
            </ExampleGen>
            <PropGen propList={propList}/>
        </DocBlock>
    );
};

ButtonDoc.propTypes = {
    children: React.PropTypes.node,
    params: React.PropTypes.object
}

export default ButtonDoc;
