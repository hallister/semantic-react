import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';


let Actions = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { actions: true });

    return React.createElement(
        component,
        other,
        children
    );
};

Actions.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
};

Actions.defaultProps = {
    component: 'div'
};

export default Radium(Actions);
