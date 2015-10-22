import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        text: props.defaultClasses
    }

    return classes;
}

let text = (props) => {
    let { children, className, component, defaultClasses, ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

text.propTypes = {
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool
}

text.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Text = text;
