import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    attached: ['bottom', 'top'],
    type: ['info', 'warning', 'positive', 'negative'],
    state: ['success', 'error']
};

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,

        compact: props.compact,
        floating: props.floating,
        hidden: props.hidden,
        icon: props.icon,
        visible: props.visible,

        info: props.type === 'info' && !props.state,
        warning: props.type === 'warning' && !props.state,
        positive: props.type === 'positive' && !props.state,
        negative: props.type === 'negative' && !props.state,

        success: props.state === 'success',
        error: props.state === 'error',

        message: props.defaultClasses
    }

    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;
    return validateClassProps(classes, props, validProps);
}

let message = (props) => {
    let { attached, children, className, color, compact, component,
          defaultClasses, floating, hidden, icon, size, state, type, visible,
          ...other } = props;

    other.className = classNames(className, getClasses(props));

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
