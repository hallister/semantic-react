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

    if (props.equalWidth) {
        classes['equal width'] = true;
    }

    classes[props.size] = !!props.size;

    return classes;
}

let Form = (props) => {
    /* eslint-disable no-use-before-define */
    let { children, className, component, ...other } = props;
    /* eslint-enable no-use-before-define */
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
    equalWidth: React.PropTypes.bool,
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
    component: 'form',
    defaultClasses: true
}

export default Form;
