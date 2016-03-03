import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,

        feed: props.defaultClasses
    }

    classes[props.size] = !!props.size;

    return classes;
}

let Feed = (props) => {
    /* eslint-disable no-use-before-define */
    let { children, className, component, defaultClasses, size,
          ...other } = props;
    /* eslint-enable no-use-before-define */

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

Feed.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool,
    size: React.PropTypes.string
}

Feed.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Feed = Radium(Feed);
