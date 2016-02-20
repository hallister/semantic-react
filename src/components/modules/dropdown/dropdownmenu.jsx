import React from 'react';
import { Animations, Dropdown } from '../../modules';
import { Icon, Text } from '../../elements';
import { Menu, Item } from '../../views';
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
         * Enter animation
         */
        enterAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
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
        leaveAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
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
            duration: 150,
            easing: 'out-circ',
            from: {
                opacity: 0,
                transform: 'scaleY(0)',
                transformOrigin: 'top center',
                WebkitTransform: 'scaleY(0)',
                WebkitTransformOrigin: 'top center'
            },
            to: {
                opacity: 1,
                transform: 'scaleY(1)',
                transformOrigin: 'top center',
                WebkitTransform: 'scaleY(1)',
                WebkitTransformOrigin: 'top center'
            }
        },
        leaveAnimation: {
            duration: 150,
            easing: 'out-cubic',
            from: {
                opacity: 1,
                transform: 'scaleY(1)',
                transformOrigin: 'top center',
                WebkitTransform: 'scaleY(1)',
                WebkitTransformOrigin: 'top center'
            },
            to: {
                opacity: 0,
                transform: 'scaleY(0)',
                transformOrigin: 'top center',
                WebkitTransform: 'scaleY(0)',
                WebkitTransformOrigin: 'top center'
            }
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
     * Outside click handler
     */
    handleClickOutside() {
        if (this.state.active) {
            this.setState({
                active: false
            })
        }
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

        // we can't map children because we need to know when length is zero
        React.Children.forEach(this.props.children, child => {
            if (child.type === Item) {
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
            }
        });

        return newChildren;
    }

    /**
     * Render
     * @returns {XML}
     */
    render() {
        let {
            active, icon, label, dropdownComponent, menuComponent, ...other
        } = this.props;

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
                <Animations
                    active={this.state.active}
                    animate={this.state.active}
                    component={MenuComponent}
                    end={this.props.leaveAnimation}
                    onComplete={this.onAnimationComplete.bind(this)}
                    start={this.props.enterAnimation}
                >
                    {children}
                </Animations>
            </Dropdown>
        );
    }

    /*    getClasses() {
     return {
     // default
     active: this.props.active,
     // positioning
     };
     }*/
}

// Need this trick for react-docgen
/* DropdownMenu = ListensToClickOutside(DropdownMenu);
export { DropdownMenu }; */
