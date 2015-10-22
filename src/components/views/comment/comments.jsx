import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,

        collapsed: props.collapsed,
        minimal: props.minimal,
        threaded: props.threaded,

        comments: props.defaultClasses
    }

    return classes;
}

let comments = (props) => {
    let { children, className, collapsed, component, defaultClasses, minimal,
          threaded, ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

comments.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    collapsed: React.PropTypes.bool,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool,
    minimal: React.PropTypes.bool,
    threaded: React.PropTypes.bool
}

comments.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Comments = comments;
