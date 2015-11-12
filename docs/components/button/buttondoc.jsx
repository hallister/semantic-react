import React from 'react';
import * as propList from './props';
import ExampleGen from '../examplegen';
import PropGen from '../propgen';
import DocBlock from '../docblock';

import { Segment, Label } from '../../../src/components/elements';
import Examples from './examples';

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

function generateExample(components) {
    let example = '';


    components.forEach(component => {
        // console.log(component.type.defaultProps);

        example += '<' + component.type.displayName;

        Object.keys(component.props).forEach(prop => {
            if (component.props[prop] && prop !== 'style' && prop !== 'children') {
                if ((component.type.defaultProps[prop] && component.type.defaultProps[prop] !== component.props[prop]) || !component.type.defaultProps[prop]) {
                    let newProp;
                    if (component.props[prop] === true || component.props[prop] === false) {
                        newProp = '{' + component.props[prop] + '}';
                    } else {
                        newProp = '"' + component.props[prop] + '"';
                    }

                    example += ' ' + prop + '=' + newProp;
                }
            }
        })

        if (React.Children.toArray(component.props.children).length > 0) {
            // do kids
            example += '>';

            if (typeof component.props.children == 'string') {
                example += component.props.children;
            } else {
                example += generateExample(components.props.children);
            }

            example += '</' + component.type.displayName + '>\n';
        } else {
            example += '/>\n\n';
        }
    });

    return example;
}

function cloneElement(component, props, children) {
    return React.createElement(
        component,
        props || {},
        children || []
    );
}

function exampleParser(examples) {
    let clones = {};

    Object.keys(examples).forEach(demo => {
        let example = examples[demo];
        clones[demo] = [];

        if (!example.each) {
            clones[demo].push(cloneElement(example.component, example.props, example.children));
        } else {
            example.each.forEach(name => {
                let props = parseProps(example.do.props, name);
                let children = parseChildren(example.do.children, name);

                clones[demo].push(cloneElement(example.component, props, children));
            });
        }
    });

    return clones;
}

let ButtonDoc = (props) => {
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
                    <pre><code className="html">{generateExample(exampleObject[example])}</code></pre>
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
