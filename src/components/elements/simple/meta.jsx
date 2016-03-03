import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

let Meta = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { metadata: true });

    return React.createElement(
        component,
        other,
        children
    );
};

Meta.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};

Meta.defaultProps = {
    component: 'div'
};

export default Radium(Meta);
