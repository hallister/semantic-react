import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['top', 'bottom'],
    basic: ['very'],
    padded: ['very'],
    valigned: ['center', 'right']
};

function mobileFormat(name, options) {
    let classes = {};

    Object.keys(options).forEach(value => {
        if (options[value])
            classes[value + ' ' + name] = true;
    });

    // all of the options are true?
    return classes;
}

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,

        basic: props.basic,
        collapsing: props.collapsing,
        compact: props.compact,
        celled: props.celled,
        definition: props.definition,
        fixed: props.fixed,
        inverted: props.inverted,
        selectable: props.selectable,
        'single line': props.singleLine,
        striped: props.striped,
        structured: props.structured,

        table: props.defaultClasses
    }

    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;

    if (props.columns !== false) {
        if (props.columns > 0 && props.columns <= 16) {
            classes[Numbers[props.columns] + ' column'] = true;
        }
    }

    if (props.width !== false) {
        if (props.width > 0 && props.width <= 16) {
            classes[Numbers[props.width] + ' wide'] = true;
        }
    }

    return validateClassProps(classes, props, validProps, { valigned: 'aligned' });
}

let table = (props) => {
    let { basic, celled, children, className, collapsing, compact, component,
          defaultClasses, definition, fixed, inverted, selectable, singleLine,
          stackable, striped, structured, unstackable, valigned,
          ...other } = props;

    other.className = classNames(
        className,
        getClasses(props),
        mobileFormat('stackable', stackable),
        mobileFormat('unstackable', unstackable)
    );

    return React.createElement(
        component,
        other,
        children
    );
};

table.propTypes = {
    aligned: React.PropTypes.oneOf(validProps.aligned),
    basic: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(validProps.basic),
        React.PropTypes.bool
    ]),
    celled: React.PropTypes.bool,
    className: React.PropTypes.any,
    collapsing: React.PropTypes.bool,
    color: React.PropTypes.string,
    columns: React.PropTypes.number,
    compact: React.PropTypes.bool,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool,
    definition: React.PropTypes.bool,
    fixed: React.PropTypes.bool,
    inverted: React.PropTypes.bool,
    padded: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(validProps.padded),
        React.PropTypes.bool
    ]),
    selectable: React.PropTypes.bool,
    singleLine: React.PropTypes.bool,
    size: React.PropTypes.string,
    stackable: React.PropTypes.shape({
        computer: React.PropTypes.bool,
        mobile: React.PropTypes.bool,
        tablet: React.PropTypes.bool
    }),
    striped: React.PropTypes.bool,
    structured: React.PropTypes.bool,
    unstackable: React.PropTypes.shape({
        computer: React.PropTypes.bool,
        mobile: React.PropTypes.bool,
        tablet: React.PropTypes.bool
    }),
    valigned: React.PropTypes.oneOf(validProps.valigned),
    width: React.PropTypes.number
}

table.defaultProps = {
    component: 'table',
    defaultClasses: true,
    stackable: {
        computer: false,
        mobile: false,
        tablet: false
    },
    unstackable: {
        computer: false,
        mobile: false,
        tablet: false
    }
}

exports.Table = table;
