import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    corner: ['left', 'right'],
    pointing: ['below', 'left', 'right'],
    ribbon: ['right']
};

function getClasses(props, context) {
    let classes = {
        // default
        ui: props.defaultClasses && !context.isCardsChild && !context.isProgressChild,

        // types
        attached: props.attached,
        corner: props.corner,
        floating: props.floating,
        image: props.image,
        pointing: props.pointing,
        ribbon: props.ribbon,
        tag: props.tag,
        basic: props.basic,
        horizontal: props.horizontal,

        // variations
        circular: props.circular,
        empty: props.empty,

        // component
        label: props.defaultClasses
    };

    // handle mixed string/bool props
    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;

    return validateClassProps(classes, props, validProps);
}

function getComponent(props) {
    return ((props.link || props.onClick) && props.component === 'div') ? 'a' : props.component;
}

/**
 * Label
 */
let Label = (props, context) => {
    const { 
        component, children, defaultClasses, attached, basic, circular, color, corner, empty, floating,
        horizontal, image, link, pointing, ribbon, size, tag, ...other
    } = props;
    let Component = getComponent(props);
    
    other.className = classNames(other.className, getClasses(props, context));
    return (
        <Component {...other}>
            {/* Add img tag if specified image */}
            {image && <img src={image}/>}
            {children}
        </Component>
    );
};

Label.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * A label can attach to a content segment
     */
    attached: React.PropTypes.oneOf(['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right']),
    /**
     * A label can reduce its complexity
     */
    basic: React.PropTypes.bool,
    /**
     * A label can be circular
     */
    circular: React.PropTypes.bool,
    /**
     * A label can have different colors
     */
    color: React.PropTypes.string,
    /**
     * A label can position itself in the corner of an element
     */
    corner: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['left', 'right']),
        React.PropTypes.bool
    ]),
    /**
     * Empty label
     */
    empty: React.PropTypes.bool,
    /**
     * A label can float above another element
     */
    floating: React.PropTypes.bool,
    /**
     * A horizontal label is formatted to label content along-side it horizontally
     */
    horizontal: React.PropTypes.bool,
    
    /**
     * Add image to the label
     */
    image: React.PropTypes.string,
    /**
     * Format label as link (uses <a> tag)
     */
    link: React.PropTypes.bool,
    /**
     * A label can point to content next to it
     */
    pointing: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['below', 'left', 'right']),
        React.PropTypes.bool
    ]),
    /**
     * A label can appear as a ribbon attaching itself to an element.
     */
    ribbon: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['right']),
        React.PropTypes.bool
    ]),

    /**
     * A label can be small or large
     */
    size: React.PropTypes.string,
    /**
     * A label can appear as a tag
     */
    tag: React.PropTypes.bool
};

Label.defaultProps = {
    ...DefaultProps.defaultProps
};

Label.contextTypes = {
    isCardsChild: React.PropTypes.bool,
    isProgressChild: React.PropTypes.bool
};

export default Label;

