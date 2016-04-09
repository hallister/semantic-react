import React from 'react';
import elementType from 'react-prop-types/lib/elementType';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

const validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left'],
    spaced: ['right', 'left']
};

function getClasses(props, context) {
    let classes = {
        // Do not set ui class if image is items child, but set anyway is items child and should has size prop
        ui: props.defaultClasses && (!context.isItemsChild || (context.isItemsChild && props.size)),
        image: props.defaultClasses,
        
        // variations
        aligned: props.aligned,
        avatar: props.avatar,
        bordered: props.bordered,
        centered: props.centered,
        circular: props.shape === 'circular',
        floated: props.floated,
        fluid: props.fluid,
        rounded: props.shape === 'rounded',
        spaced: props.spaced
    };
    
    classes[props.state] = !!props.state;
    classes[props.size] = !!props.size;
    
    return validateClassProps(classes, props, validProps);
}

/**
 * Return true if image should be forced wrapped into div
 * @param context
 * @returns {boolean}
 */
function shouldWrapIntoDiv(context) {
    return (context.isCommentsChild || context.isItemsChild);
}

/**
 * Just an image
 */
let Image = (props, context) => {
    const { 
        component, children, defaultClasses, aligned, avatar, bordered, centered,
        fluid, floated, size, spaced, src, state, shape, wrapComponent, ...other
    } = props;
    
    other.className = classNames(other.className, getClasses(props, context));
    let ImageComponent = component;
    if (shouldWrapIntoDiv(context) || wrapComponent) {
        const WrapComponent = (typeof wrapComponent === 'undefined' || typeof wrapComponent === 'boolean') ? 'div' : wrapComponent;
        return (
            <WrapComponent {...other}>
                <ImageComponent src={src}/>
            </WrapComponent>
        );
    } else {
        return (
            <ImageComponent {...other} src={src}/>
        );
    }
};

Image.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * An image can specify its vertical alignment
     */
    aligned: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
    /**
     * An image may be formatted to appear inline with text as an avatar
     */
    avatar: React.PropTypes.bool,
    /**
     * An image may include a border to emphasize the edges of white or transparent content
     */
    bordered: React.PropTypes.bool,
    /**
     * An image can appear centered in a content block
     */
    centered: React.PropTypes.bool,
    /**
     * An image can take up the width of its container
     */
    fluid: React.PropTypes.bool,
    /**
     * An image can sit to the left or right of other content
     */
    floated: React.PropTypes.oneOf(['right', 'left']),
    /**
     * An image may appear at different sizes 
     */
    size: React.PropTypes.string,
    /**
     * An image can specify that it needs an additional spacing to separate it from nearby content
     */
    spaced: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['right', 'left']),
        React.PropTypes.bool
    ]),
    /**
     * Image src
     */
    src: React.PropTypes.string.isRequired,
    /**
     * Image shape
     */
    shape: React.PropTypes.oneOf(['circular', 'rounded']),
    /**
     * Image state, could be disabled or hidden
     */
    state: React.PropTypes.oneOf(['disabled', 'visible', 'hidden']),
    /**
     * Wrap image component under other component, for example <a/> or <div/>
     * In this case this component will receive image classes instead
     */
    wrapComponent: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        elementType
    ])
};

Image.defaultProps = {
    ...DefaultProps.defaultProps,
    component: 'img',
    wrapComponent: false
};

Image.contextTypes = {
    isCommentsChild: React.PropTypes.bool, // Image in Comment should be wrapper into <div/>
    isItemsChild: React.PropTypes.bool // Image in Items should be wrapped into <div/>
};

export default Image;
