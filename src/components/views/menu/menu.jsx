import React from 'react';
import { Numbers, arrayToObject, validateClassProps } from '../../utilities';
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
            isMenuChild: true
        };
    }

    renderAnimatedMenu(other) {
        other.className = classNames(this.props.className, this.getClasses());

        return (
            <Animate 
                animation={this.props.animation}
                {...other}
            >
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
        // classes[this.props.size] = !!this.props.size;
        // classes[this.props.aligned] = !!this.props.aligned;

        let { defaultClasses, even, ...other } = this.props;

        return this.props.animation ? this.renderAnimatedMenu(other) : this.renderMenu(other);

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