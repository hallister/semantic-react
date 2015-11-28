import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    return {
        ui: props.defaultClasses,

        extra: props.extra,

        text: props.defaultClasses
    };
}

let Text = (props) => {
    let { children, className, component, defaultClasses, extra,
          ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

Text.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool,
    extra: React.PropTypes.bool
};

Text.defaultProps = {
    component: 'div',
    defaultClasses: true
};

export default Text;
