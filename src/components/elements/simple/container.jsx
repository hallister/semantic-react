import React from 'react';
import classNames from 'classnames';

let Container = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { ui: true, container: true });

    return React.createElement(
        component,
        other,
        children
    );
};

Container.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
}

Container.defaultProps = {
    component: 'div'
}

exports.Container = Container;
