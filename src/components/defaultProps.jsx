/**
 * Default prop types
 */

import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'react-prop-types/lib/elementType';

/**
 * Need component to pass into react-docgen
 */
let DefaultProps = () => {
    return <noscript />
};

DefaultProps.propTypes = {
    /**
     * Children nodes
     */
    children: PropTypes.node,
    /**
     * Use other component for composing results: <DropdownMenu component={Button}>
     */
    component: elementType,
    /**
     * Apply default semantic UI classes for component, for example ui button
     */
    defaultClasses: PropTypes.bool,
    /**
     * Additional CSS ui classes
     */
    className: PropTypes.string
};

DefaultProps.defaultProps = {
    component: 'div',
    defaultClasses: true
};

export default DefaultProps;
