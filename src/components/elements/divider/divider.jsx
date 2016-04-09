import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

function getClasses(props) {
    return {
        // default
        ui: props.defaultClasses,

        // types
        header: props.header,
        horizontal: props.aligned === 'horizontal',
        vertical: props.aligned === 'vertical',

        // variations
        clearing: props.clearing,
        fitted: props.spacing === 'fitted',
        hidden: props.hidden,
        inverted: props.inverted,
        section: props.spacing === 'padded',

        // component
        divider: props.defaultClasses
    };
}

/**
 * Divider
 */
let Divider = (props) => {
    const { aligned, children, clearing, component, defaultClasses,
        header, hidden, inverted, spacing, ...other } = props;
    
    let Component = component;
    other.className = classNames(other.className, getClasses(props));
    return (
        <Component {...other}>{children}</Component>
    );
};

Divider.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Content segment vertically or horizontally
     */
    aligned: React.PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * A divider can clear the contents above it
     */
    clearing: React.PropTypes.bool,
    /**
     * Formats divider as header-like (taking less space and don't capitalize content)
     */
    header: React.PropTypes.bool,
    /**
     * A hidden divider divides content without creating a dividing line
     */
    hidden: React.PropTypes.bool,
    /**
     * A divider can have its colors inverted
     */
    inverted: React.PropTypes.bool,
    /**
     * Divider spacing
     */
    spacing: React.PropTypes.oneOf(['fitted', 'padded'])
};

Divider.defaultProps = {
    ...DefaultProps.defaultProps
};

export default Divider;

