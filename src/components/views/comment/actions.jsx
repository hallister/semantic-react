import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        actions: props.defaultClasses
    }

    return classes;
}

let actions = (props) => {
    let { children, className, component, defaultClasses, ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

actions.propTypes = {
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool
}

actions.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Actions = actions;
