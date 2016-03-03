import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

function getClasses(props) {
    return {
        ui: props.defaultClasses,

        extra: props.extra,

        text: props.defaultClasses
    };
}

let Text = (props) => {
    /* eslint-disable no-use-before-define */
    let { children, className, component, defaultClasses, extra,
          ...other } = props;
    /* eslint-enable no-use-before-define */

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

export default Radium(Text);
