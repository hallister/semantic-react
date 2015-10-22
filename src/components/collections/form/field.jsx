import React from 'react';
import { Numbers, hasFirstChild } from '../../utilities';
import { Checkbox, Checkboxes } from '../../modules';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        disabled: props.state === 'disabled',
        error: props.state === 'error',

        required: props.required,
        inline: props.inline,
        grouped: props.grouped
    };

    if (props.width) {
        if (props.width > 0  && props.width <= 16) {
            classes[Numbers[props.width] + ' wide'] = true;
        }
    }

    classes.field = props.defaultClasses;

    return classes;
}


// check if child is checkbox first?
function renderLabel(label) {
    return (
        <label key={label + 'Label'}>{label}</label>
    );
}

let Field = (props) => {
    let { children, className, component, label, width, ...other } = props;
    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        [
            hasFirstChild(children, Checkbox) || hasFirstChild(children, Checkboxes) || label == '' ? '' : renderLabel(props.label),
            children
        ]
    );
};

Field.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    grouped: React.PropTypes.bool,
    inline: React.PropTypes.bool,
    label: React.PropTypes.string,
    required: React.PropTypes.bool,
    state: React.PropTypes.oneOf([
        'disabled',
        'error'
    ]),
    width: React.PropTypes.number
}

Field.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Field = Field;
