import React from 'react';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center']
};

function getClasses(props) {
    let classes = {
        ui: true,
        container: true,
        fluid: props.fluid,

        aligned: props.aligned && props.aligned !== 'justified'
    };

    return validateClassProps(classes, props, validProps);
}

let Container = ({ children, className, component, ...other }) => {
    other.className = classNames(className, getClasses(other));

    return React.createElement(
        component,
        other,
        children
    );
};

Container.propTypes = {
    aligned: React.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    fluid: React.PropTypes.bool
};

Container.defaultProps = {
    component: 'div'
};

export default Container;
