import React from 'react';
import { Numbers, arrayToObject, validateClassProps } from '../../utilities';
import { Item, Header } from '../../elements';
import { Animate } from '../../modules';
import classNames from 'classnames';

let validProps = {
    attached: ['top', 'bottom']
};

export class Menu extends React.Component {
	static defaultProps = {
        component: 'div',
		defaultClasses: true
	};

    static propTypes = {

    };

    static contextTypes = {
        isMenuChild: React.PropTypes.bool,
        isDropdownChild: React.PropTypes.bool
    };

    static childContextTypes = {
        isMenuChild: React.PropTypes.bool
    };

    getChildContext() {
        return {
            'isMenuChild': true,
        };
    }

    renderDropdownSubMenu(other) {
        let animation = {
            state: this.props.active,
            enterState: {
                name: 'slideRightIn',
                duration: 200,
                options: {
                    easing: 'linear'
                }
            },
            exitState: {
                name: 'slideLeftOut',
                duration: 200,
                options: {
                    easing: 'linear'
                }
            }
        };

        return this.renderDropdownMenu(other, animation);
    }

    renderDropdownMenu(other, customAnimation = null) {
        let animation = customAnimation ? customAnimation : {
            state: this.props.active,
            enterState: {
                name: 'slideIn',
                duration: 200,
                options: {
                    easing: 'linear'
                }
            },
            exitState: {
                name: 'slideOut',
                duration: 200,
                options: {
                    easing: 'linear'
                }
            }
        };

        other.className = classNames(this.props.className, this.getClasses());

        return (
            <Animate animation={animation}
                     {...other}>
                {this.props.children}
            </Animate>
        );
    }

    renderMenu(other) {
        other.className = classNames(this.props.className, this.getClasses());

       return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    render() {
        //classes[this.props.size] = !!this.props.size;
        //classes[this.props.aligned] = !!this.props.aligned;

        let { defaultClasses, even, ...other } = this.props;

        if (this.context.isDropdownChild && this.context.isMenuChild) {

            return this.renderDropdownSubMenu(other);
        } else if (this.context.isDropdownChild) {
            return this.renderDropdownMenu(other);
        } else {
            return this.renderMenu(other);
        }

    }

    getClasses() {
        let childCount = React.Children.count(this.props.children);

        let classes = {
            // default
            ui: this.props.defaultClasses && !this.context.isMenuChild && !this.context.isDropdownChild,

            // numbers
            ...arrayToObject(Numbers),

            // position
            right: this.props.right,
            top: false,
            bottom: false,

            // variations
            item: this.props.even && childCount > 0,
            attached: this.props.attached,
            pointing: this.props.pointing,
            secondary: this.props.secondary,
            tabular: this.props.tabular,
            vertical: this.props.vertical,
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