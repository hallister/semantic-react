import React from 'react';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import { validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Icon from './../icon/icon';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

export default class Header extends React.Component {
    static propTypes = {
        ...DefaultProps.defaultProps,
        /**
         * A header can have its text aligned to a side
         */
        aligned: React.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        /**
         * A header can be attached to other content, like a segment
         */
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['bottom', 'top']),
            React.PropTypes.bool
        ]),
        /**
         * A header can be formatted with different colors
         */
        color: React.PropTypes.string,
        /**
         * A header can show that it is inactive
         */
        disabled: React.PropTypes.bool,
        /**
         * Header may be used as divider
         */
        divider: React.PropTypes.bool,
        /**
         * dividing: can be formatted to divide itself from the content below it
         * block: can be formatted to appear inside a content block
         */
        emphasis: React.PropTypes.oneOf(['dividing', 'block']),
        /**
         * A header can sit to the left or right of other content
         */
        floated: React.PropTypes.oneOf(['right', 'left']),
        /**
         * Icon name for header. This will turn header into icon header (ui icon header)
         */
        icon: React.PropTypes.string,
        /**
         * Icon component
         */
        iconComponent: elementType,
        /**
         * A header can have its colors inverted for contrast
         */
        inverted: React.PropTypes.bool,
        /**
         * May be used as menu item
         */
        item: React.PropTypes.bool,
        /**
         * May have various sizes
         */
        size: React.PropTypes.string
    };

    // we don't want the ui in these circumstances
    static contextTypes = {
        isListChild: React.PropTypes.bool,
        isHeaderChild: React.PropTypes.bool,
        isAccordionChild: React.PropTypes.bool,
        isMenuChild: React.PropTypes.bool,
        isCardChild: React.PropTypes.bool,
        isModalChild: React.PropTypes.bool
    };

    // any header/sub header under a header is a sub header
    static childContextTypes = {
        isHeaderChild: React.PropTypes.bool
    };

    static defaultProps = {
        ... DefaultProps.defaultProps,
        attached: false,
        item: true // handles
    };

    getChildContext() {
        return {
            isHeaderChild: true
        };
    }

    render() {

        /* eslint-disable no-use-before-define */
        let { 
            aligned, attached, children, className, color, component,
            defaultClasses, disabled, divider, emphasis, floated,
            horizontal, icon, iconComponent, inverted, item, size, ...other 
        } = this.props;
        /* eslint-enable no-use-before-define */

        // add class names
        other.className = classNames(other.className, this.getClasses());
        const IconComponent = iconComponent || Icon;
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

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses && 
                !this.context.isListChild && 
                !this.context.isHeaderChild && 
                !this.context.isMenuChild && 
                !this.context.isCardChild && 
                !(this.context.isModalChild && !this.props.icon),

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
