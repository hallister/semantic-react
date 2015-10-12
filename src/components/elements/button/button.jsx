import React from 'react';
import { Icon } from '../../elements';
import { hasChild, validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    animated: ['vertical', 'fade'],
    attached: ['left', 'right', 'bottom', 'top'],
    labeled: ['right', 'left'],
    floated: ['right', 'left']
};

class Button extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        animated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(validProps.attached),
            React.PropTypes.bool
        ]),
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.any,
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(validProps.floated),
        fluid: React.PropTypes.bool,
        focusable: React.PropTypes.bool,
        icon: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        labeled: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(validProps.labeled),
            React.PropTypes.bool
        ]),
        loading: React.PropTypes.bool,
        negative: React.PropTypes.bool,
        positive: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        size: React.PropTypes.string,
        social: React.PropTypes.string
    };

    static contextTypes = {
        isAttached: React.PropTypes.bool,
        isIconButtons: React.PropTypes.bool,
        isLabeledButtons: React.PropTypes.bool
    };

    static defaultProps = {
        animated: false,
        attached: false,
        defaultClasses: true
    };

    isIconButton() {
        return hasChild(this.props.children, Icon) && React.Children.count(this.props.children) === 1 ? true : false;
    }

    render() {
        let Component = (this.props.attached || this.context.isAttached || this.props.animated || React.Children.count(this.props.children) > 1) ? 'div' : 'button';

        // consume props
        let { active, animated, attached, basic, children, circular, color,
              component, compact, className, defaultClasses, disabled, floated,
              fluid, focusable, icon, inverted, labeled, loading, negative,
              positive, primary, secondary, size, social, ...other } = this.props;

        // add classnames
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component || Component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // position based props
            floated: this.props.floated,
            labeled: this.props.labeled && !this.context.isLabeledButtons,
            attached: this.props.attached,

            // types
            animated: this.props.animated,
            basic: this.props.basic,
            icon: (this.props.icon || this.isIconButton()) && !this.context.isIconButtons,
            inverted: this.props.inverted,

            // states
            active: this.props.active,
            disabled: this.props.disabled,
            loading: this.props.loading,

            // variations
            circular: this.props.circular,
            compact: this.props.compact,
            fluid: this.props.fluid,
            negative: this.props.negative,
            positive: this.props.positive,
            primary: this.props.primary,
            secondary: this.props.secondary,

            // component
            button: this.props.defaultClasses
        };

        // string types
        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.social] = !!this.props.social;

        return validateClassProps(classes, this.props, validProps);
    }
}

module.exports.Button = Button;
