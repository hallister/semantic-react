import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Defines dimmable section
 */
let Dimmable = ({ component, dimmed, blurring, ...other }) => {
    const classes = {
        dimmable: other.defaultClasses,
        dimmed: dimmed,
        blurring: blurring
    };
    
    other.className = classNames(other.className, classes);
    let Component = component;
    return (
        <Component {...other} />
    );
};

Dimmable.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Blur dimmer
     */
    blurring: React.PropTypes.bool,
    /**
     * Add dimmed class to dimmable. This could be omitted and you can instead set overflow: hidden instead
     */
    dimmed: React.PropTypes.bool
};

Dimmable.defaultProps = {
    ...DefaultProps.defaultProps,
    dimmed: false,
    blurring: false
};

export default Dimmable;

