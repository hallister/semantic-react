import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Accordion body (content)
 */
let AccordionBody = (props) => {
    const {
        component, children, defaultClasses, active, style, ...other
    } = props;
    const Component = component;
    other.className = classNames(other.className, {
        content: defaultClasses,
        active: active
    });

    // Add em units to padding
    let newStyle = style;
    if (newStyle) {
        if (newStyle.paddingTop) {
            newStyle.paddingTop = `${newStyle.paddingTop}em`;
        }
        if (newStyle.paddingBottom) {
            newStyle.paddingBottom = `${newStyle.paddingBottom}em`;
        }
    }
    // smooth transition
    const { dimensions } = props;
    if (dimensions && dimensions.height - style.height < 2) {
        delete newStyle.height;
    }
    return (
        <Component {...other} style={newStyle}>{children}</Component>
    );
};

AccordionBody.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * True for active (visible) accordion section. This is being set by Accordion itself
     */
    active: React.PropTypes.bool
};

AccordionBody.defaultProps = {
    ...DefaultProps.defaultProps,
    active: false
};

export default AccordionBody;
