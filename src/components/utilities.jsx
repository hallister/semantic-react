// DFS for recursive seaarching of a specific child component
import React from 'react';

exports.Numbers = ['zero', 'one', 'two', 'three', 'four',
                   'five', 'six', 'seven', 'eight', 'nine',
                   'ten', 'eleven', 'twelve', 'thirteen',
                   'fourteen', 'fifteen', 'sixteen'];

exports.Social = ['facebook', 'twitter', 'google plus', 'vk',
                  'linkedin', 'instagram', 'youtube'];

exports.Colors = ['red', 'orange', 'yellow', 'olive', 'green',
                  'teal', 'blue', 'violet', 'purple', 'pink',
                  'brown', 'grey', 'black'];

exports.Sizes = ['mini', 'tiny', 'small', 'medium', 'large',
                 'big', 'huge', 'massive'];

export function arrayToObject(array, value = false) {
    let returnObject = {};

    for (let v of array) {
        returnObject[v] = value;
    }

    return returnObject;
}

export function countChildren(children, component) {
    let count = 0;

    React.Children.forEach(children, child => {
        if (child.type === component) {
            count++;
        }
    });

    return count;
}

export function hasChild(children, component) {
    children = React.Children.toArray(children);

    for (let child of children) {
        if (child.type && child.type == component) {
            return true;
        } else if (component === typeof child) {
            return true;
        }
    }

    return false;
}

export function hasDescendant(children, component) {
    if (!children) {
        return false;
    }
    children = React.Children.toArray(children);

    for (let child of children) {
        if (child.type && child.type == component) {
            return true;
        } else if (typeof child === "function" && (React.Children.count(child.props.children) > 0)) {
            return hasDescendant(child.props.children, component);
        }
    }

    return false;
}


export function hasFirstChild(children, component) {
    if (!children || typeof children === 'string' || React.Children.count(children) === 0) {
        return false;
    }

    if (React.Children.count(children) === 1) {
        return React.Children.only(Array.isArray(children) ? children[0] : children).type === component;
    } else {
        return (children[0] && children[0].type === component);
    }
}

export function getChild(children, component, equal = true) {
    return React.Children.map(children, function(child) {
        if (child.type !== component && equal) {
            return child;
        } else if (child.type == component && !equal) {
            return child;
        } else {
            return null;
        }
    }.bind(this));
}

export function validateClassProps(classes, props, validator, sub) {
    for (let propName of Object.keys(validator)) {
        if (!!props[propName] === true) {
            let realProp = propName;

            if (sub && sub[propName]) {
                realProp = sub[propName];
            }

            classes[propName] = false;

            if (typeof props[propName] === 'string') {
                classes[props[propName] + ' ' + realProp] = true;
            } else {
                classes[propName] = true;
            }

        }
    }

    return classes;
}

export function spliceChildren(children, component) {
    let splicedComponent, componentIndex;
    children = React.Children.toArray(children);

    children.forEach((child, index) => {
        if (child.type && child.type == component) {
            splicedComponent = children.splice(index, 1);
            componentIndex = index;
        }
    });

    return {
        component: splicedComponent,
        remaining: children,
        index: componentIndex
    };
}

export function isEveryChild(children, component) {
    children = React.Children.toArray(children);

    for (let child of children) {
        if (!child.type || child.type !== component) {
            return false;
        }
    }

    return true;
}

export function isNodeInRoot(node, root) {
    while (node) {
        if (node === root) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
