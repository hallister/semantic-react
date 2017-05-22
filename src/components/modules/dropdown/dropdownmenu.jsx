import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import EventListener from 'react-event-listener';
import elementType from 'react-prop-types/lib/elementType';
import { isNodeInRoot } from '../../utilities';
import SemanticCSSTransition from '../../animation/animation';
import AnimationProps from '../../animation/animationProps';
import DropdownElement from './dropdownelement';
import Icon from './../../elements/icon/icon';
import Text from './../../elements/simple/text';
import Menu from './../../views/menu/menu';

/**
 * Dropdown menu with animations
 */
export default class DropdownMenu extends React.PureComponent {
    static propTypes = {
        ...DropdownElement.propTypes,
        ...AnimationProps.propTypes,
        /**
         * Active/Close menu
         */
        active: PropTypes.bool,
        /**
         * Menu icon
         */
        icon: PropTypes.string,
        /**
         * Menu label
         */
        label: PropTypes.string,
        /**
         * Specify component to be used as Menu.
         * Usually is should be menu but with custom options applied (for example inverted).
         * DropdownMenu will pass some props to your Menu component, so you're responsive for passing it down to the level
         */
        menuComponent: elementType,
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
         * Callback will be called when menu wants to be closed (for ex. from outside click)
         */
        onRequestClose: PropTypes.func
    };

    static defaultProps = {
        ...DropdownElement.defaultProps,
        ...AnimationProps.defaultProps,
        enter: 'slide down in',
        leave: 'slide down out',
        enterDuration: 200,
        leaveDuration: 200,
        active: false,
        icon: 'dropdown',
        onMenuItemClick: () => {
        },
        onMenuChange: () => {
        },
        onRequestClose: () => {
        }
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon,
        Text: Text,
        Menu: Menu,
        DropdownElement: DropdownElement
    };
    /* eslint-enable */

    /**
     * Outside dropdown click
     * @param {React.MouseEvent} e
     */
    onOutsideDropdownClick = (e) => {
        const { active, onRequestClose } = this.props;
        if (!active) {
            return;
        }
        const dropdownElement = ReactDOM.findDOMNode(this);
        if (dropdownElement) {
            if (!isNodeInRoot(e.target, dropdownElement)) {
                onRequestClose();
            }
        }
    };

    /**
     * Renders dropdown icon
     * @returns {*}
     */
    renderMenuIcon() {
        if (typeof this.props.component === 'function') {
            return null;
        } else {
            return <DropdownMenu.Components.Icon name={this.props.icon}/>
        }
    }

    /**
     * Renders dropdown text
     * @returns {*}
     */
    renderMenuText() {
        if (typeof this.props.component === 'function' || !this.props.label) {
            return null;
        } else {
            return <DropdownMenu.Components.Text>{this.props.label}</DropdownMenu.Components.Text>
        }
    }

    /**
     * Render menu
     */
    renderMenu() {
        /* eslint-disable no-use-before-define */
        const {
            active, children, menuComponent, menuValue, onMenuChange, onMenuItemClick
        } = this.props;
        /* eslint-enable no-use-before-define */

        const MenuComponent = menuComponent || DropdownMenu.Components.Menu;

        return (
                <MenuComponent key="menu"
                               menuValue={menuValue}
                               onMenuChange={onMenuChange}
                               onMenuItemClick={onMenuItemClick}
                >
                    {children}
                </MenuComponent>
        );
    }

    /**
     * Render
     * @returns {JSX.Element}
     */
    render() {
        /* eslint-disable no-use-before-define */
        let {
            active, enter, leave, enterDuration, leaveDuration, children, icon, label, menuComponent, menuValue,
            onMenuChange, onMenuItemClick, onRequestClose, onAnimationStyle, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        return (
            <DropdownMenu.Components.DropdownElement
                {...other}
                active={active}
            >
                {/* This will embed <noscript></noscript> inside dropdown div. Shouldn't cause any problems */}
                <EventListener
                    target={document}
                    onMouseDownCapture={this.onOutsideDropdownClick}
                    onTouchStartCapture={this.onOutsideDropdownClick}/>
                {this.renderMenuText()}
                {this.renderMenuIcon()}
                <SemanticCSSTransition
                    enter={enter}
                    leave={leave}
                    enterDuration={enterDuration}
                    leaveDuration={leaveDuration}
                >
                    {active && this.renderMenu()}
                </SemanticCSSTransition>
            </DropdownMenu.Components.DropdownElement>
        );
    }
}

