import React from 'react';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';
import DefaultProps from './../../defaultProps';

const validProps = {
    animated: ['vertical', 'fade'],
    attached: ['left', 'right', 'bottom', 'top'],
    floated: ['left', 'right']
};

/**
 * Assign button classes
 * @param props
 * @param context
 */
function getClasses(props, context) {
    let classes = {
        // default
        ui: props.defaultClasses,

        // position based props
        floated: props.floated,
        attached: props.attached,

        // types
        animated: props.animated,
        basic: props.basic,
        inverted: props.inverted,

        // variations
        circular: props.circular,
        compact: props.compact,
        fluid: props.fluid,

        // component
        button: props.defaultClasses
    };

    // string types
    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;
    classes[props.social] = !!props.social;
    classes[props.emphasis] = !!props.emphasis;
    classes[props.state] = !!props.state;

    return validateClassProps(classes, props, validProps);
}

/**
 * Basic button. Icon and labeled buttons have own components
 */
let Button = (props, context) => {
    // consume props
    let { animated, attached, basic, children, circular, color, component,
        compact, defaultClasses, emphasis, floated, fluid, 
        inverted, size, state, toggle,
        ...other
    } = props;
    
    let Component = (attached || context.isAttached || animated || React.Children.count(props.children) > 1) ? 'div' : 'button';
    if (component) {
        Component = component;
    }
    
    other.className = classNames(other.className, getClasses(props, context));
    
    return (
        <Component {...other}>
            {children}
        </Component>
    );
};

/**
 * Button props
 */
Button.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Adds a fade or slide animation on hover.
     */
    animated: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['fade', 'vertical']),
        React.PropTypes.bool
    ]),

    /**
     * It's attached to some other attachable component.
     */
    attached: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
        React.PropTypes.bool
    ]),

    /**
     * Adds simple styling to the component.
     */
    basic: React.PropTypes.bool,

    /**
     * A button can be circular
     */
    circular: React.PropTypes.bool,

    /**
     * Adds a SemanticUI color class.
     */
    color: React.PropTypes.string,

    /**
     * Reduces the padding on the component.
     */
    compact: React.PropTypes.bool,

    /**
     * A button can be formatted to show different levels of emphasis
     */
    emphasis: React.PropTypes.oneOf(['primary', 'secondary', 'positive', 'negative']),

    /**
     * Forces to component to float left or right.
     */
    floated: React.PropTypes.oneOf(['left', 'right']),

    /**
     * The component fills the parent components horizontal space.
     */
    fluid: React.PropTypes.bool,

    /**
     * Styles the component for a dark background.
     */
    inverted: React.PropTypes.bool,

    /**
     * Adds a SemanticUI size class.
     */
    size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),

    /**
     * Indicates whether the button is currently highlighted or disabled.
     */
    state: React.PropTypes.oneOf(['active', 'disabled', 'loading']),

    /**
     * A button can be formatted to toggle on and off
     */
    toggle: React.PropTypes.bool
};

/**
 * Default props
 */
Button.defaultProps = {
    defaultClasses: true
};

/**
 * Context types
 */
Button.contextTypes = {
    isAttached: React.PropTypes.bool
};

export default Button;
