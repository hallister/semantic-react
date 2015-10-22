import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        author: props.defaultClasses
    }

    return classes;
}

let author = (props) => {
    let { children, className, component, defaultClasses, ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

author.propTypes = {
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool
}

author.defaultProps = {
    component: 'a',
    defaultClasses: true
}

exports.Author = author;
