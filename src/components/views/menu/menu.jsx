import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import classNames from 'classnames';
import { defaultPropTypes, defaultPropValues } from '../../defaultProps';
import { MenuItem } from './menuitem';
import { hasChild } from '../../utilities';

let validProps = {
    attached: ['top', 'bottom'],
    fitted: ['horizontally', 'vertically']
};

/**
 * Menu. Could be simple or controlled. Controlled menu will be activated by providing value property and will manage
 * current active item and fire onChange callback when value was changed
 */
export class Menu extends React.Component {
    static propTypes = {
        ...defaultPropTypes,
        /**
         * A menu may be attached to other content segments
         */
        attached: React.PropTypes.oneOf(['top', 'bottom']),
        /**
         * A menu item or menu can have no borders
         */
        borderless: React.PropTypes.bool,
        /**
         * Use equal width for menu items
         */
        even: React.PropTypes.bool,
        /**
         * A menu item or menu can remove element padding, vertically or horizontally
         */
        fitted: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.oneOf(['horizontally', 'vertically'])
        ]),
        /**
         * A menu can be fixed to a side of its context
         */
        fixed: React.PropTypes.bool,
        /**
         * A vertical menu may take the size of its container. (A horizontal menu does this by default) 
         */
        fluid: React.PropTypes.bool,
        /**
         * A menu may have its colors inverted to show greater contrast
         */
        inverted: React.PropTypes.bool,
        /**
         * Callback for menu item click (regardless active or not active)
         */
        onMenuItemClick: React.PropTypes.func,
        /**
         * Callback for active item change. It will not fire if clicking at already active item
         */
        onMenuChange: React.PropTypes.func,
        /**
         * A pagination menu is specially formatted to present links to pages of content 
         */
        pagination: React.PropTypes.bool,
        /**
         * A menu can point to show its relationship to nearby content
         */
        pointing: React.PropTypes.bool,
        /**
         * A menu can be formatted to float right
         */
        right: React.PropTypes.bool,
        /**
         * A menu can adjust its appearance to de-emphasize its contents
         */
        secondary: React.PropTypes.bool,
        /**
         * A menu can be formatted to show tabs of information
         */
        tabular: React.PropTypes.bool,
        /**
         * A menu can be formatted for text content
         */
        text: React.PropTypes.bool,
        /**
         * Menu active value
         */
        value: React.PropTypes.any,
        /**
         * A vertical menu displays elements vertically..
         */
        vertical: React.PropTypes.bool
    };

    static contextTypes = {
        isMenuChild: React.PropTypes.bool,
        isDropdownChild: React.PropTypes.bool
    };

    static childContextTypes = {
        isMenuChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...defaultPropValues,
        onMenuItemClick: () => {},
        onMenuChange: () => {}
    };
    
    constructor(props) {
        super(props);
        this.state = {
            activeItem: props.value
        }
    }
    
    getChildContext() {
        return {
            isMenuChild: true
        };
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.value) {
            this.setState({
                activeItem: nextProps.value
            });
        }
    }


    onMenuItemClick(value) {
        this.props.onMenuItemClick(value);
        if (this.state.activeItem !== value) {
            this.setState({
                activeItem: value
            });
            this.props.onMenuChange(value);
        }
    }
    
    renderChildren() {
        // If this is not controlled menu do not do anything with childs
        if (typeof this.props.value === 'undefined') {
            return this.props.children;
        }
        
        // should deep traverse?
        let newChildren = React.Children.map(this.props.children, child => {
            // Process if a child is MenuItem
            if (child.type === MenuItem) {
                return React.cloneElement(child, {
                    active: this.state.activeItem === child.props.value,
                    key: child.props.value,
                    onClick: this.onMenuItemClick.bind(this)
                });
            } else {
                // Menu could contain non items, for example divider, pass it untouched (only add key)
                return React.cloneElement(child, {
                    key: child.props.children
                });
            }
        });
        
        return newChildren;
        
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { attached, borderless, component, even, fitted, fixed, fluid, inverted, pagination,
            pointing, right, secondary, tabular, text, value, vertical, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        if (this.props.component == Menu) {
            component = 'div';
        } else {
            component = this.props.component;
        }
        
        let children = this.renderChildren();

        return React.createElement(
            component,
            other,
            children
        );
    }
    
    getClasses() {
        let childCount = React.Children.count(this.props.children);

        let classes = {
            // default
            ui: this.props.defaultClasses && !this.context.isMenuChild && !this.context.isDropdownChild,

            // numbers

            // position
            right: this.props.right,
            top: false,
            bottom: false,

            // variations
            item: this.props.even && childCount > 0,
            borderless: this.props.borderless,
            attached: this.props.attached,
            inverted: this.props.inverted,
            pagination: this.props.pagination,
            pointing: this.props.pointing,
            secondary: this.props.secondary,
            tabular: this.props.tabular,
            vertical: this.props.vertical,
            fluid: this.props.fluid,
            fixed: this.props.fixed,
            fitted: this.props.fitted,
            text: this.props.text,

            // dropdown
            visible: this.context.isDropdownChild,
            transition: this.context.isDropdownChild,

            // component
            menu: this.props.defaultClasses
        };

        if (this.props.even && childCount > 0) {
            if (childCount > 0  && childCount <= 12) {
                classes[Numbers[childCount]] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps);
    }
}
