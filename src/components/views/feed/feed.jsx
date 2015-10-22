import React from 'react';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,

        feed: props.defaultClasses
    }

    classes[props.size] = !!props.size;

    return classes;
}

let Feed = (props) => {
    let { children, className, component, defaultClasses, size,
          ...other } = props;

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

exports.Feed = Feed;
