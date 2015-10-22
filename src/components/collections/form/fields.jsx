import React from 'react';
import { countChildren, Numbers } from '../../utilities';
import { Field } from './field';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {};

    if (props.fluid) {
        let childCount = countChildren(props.children, Field)

        if (childCount > 0  && childCount <= 12) {
            classes[Numbers[childCount]] = true;
        }
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
    fluid: React.PropTypes.bool
}

Fields.defaultProps = {
    component: 'div'
}

exports.Fields = Fields;
