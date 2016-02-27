/**
 * Default prop types
 */

import React from 'react';
import elementType from 'react-prop-types/lib/elementType';

/**
 * Default component propTypes applied almost to every component
 */
export const defaultPropTypes = {
    /**
     * Children nodes
     */
    children: React.PropTypes.node,
    /**
     * Use other component for composing results
     * @example
     * <Grid component={Container}>...</Grid>
     */
    component: elementType,
    /**
     * Apply default semantic UI classes for component, for example ui button
     */
    defaultClasses: React.PropTypes.bool,
    /**
     * Additional CSS ui classes
     */
    className: React.PropTypes.node
};

/**
 * Default Prop values
 */
export const defaultPropValues = {
    component: 'div',
    defaultClasses: true
};