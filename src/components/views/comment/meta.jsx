import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        metadata: props.defaultClasses
    }

    return classes;
}

let meta = (props) => {
    let { children, className, component, defaultClasses, ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

meta.propTypes = {
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool
}

meta.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Meta = meta;
