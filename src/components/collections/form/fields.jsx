import React from 'react';
import { countChildren, Numbers } from '../../utilities';
import { Field } from './field';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        grouped: props.grouped,
        inline: props.inline
    };

    if (props.fluid) {
        let childCount = countChildren(props.children, Field)

        if (childCount > 0  && childCount <= 12) {
            classes[Numbers[childCount]] = true;
        }
    }

    if (props.equalWidth) {
        classes['equal width'] = true;
    }

    classes.fields = props.defaultClasses;

    return classes;
}

let Fields = (props) => {
    let { children, className, component, ...other } = props;
    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

Fields.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    equalWidth: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    grouped: React.PropTypes.bool,
    inline: React.PropTypes.bool
}

Fields.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Fields = Fields;
