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

export function hasDescendant(children, component) {
    let found = false;

    React.Children.forEach(children, function(child) {
        if (child.type === component && child.type != undefined) {
            found = true;
        } else {
            if (child.props && child.props.children) {
                found = hasDescendant(child.props.children, component);
            }
        }
    });

    return found;
}

export function arrayToObject(array, value = false) {
    let returnObject = {};

    for (let v of array) {
        returnObject[v] = value;
    }

    return returnObject;
}

export function hasChild(children, component) {
    let found = false;

    React.Children.forEach(children, function(child) {
        if (child.type === component && child.type != undefined) {
            found = true;
        } else if (typeof child === 'string' && component === 'string') {
            found = true;
        }
    });

    return found;
}

export function hasFirstChild(children, component) {
    if (typeof children === 'string') {
        return false;
    }

    if (React.Children.count(children) === 1) {
        return React.Children.only(children).type === component;
    } else {
        return (children[0].type === component);
    }

    return false;
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

export function childCount(children) {
    return React.Children.count(children);
}

export function handleMultiClasses(classes, props, stringProps) {

    stringProps.forEach(item => {
        // this prop is active
        if (!!props[item.prop] === true) {
            let value = props[item.prop];
            classes[item.prop] = false;

            if (typeof value === 'string') {
                classes[value + ' ' + item.prop] = true;          
            } else {
                classes[item.prop] = true;
            }

        }
    });

    return classes;
}