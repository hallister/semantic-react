import React from 'react';
import ReactDOM from 'react-dom';
import EventListener from 'react-event-listener';
import shallowCompare from 'react-addons-shallow-compare';
import elementType from 'react-prop-types/lib/elementType';
import { Motion, spring } from 'react-motion';
import Measure from 'react-measure';
import { isNodeInRoot } from '../../utilities';
import AnimationProps, { getMotionStyle, valueFromPercents } from '../../animationUtils';
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
        ...AnimationProps.propTypes,
        /**
         * Active/Close menu
         */
        active: React.PropTypes.bool,
        /**
         * Menu icon
         */
        icon: React.PropTypes.string,
        /**
         * Menu label
         */
        label: React.PropTypes.string,
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
        initialAnimation: {
            height: 0 // 0%
        },
        enterAnimation: {
            height: spring(100, { stiffness: 700, damping: 50, precision: 40 }) // 100%
        },
        leaveAnimation: {
            height: spring(0, { stiffness: 700, damping: 50, precision: 40 }) // 0%
        },
        // enterAnimation: {
        //     stiffness: 700,
        //     damping: 50,
        //     precision: 40
        // },
        // leaveAnimation: {
        //     stiffness: 700,
        //     damping: 50,
        //     precision: 40
        // },
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

    constructor(props) {
        super(props);
        this.state = {
            menuHeight: 20,
            menuWidth: 20,
            animating: false
        };

        this.visibleMenuStyle = {
            overflow: 'hidden',
            display: 'block'
        };

        this.hiddenMenuStyle = {
            display: 'none'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active != nextProps.active) {
            this.setState({ animating: true });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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

    onMenuMeasure = (dimensions) => {
        if (dimensions &&
            ((dimensions.height && dimensions.height !== this.state.menuHeight) ||
            (dimensions.width && dimensions.width !== this.state.menuWidth))) {
            this.setState({
                menuHeight: dimensions.height,
                menuWidth: dimensions.width
            });
        }
    };

    onAnimationRest = () => {
        this.setState({ animating: false });
    };

    getAnimationStyle(interpolatedStyle, dimensions) {
        const { active, onAnimationStyle } = this.props;
        if (onAnimationStyle) {
            return onAnimationStyle(interpolatedStyle, dimensions, active);
        }
        return {
            height: valueFromPercents(interpolatedStyle.height, dimensions.height)
        }
    }

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
     * @param interpolatedStyle
     */
    renderMenu(interpolatedStyle) {
        /* eslint-disable no-use-before-define */
        const {
            active, children, menuComponent, menuValue, onMenuChange, onMenuItemClick
        } = this.props;
        /* eslint-enable no-use-before-define */

        const MenuComponent = menuComponent || DropdownMenu.Components.Menu;

        const menuStyle = active ? this.visibleMenuStyle :
            this.state.animating ? this.visibleMenuStyle : this.hiddenMenuStyle;
        const animatingStyle = this.getAnimationStyle(interpolatedStyle, { height: this.state.menuHeight, width: this.state.menuWidth });

        return (
            <Measure whitelist={['height', 'width']}
                     onMeasure={this.onMenuMeasure}
                     accurate
            >
                <MenuComponent key="menu"
                               menuValue={menuValue}
                               onMenuChange={onMenuChange}
                               onMenuItemClick={onMenuItemClick}
                               style={{ ...menuStyle, ...animatingStyle }}
                >
                    {children}
                </MenuComponent>
            </Measure>
        );
    }

    /**
     * Render
     * @returns {JSX.Element}
     */
    render() {
        /* eslint-disable no-use-before-define */
        let {
            active, initialAnimation, enterAnimation, leaveAnimation, children, icon, label, menuComponent, menuValue,
            onMenuChange, onMenuItemClick, onRequestClose, onAnimationStyle, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        const motionStyle = getMotionStyle(initialAnimation, enterAnimation, leaveAnimation, active);

        return (
            <DropdownMenu.Components.DropdownElement
                {...other}
                active={active}
            >
                {/* This will embed <noscript></noscript> inside dropdown div. Shouldn't cause any problems */}
                    <EventListener target={document}
                                   capture
                                   onMouseDown={this.onOutsideDropdownClick}
                                   onTouchStart={this.onOutsideDropdownClick}/>
                {this.renderMenuText()}
                {this.renderMenuIcon()}
                    <Motion defaultStyle={initialAnimation}
                            style={motionStyle}
                            onRest={this.onAnimationRest}
                    >
                            {interpolatedStyle => this.renderMenu(interpolatedStyle)}
                    </Motion>
            </DropdownMenu.Components.DropdownElement>
        );
    }
}

