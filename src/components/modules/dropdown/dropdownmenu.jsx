import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-motion-ui-pack';
import EventListener from 'react-event-listener';
import elementType from 'react-prop-types/lib/elementType'; 
import { isNodeInRoot } from '../../utilities';
import DropdownElement from './dropdownelement';
import Icon from './../../elements/icon/icon';
import Text from './../../elements/simple/text';
import Menu from './../../views/menu/menu';


/**
 * Dropdown menu with animations
 */
export default class DropdownMenu extends React.Component {
    static propTypes = {
        ...DropdownElement.propTypes,
        /**
         * Active/Close menu
         */
        active: React.PropTypes.bool,
        /**
         * Enter animations transforms
         */
        enterAnimation: React.PropTypes.object,
        /**
         * Menu icon
         */
        icon: React.PropTypes.string,
        /**
         * Menu label
         */
        label: React.PropTypes.string,
        /**
         * Leave animation
         */
        leaveAnimation: React.PropTypes.object,
        /**
         * Specify component to be used as Menu.
         * Usually is should be menu but with custom options applied (for example inverted). 
         * DropdownMenu will pass some props to your Menu component, so you're responsive for passing it down to the level
         */
        menuComponent: elementType,
        /**
         * Menu active value
         */
        menuValue: React.PropTypes.oneOfType([
            React.PropTypes.number,
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]))
        ]),
        /**
         * Callback for active item change. Will not be fired if menuValue was omitted
         * Will pass new menuValue or array of new menuValue
         * If all items were unselected would pass null if menuValue is single value or empty array if menuValue is array
         */
        onMenuChange: React.PropTypes.func,
        /**
         * Callback for menu item click
         */
        onMenuItemClick: React.PropTypes.func,
        /**
         * Callback will be called when menu wants to be closed (for ex. from outside click)
         */
        onRequestClose: React.PropTypes.func
    };

    static defaultProps = {
        ...DropdownElement.defaultProps,
        active: false,
        icon: 'dropdown',
        enterAnimation: {
            height: 'auto'
        },
        leaveAnimation: {
            height: 0
        },
        onMenuItemClick: () => {},
        onMenuChange: () => {},
        onRequestClose: () => {}
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon,
        Text: Text,
        Menu: Menu,
        DropdownElement: DropdownElement
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        /**
         * Menu reference
         */
        this.menuRef = null;
        
    }
    
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
     * Render
     * @returns {JSX.Element}
     */
    render() {
        /* eslint-disable no-use-before-define */
        let {
            active, enterAnimation, leaveAnimation, children, icon, label, menuComponent, menuValue, 
            onMenuChange, onMenuItemClick, onRequestClose, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        const MenuComponent = menuComponent || DropdownMenu.Components.Menu;


        return (
            <DropdownMenu.Components.DropdownElement
                {...other}
                active={active}
            >
                {/* This will embed <noscript></noscript> inside dropdown div. Shouldn't cause any problems */}
                <EventListener target={document}
                               onMouseDown={this.onOutsideDropdownClick}
                               onTouchStart={this.onOutsideDropdownClick}/>
                {this.renderMenuText()}
                {this.renderMenuIcon()}
                <Transition
                    component={false}
                    enter={enterAnimation}
                    leave={leaveAnimation}
                >
                    {active &&
                    <MenuComponent key="menu"
                                   menuValue={menuValue}
                                   onMenuChange={onMenuChange}
                                   onMenuItemClick={onMenuItemClick}
                                   ref={ref => this.menuRef = ref}
                                   style={{ overflow: 'hidden' }}
                    >
                        {children}
                    </MenuComponent>
                    }
                </Transition>
            </DropdownMenu.Components.DropdownElement>
        );
    }
}

