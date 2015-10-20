import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['right', 'left', 'center']
};

function getClasses(props) {
    let classes = {
        collapsing: props.collapsing,

        positive: props.type === 'positive' && !props.state,
        negative: props.type === 'negative' && !props.state,
        warning: props.type === 'warning' && !props.state,

        active: props.state === 'active',
        error: props.state === 'error',
        disabled: props.state === 'disabled',

        'single line': props.singleLine
    }

    classes[props.type] = !!props.type;

    return validateClassProps(classes, props, validProps);
}

let td = (props) => {

    let { children, className, collapsing, component, singleLine, state, type,
        ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

td.propTypes = {
    aligned: React.PropTypes.oneOf(validProps.aligned),
    className: React.PropTypes.any,
    collapsing: React.PropTypes.bool,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    singleLine: React.PropTypes.bool,
    type: React.PropTypes.oneOf(['negative', 'positive', 'warning'])
}

td.defaultProps = {
    component: 'td'
}

exports.Td = td;
