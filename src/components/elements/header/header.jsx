import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import { validateClassProps, hasChild } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Icon from '../icon/icon';
import Image from '../image/image';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

export default class Header extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A header can have its text aligned to a side
         */
        aligned: PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        /**
         * A header can be attached to other content, like a segment
         */
        attached: PropTypes.oneOfType([
            PropTypes.oneOf(['bottom', 'top']),
            PropTypes.bool
        ]),
        /**
         * A header can be formatted with different colors
         */
        color: PropTypes.string,
        /**
         * A header can show that it is inactive
         */
        disabled: PropTypes.bool,
        /**
         * Header may be used as divider
         */
        divider: PropTypes.bool,
        /**
         * dividing: can be formatted to divide itself from the content below it
         * block: can be formatted to appear inside a content block
         */
        emphasis: PropTypes.oneOf(['dividing', 'block']),
        /**
         * A header can sit to the left or right of other content
         */
        floated: PropTypes.oneOf(['right', 'left']),
        /**
         * Icon name for header. This will turn header into icon header (ui icon header)
         */
        icon: PropTypes.string,
        /**
         * Icon component
         */
        iconComponent: elementType,
        /**
         * A header can have its colors inverted for contrast
         */
        inverted: PropTypes.bool,
        /**
         * May be used as menu item
         */
        item: PropTypes.bool,
        /**
         * May have various sizes
         */
        size: PropTypes.string
    };

    // we don't want the ui in these circumstances
    static contextTypes = {
        isListChild: PropTypes.bool,
        isItemsChild: PropTypes.bool,
        isHeaderChild: PropTypes.bool,
        isAccordionChild: PropTypes.bool,
        isMenuChild: PropTypes.bool,
        isCardChild: PropTypes.bool,
        isModalChild: PropTypes.bool
    };

    // any header/sub header under a header is a sub header
    static childContextTypes = {
        isHeaderChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        attached: false,
        item: true // handles
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon,
        Image: Image
    };
    /* eslint-enable */

    getChildContext() {
        return {
            isHeaderChild: true
        };
    }

    render() {

        /* eslint-disable no-use-before-define */
        let { 
            aligned, attached, children, color, component,
            defaultClasses, disabled, divider, emphasis, floated,
            horizontal, icon, iconComponent, inverted, item, size, ...other 
        } = this.props;
        /* eslint-enable no-use-before-define */

        // add class names
        other.className = classNames(other.className, this.getClasses());
        const IconComponent = iconComponent || Header.Components.Icon;
        let Component = component;
        if (Component === 'div' && this.props.onClick) {
            Component = 'a';
        }
        
        return (
            <Component {...other}>
                {icon &&
                <IconComponent name={icon}/>
                }
                {children}
            </Component>
        );

    }
    
    shouldHaveUiClass() {
        if (!this.props.defaultClasses) {
            return false;
        }
        if (this.context.isListChild || this.context.isHeaderChild || 
            this.context.isMenuChild || this.context.isCardChild || this.context.isItemsChild
        ) {
            return false;
        }
        
        // Modal header shouldn't have ui class only for simple modals, i.e. icon header or header with image/icon 
        // content should HAS ui class
        if (this.context.isModalChild) {
            // Icon header
            if (this.props.icon) {
                return true;
            }
            // Header with icon / image content should has UI class
            if (hasChild(this.props.children, Header.Components.Icon) || hasChild(this.props.children, Header.Components.Image)) {
                return true;
            }
            return false;
        }
        return true;
    }

    getClasses() {
        let classes = {
            // default
            ui: this.shouldHaveUiClass(),

            // types
            icon: this.props.icon,
            item: this.context.isMenuChild && this.props.item,

            // states
            disabled: this.props.disabled,

            // variations
            aligned: this.props.aligned && this.props.aligned !== 'justified',
            attached: this.props.attached,
            block: this.props.emphasis == 'block',
            dividing: this.props.emphasis == 'dividing',
            divider: this.props.divider, // makes a header that is also a divider
            floated: this.props.floated,
            horizontal: this.props.horizontal,
            inverted: this.props.inverted,

            sub: this.context.isHeaderChild && this.props.defaultClasses,
            // component
            header: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        classes = validateClassProps(classes, this.props, validProps);
        if (this.props.aligned === 'justified') {
            classes['justified aligned'] = false;
            classes['justified'] = true;
        }
        return classes;
    }
}
