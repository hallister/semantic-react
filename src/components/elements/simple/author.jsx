import React from 'react';
import classNames from 'classnames';

let Author = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { author: true });

    return React.createElement(
        component,
        other,
        children
    );
};

Author.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
}

Author.defaultProps = {
    component: 'a'
}

exports.Author = Author;
