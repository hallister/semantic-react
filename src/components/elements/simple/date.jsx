import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

let Date = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { date: true });

    return React.createElement(
        component,
        other,
        children
    );
};

Date.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};

Date.defaultProps = {
    component: 'div'
};

export default Radium(Date);
