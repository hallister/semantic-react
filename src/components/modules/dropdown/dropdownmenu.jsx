import React from 'react';
import { Dropdown } from '../../modules';
import Transition from 'react-motion-ui-pack';
import { Icon, Text } from '../../elements';
import { Menu } from '../../views';
import ListensToClickOutside from 'react-onclickoutside/decorator';


/**
 * Dropdown menu with animations
 */
@ListensToClickOutside
export class DropdownMenu extends React.Component {
    static propTypes = {
        /**
         * Should menu be opened when first rendered
         */
        active: React.PropTypes.bool,
        /**
         * Children nodes
         */
        children: React.PropTypes.node,
        /**
         * Pass additional component to use in dropdown, for example Button.
         * If you specify it, then default icon and label won't be rendered
         */
        dropdownComponent: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string,
            React.PropTypes.func
        ]),
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
         * Usually is should be menu but with custom options applied (for example inverted)
         */
        menuComponent: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string,
            React.PropTypes.func
        ])
    };

    static defaultProps = {
        active: false,
        icon: 'dropdown',
        dropdownComponent: 'div',
        enterAnimation: {
            height: 'auto'
        },
        leaveAnimation: {
            height: 0
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            active: props.active,
            visible: false
        }
    }

    /**
     * Menu animation completed
     */
    onAnimationComplete() {
        // visible state differs from active in that it
        // cna only change after completion of the animation
        if (!this.state.active) {
            this.setState({
                visible: false
            })
        }
    }

    /**
     * Dropdown click
     * @param e
     */
    onClick(e) {
        // clicking the arrow/search box or dropdown area
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if (!this.state.active) {
            this.setState({
                active: true,
                visible: true
            });
        }
    }

    /**
     * Menu item click
     * @param e
     */
    onMenuItemClick(e) {
        // click an option
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setState({
            active: false
        });
    }


    /**
     * Renders dropdown icon
     * @returns {*}
     */
    renderMenuIcon() {
        if (this.props.dropdownComponent !== 'div') {
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
        if (this.props.dropdownComponent !== 'div' || !this.props.label) {
            return null;
        } else {
            return <Text>{this.props.label}</Text>
        }
    }

    /**
     * Renders children items
     * @returns {Array}
     */
    renderChildren() {
        let newChildren = [];

        React.Children.forEach(this.props.children, child => {
            newChildren.push(
                React.cloneElement(
                    child,
                    {
                        key: child.props.children,
                        onClick: this.onMenuItemClick.bind(this)
                    },
                    child.props.children
                )
            );
        });

        return newChildren;
    }

    /**
     * Render
     * @returns {XML}
     */
    render() {
        /* eslint-disable no-use-before-define */
        let {
            active, icon, label, dropdownComponent, menuComponent, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        // other.className = classNames(this.props.className, this.getClasses());
        other.onClick = this.onClick.bind(this);

        const MenuComponent = menuComponent || Menu;

        let children = this.renderChildren();

        return (
            <Dropdown
                {...other}
                active={this.state.active}
                component={dropdownComponent}
                visible={this.state.visible}
            >
                {this.renderMenuText()}
                {this.renderMenuIcon()}
                <Transition
                    component={false}
                    enter={this.props.enterAnimation}
                    leave={this.props.leaveAnimation}
                >
                    {this.state.active &&
                    <MenuComponent key="menu"
                                   style={{ overflow: 'hidden' }}
                    >
                        {children}
                    </MenuComponent>
                    }
                </Transition>
            </Dropdown>
        );
    }

    /**
     * Outside click handler
     */
    handleClickOutside() {
        if (this.state.active) {
            this.setState({
                active: false
            })
        }
    }
}

