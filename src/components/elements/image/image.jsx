import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'react-prop-types/lib/elementType';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

const validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left'],
    spaced: ['right', 'left']
};

/**
 * Just an image
 */
export default class Image extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * An image can specify its vertical alignment
         */
        aligned: PropTypes.oneOf(['top', 'middle', 'bottom']),
        /**
         * An image may be formatted to appear inline with text as an avatar
         */
        avatar: PropTypes.bool,
        /**
         * An image may include a border to emphasize the edges of white or transparent content
         */
        bordered: PropTypes.bool,
        /**
         * An image can appear centered in a content block
         */
        centered: PropTypes.bool,
        /**
         * An image can take up the width of its container
         */
        fluid: PropTypes.bool,
        /**
         * An image can sit to the left or right of other content
         */
        floated: PropTypes.oneOf(['right', 'left']),
        /**
         * An image may appear at different sizes
         */
        size: PropTypes.string,
        /**
         * An image can specify that it needs an additional spacing to separate it from nearby content
         */
        spaced: PropTypes.oneOfType([
            PropTypes.oneOf(['right', 'left']),
            PropTypes.bool
        ]),
        /**
         * Image src
         */
        src: PropTypes.string.isRequired,
        /**
         * Image shape
         */
        shape: PropTypes.oneOf(['circular', 'rounded']),
        /**
         * Image state, could be disabled or hidden
         */
        state: PropTypes.oneOf(['disabled', 'visible', 'hidden']),
        /**
         * Wrap image component under other component, for example <a/> or <div/>
         * In this case this component will receive image classes instead
         */
        wrapComponent: PropTypes.oneOfType([
            PropTypes.bool,
            elementType
        ])
    };

    static contextTypes = {
        isCommentsChild: PropTypes.bool, // Image in Comment should be wrapper into <div/>
        isItemsChild: PropTypes.bool // Image in Items should be wrapped into <div/>
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'img',
        wrapComponent: false
    };

    render() {
        const {
            component, children, defaultClasses, aligned, avatar, bordered, centered,
            fluid, floated, size, spaced, src, state, shape, wrapComponent, ...other
        } = this.props;

        other.className = classNames(other.className, this.getClasses());
        let ImageComponent = component;
        if (this.shouldWrapIntoDiv() || wrapComponent) {
            const WrapComponent = (typeof wrapComponent === 'undefined' || typeof wrapComponent === 'boolean') ? 'div' : wrapComponent;
            return (
                <WrapComponent {...other}>
                    {children}
                    <ImageComponent src={src}/>
                </WrapComponent>
            );
        } else {
            return (
                <ImageComponent {...other} src={src}/>
            );
        }
    }

    getClasses() {
        let classes = {
            // Do not set ui class if image is items child, but set anyway is items child and should has size prop
            ui: this.props.defaultClasses && (!this.context.isItemsChild || (this.context.isItemsChild && this.props.size)),
            image: this.props.defaultClasses,

            // variations
            aligned: this.props.aligned,
            avatar: this.props.avatar,
            bordered: this.props.bordered,
            centered: this.props.centered,
            circular: this.props.shape === 'circular',
            floated: this.props.floated,
            fluid: this.props.fluid,
            rounded: this.props.shape === 'rounded',
            spaced: this.props.spaced
        };

        classes[this.props.state] = !!this.props.state;
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }

    /**
     * Return true if image should be forced wrapped into div
     * @returns {boolean}
     */
    shouldWrapIntoDiv() {
        return (this.context.isCommentsChild || this.context.isItemsChild || React.Children.count(this.props.children) > 0);
    }
}
