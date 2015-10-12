import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import { Animate } from '../../modules';
import classNames from 'classnames';

let validProps = {
    attached: ['top', 'bottom']
};

@Animate
export class Menu extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        attached: React.PropTypes.oneOf(validProps),
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.node
        ]),
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        end: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        even: React.PropTypes.bool,
        pointing: React.PropTypes.bool,
        right: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        start: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        style: React.PropTypes.object,
        tabular: React.PropTypes.bool,
        text: React.PropTypes.bool,
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
        component: 'div',
        defaultClasses: true
    };

    getChildContext() {
        return {
            isMenuChild: true
        };
    }

    render() {
        let { active, start, end, component, defaultClasses, even, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.props.style;

        if (this.props.component == Menu) {
            component = 'div';
        } else {
            component = this.props.component;
        }

        return React.createElement(
            component,
            other,
            this.props.children
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
