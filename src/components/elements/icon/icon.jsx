import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    flipped: ['horizontally', 'vertically'],
    rotated: ['clockwise', 'counterclockwise']
};

export function getClasses(props) {
    let classes = {
        // default
        // variations
        bordered: props.bordered,
        circular: props.circular,
        corner: props.corner,
        disabled: props.state === 'disabled',
        fitted: props.fitted,
        link: props.link || props.onClick,
        inverted: props.inverted,
        loading: props.state === 'loading',

        // component
        icon: props.defaultClasses
    };

    // handle all string or mixed string/bool props

    // classes[this.props.aligned] = !!this.props.aligned;
    classes[props.size] = !!props.size;
    classes[props.color] = !!props.color;
    classes[props.name] = !!props.name;
    classes[props.pointing] = !!props.pointing;

    return validateClassProps(classes, props, validProps);
}

/**
 * Icon
 */
let Icon = (props) => {
    const {
        component, defaultClasses, children, bordered, circular, color, corner, state, fitted, flipped,
        inverted, link, name, size, rotated, ...other
    } = props;
    let Component = component;
    other.className = classNames(other.className, getClasses(props));
    return (<Component {...other}>{children}</Component>);
};

Icon.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * An icon can be formatted to appear bordered
     */
    bordered: React.PropTypes.bool,
    /**
     * An icon can be formatted to appear circular
     */
    circular: React.PropTypes.bool,
    /**
     * An icon can be formatted with different colors
     */
    color: React.PropTypes.string,
    /**
     * Render as corner icon if used in <Icons/>
     */
    corner: React.PropTypes.bool,
    /**
     * Icon could be disabled or used as simple loader
     */
    state: React.PropTypes.oneOf(['disabled', 'loading']),
    /**
     * An icon can be fitted, without any space to the left or right of it.
     */
    fitted: React.PropTypes.bool,
    /**
     * An icon can be flipped
     */
    flipped: React.PropTypes.oneOf(['horizontally', 'vertically']),
    /**
     * An icon can have its colors inverted for contrast
     */
    inverted: React.PropTypes.bool,
    /**
     * Could be formatted as link
     */
    link: React.PropTypes.bool,
    /**
     * Icon name
     */
    name: React.PropTypes.string,
    /**
     * Icon size
     */
    size: React.PropTypes.string,
    /**
     * An icon can be rotated
     */
    rotated: React.PropTypes.oneOf(['clockwise', 'counterclockwise'])
};

Icon.defaultProps = {
    ...DefaultProps.propTypes,
    component: 'i'
};

export default Icon;
