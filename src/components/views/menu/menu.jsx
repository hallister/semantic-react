import React from 'react';
import PropTypes from 'prop-types';
import { Numbers, validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    attached: ['top', 'bottom'],
    fixed: ['top', 'bottom', 'right', 'left'],
    fitted: ['horizontally', 'vertically'],
    floated: ['right', 'left']
};

/**
 * Menu. Could be simple or controlled. Controlled menu will be activated by providing value property and will manage
 * current active item and fire onChange callback when value was changed
 */
export default class Menu extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A menu may be attached to other content segments
         */
        attached: PropTypes.oneOf(['top', 'bottom']),
        /**
         * A menu item or menu can have no borders
         */
        borderless: PropTypes.bool,
        /**
         * Use equal width for menu items
         */
        even: PropTypes.bool,
        /**
         * A menu item or menu can remove element padding, vertically or horizontally
         */
        fitted: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['horizontally', 'vertically'])
        ]),
        /**
         * A menu can be fixed to a side of its context
         */
        fixed: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['right', 'left', 'top', 'bottom'])
        ]),
        /**
         * Float left or right
         */
        floated: PropTypes.oneOf(['right', 'left']),
        /**
         * A vertical menu may take the size of its container. (A horizontal menu does this by default)
         */
        fluid: PropTypes.bool,
        /**
         * A menu can be formatted with different colors
         */
        color: PropTypes.string,
        /**
         * A menu may have its colors inverted to show greater contrast
         */
        inverted: PropTypes.bool,
        /**
         * Menu active value
         */
        menuValue: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
        ]),
        /**
         * Callback for active item change. Will not be fired if menuValue was omitted
         * Will pass new menuValue or array of new menuValue
         * If all items were unselected would pass null if menuValue is single value or empty array if menuValue is array
         */
        onMenuChange: PropTypes.func,
        /**
         * Callback for menu item click
         */
        onMenuItemClick: PropTypes.func,
        /**
         * A pagination menu is specially formatted to present links to pages of content
         */
        pagination: PropTypes.bool,
        /**
         * A menu can point to show its relationship to nearby content
         */
        pointing: PropTypes.bool,
        /**
         * A menu can adjust its appearance to de-emphasize its contents
         */
        secondary: PropTypes.bool,
        /**
         * A menu can be formatted to show tabs of information
         */
        tabular: PropTypes.bool,
        /**
         * A menu can be formatted for text content
         */
        text: PropTypes.bool,
        /**
         * A vertical menu displays elements vertically..
         */
        vertical: PropTypes.bool
    };

    static contextTypes = {
        isMenuChild: PropTypes.bool,
        isDropdownChild: PropTypes.bool
    };

    static childContextTypes = {
        isMenuChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        onMenuItemClick: () => {},
        onMenuChange: () => {}
    };

    getChildContext() {
        return {
            isMenuChild: true
        };
    }

    onMenuItemClick = (value, event) => {
        this.props.onMenuItemClick(value, event);
        // Call onMenuChange callback when needed
        if (typeof this.props.menuValue !== 'undefined') {
            // Multiple menu selection
            if (Array.isArray(this.props.menuValue)) {
                if (this.props.menuValue.indexOf(value) !== -1) {
                    // Unselect menu item
                    this.props.onMenuChange(this.props.menuValue.filter(val => val !== value));
                } else {
                    // select menu item
                    this.props.onMenuChange([...this.props.menuValue, value]);
                }
                // Single menu selection
            } else {
                // calling with null if clicking on same item, because we might want to unselect menu item
                this.props.onMenuChange(this.props.menuValue !== value ? value : null);
            }
        }
    };

    renderChildren() {
        // should deep traverse?
        return React.Children.map(this.props.children, child => {
            // It may be empty
            if (!child) return child;

            // Process if a child has menuValue property
            if (typeof child.props.menuValue !== 'undefined') {
                return React.cloneElement(child, {
                    // If child has active property, then pass it
                    active: (typeof child.props.active !== 'undefined') ? child.props.active : this.isActiveItem(child.props.menuValue),
                    key: child.props.menuValue,
                    onClick: this.onMenuItemClick
                });
            } else {
                // Menu could contain non items, for example divider, pass it untouched (only add key)
                return React.cloneElement(child, {
                    key: (typeof child.key !== 'undefined') ? child.key : child.props.children
                });
            }
        });
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { attached, borderless, color, component, defaultClasses, even, fitted, fixed, fluid, floated, inverted, pagination,
            pointing, secondary, tabular, text, vertical,
            menuValue, onMenuChange, onMenuItemClick, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        const Component = component;

        return (
            <Component {...other}>
                {this.renderChildren()}
            </Component>
        );
    }

    /**
     * Returns true if it should be active item
     * @param value
     */
    isActiveItem(value) {
        if (typeof value === 'undefined') return false;
        if (typeof this.props.menuValue === 'undefined') return false;
        if (Array.isArray(this.props.menuValue) && this.props.menuValue.indexOf(value) !== -1) return true;
        return !!(!Array.isArray(this.props.menuValue) && this.props.menuValue === value);
    }

    getClasses() {
        let childCount = React.Children.count(this.props.children);

        let classes = {
            // default
            ui: this.props.defaultClasses && !this.context.isMenuChild && !this.context.isDropdownChild,

            // numbers

            // position
            left: false,
            right: false,
            top: false,
            bottom: false,

            // variations
            item: this.props.even && childCount > 0,
            borderless: this.props.borderless,
            attached: this.props.attached,
            floated: this.props.floated,
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
            // visible: this.context.isDropdownChild,
            // transition: this.context.isDropdownChild,

            // component
            menu: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.floated] = !!this.props.floated;

        if (this.props.even && childCount > 0) {
            if (childCount > 0  && childCount <= 12) {
                classes[Numbers[childCount]] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps);
    }
}
