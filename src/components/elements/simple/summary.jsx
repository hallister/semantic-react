import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

let Summary = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { summary: true });

    return React.createElement(
        component,
        other,
        children
    );
};

Summary.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};

Summary.defaultProps = {
    component: 'div'
};

export default Radium(Summary);
