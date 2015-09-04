// DFS for recursive seaarching of a specific child component
import React from 'react';

exports.Numbers = ['zero', 'one', 'two', 'three', 'four', 
                   'five', 'six', 'seven', 'eight', 'nine', 
                   'ten', 'eleven', 'twelve'];

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

export function hasChild(children, component) {
    let found = false;

    React.Children.forEach(children, function(child) {
        if (child.type === component && child.type != undefined) {
            found = true;
        }
    });

    return found;
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

export function returnTag(tag) {
    if (typeof tag == 'function') {
        return tag;
    } else if (typeof tag == 'string') {
        return React.DOM[tag];
    } else if (typeof tag == 'object') {
        let child = tag;

        return function(config, children) {
            return React.cloneElement(child, config, children);
        };
    }
}