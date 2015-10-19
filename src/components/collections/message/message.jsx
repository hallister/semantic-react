import React from 'react';
import classNames from 'classnames';

let validProps = {
    attached: ['bottom', 'top'],
    type: ['info', 'warning', 'positive', 'negative'],
    state: ['success', 'error']
};

let message = (
        { children, className, color, compact, component, defaultClasses,
          floating, hidden, icon, size, state, type, visible, ...other }
    ) => {

    let classes = {
        ui: defaultClasses,

        compact: compact,
        floating: floating,
        hidden: hidden,
        icon: icon,
        visible: visible,

        info: type === 'info' && !state,
        warning: type === 'warning' && !state,
        positive: type === 'positive' && !state,
        negative: type === 'negative' && !state,

        success: state === 'success',
        error: state === 'error',

        message: defaultClasses
    }

    classes[color] = !!color;
    classes[size] = !!size;

    other.className = classNames(className, classes);

    return React.createElement(
        component,
        other,
        children
    );
};

message.propTypes = {
    attached: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(validProps.attached),
        React.PropTypes.bool
    ]),
    className: React.PropTypes.any,
    color: React.PropTypes.string,
    compact: React.PropTypes.bool,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool,
    floating: React.PropTypes.bool,
    hidden: React.PropTypes.bool,
    icon: React.PropTypes.bool,
    size: React.PropTypes.string,
    state: React.PropTypes.oneOf(validProps.state),
    type: React.PropTypes.oneOf(validProps.type),
    visible: React.PropTypes.bool
}

message.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Message = message;
