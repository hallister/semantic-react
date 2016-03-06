import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-motion-ui-pack';
import EventListener from 'react-event-listener';
import classNames from 'classnames';
import { validateClassProps, isNodeInRoot } from '../../utilities';
import { Icon, Text } from '../../elements';
import { Menu } from '../../views';
import DropdownElement from './dropdownelement';
import elementType from 'react-prop-types/lib/elementType'; 

const validProps = {
    pointing: ['left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']
};

/**
 * Dropdown menu with animations
 */
export default class DropdownMenu extends React.Component {
    static propTypes = {
        ...DropdownElement.propTypes,
        /**
         * Should menu be opened when first rendered
         */
        active: React.PropTypes.bool,
        /**
         * Enter animations transforms
         */
        enterAnimation: React.PropTypes.object,
        /**
         * A dropdown menu can appear to be floating below an element. 
         */
        floating: React.PropTypes.bool,
        /**
         * Menu icon
         */
        icon: React.PropTypes.string,
        /**
         * A dropdown can be formatted to appear inline in other content
         */
        inline: React.PropTypes.bool,
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
         * A dropdown can be formatted so that its menu is pointing
         */
        pointing: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.oneOf([
                'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'
            ])
        ]),
        /**
         * Menu item click callback
         */
        onMenuItemClick: React.PropTypes.func
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
        onMenuItemClick: () => {}
    };

    constructor(props) {
        super(props);

        /**
         * Menu reference
         */
        this.menuRef = null;
        
        this.state = {
            active: props.active
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.active && this.state.active !== nextProps.active) {
            this.setState({
                active: nextProps.active
            })
        }
    }


    /**
     * Dropdown click
     * @param {React.MouseEvent} e
     */
    onDropdownElementClick = (e) => {
        // clicking the arrow/search box or dropdown area
        e.stopPropagation();
        e.preventDefault();

        this.setState({
            active: !this.state.active
        });
    };

    /**
     * Menu item click
     * @param value
     */
    onMenuItemClick = (value) => {
        // click an option

        this.setState({
            active: false
        });
        
        this.props.onMenuItemClick(value);
    };

    /**
     * Outside dropdown click
     * @param {React.MouseEvent} e
     */
    onOutsideDropdownClick = (e) => {
        if (!this.state.active || !this.menuRef) {
            return;
        }
        const menuElement = ReactDOM.findDOMNode(this.menuRef);
        if (menuElement) {
            if (!isNodeInRoot(e.target, menuElement)) {
                this.setState({
                    active: false
                })
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
            return <Icon name={this.props.icon}/>
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
            return <Text>{this.props.label}</Text>
        }
    }

    /**
     * Render
     * @returns {JSX.Element}
     */
    render() {
        /* eslint-disable no-use-before-define */
        let {
            active, enterAnimation, leaveAnimation, floating, inline, pointing, 
            children, icon, label, menuComponent, onMenuItemClick, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(other.className, this.getClasses());

        const MenuComponent = menuComponent || Menu;


        return (
            <DropdownElement
                {...other}
                active={this.state.active}
                onClick={this.onDropdownElementClick}
            >
                {/* This will embed <noscript></noscript> inside dropdown div. Shouldn't cause any problems */}
                <EventListener elementName="document"
                               onMouseDown={this.onOutsideDropdownClick}
                               onTouchStart={this.onOutsideDropdownClick}/>
                {this.renderMenuText()}
                {this.renderMenuIcon()}
                <Transition
                    component={false}
                    enter={this.props.enterAnimation}
                    leave={this.props.leaveAnimation}
                >
                    {this.state.active &&
                    <MenuComponent key="menu"
                                   onMenuItemClick={this.onMenuItemClick}
                                   ref={ref => this.menuRef = ref}
                                   style={{ overflow: 'hidden' }}
                    >
                        {children}
                    </MenuComponent>
                    }
                </Transition>
            </DropdownElement>
        );
    }
    
    getClasses() {
        let classes = {
            floating: this.props.floating,
            inline: this.props.inline,
            pointing: this.props.pointing
        };
        return validateClassProps(classes, this.props, validProps);
    }
}

