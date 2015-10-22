import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,

        loading: props.loading,

        error: props.state === 'error',
        success: props.state === 'success',
        warning: props.state === 'warning',

        inverted: props.inverted,

        form: props.defaultClasses
    }

    classes[props.size] = !!props.size;

    return classes;
}

let Form = (props) => {
    let { children, className, component, ...other } = props;
    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

Form.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool,
    inverted: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    size: React.PropTypes.string,
    state: React.PropTypes.oneOf([
        'success',
        'error',
        'warning'
    ])
}

Form.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Form = Form;
