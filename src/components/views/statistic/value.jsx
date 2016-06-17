import React from 'react';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';

let validProps = {
    text: [true, false]
};

function getClasses(props) {
    let classes = {
        value: true,
        text: false
    };

    return validateClassProps(classes, props, validProps);
}

let Value = ({ children, className, component, ...other }) => {
    other.className = classNames(className, getClasses(other));

    return React.createElement(
        component,
        other,
        children
    );
};

Value.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    text: React.PropTypes.bool
};

Value.defaultProps = {
    component: 'div'
};

export default Value;
