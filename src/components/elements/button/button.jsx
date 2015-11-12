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
        /**
         * Indicates the button is currently active.
         */
        active: React.PropTypes.bool,

        /**
         * Adds a fade or slide animation on hover.
         */
        animated: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['fade', 'vertical']),
            React.PropTypes.bool
        ]),

        /**
         * It's attached to some other attachable component.
         */
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
            React.PropTypes.bool
        ]),

        /**
         * Adds simple styling to the component.
         */
        basic: React.PropTypes.bool,

        /**
         * The child nodes of the component.
         */
        children: React.PropTypes.node,

        /**
         * Gives a circular shape to the component.
         */
        circular: React.PropTypes.bool,

        /**
         * Adds additional classes to the component.
         */
        className: React.PropTypes.any,

        /**
         * Adds a SemanticUI color class.
         */
        color: React.PropTypes.string,

        /**
         * Reduces the padding on the component.
         */
        compact: React.PropTypes.bool,

        /**
         * Overrides the component with a custom component string ('div') or ReactElement.
         */
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),

        /**
         * Adds the default classes for the component.
         */
        defaultClasses: React.PropTypes.bool,

        /**
         * Disallows interaction with the component.
         */
        disabled: React.PropTypes.bool,

        /**
         * Forces to component to float left or right.
         */
        floated: React.PropTypes.oneOf(['right', 'left']),

        /**
         * The component fills the parent components horizontal space.
         */
        fluid: React.PropTypes.bool,

        /**
         * Overrides default behavior and adds the icon class to the component.
         */
        icon: React.PropTypes.bool,

        /**
         * Styles the component for a dark background.
         */
        inverted: React.PropTypes.bool,

        /**
         * Defines whether the label is to the right or left of the component (LabeledButton).
         */
        labeled: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['right', 'left']),
            React.PropTypes.bool
        ]),

        /**
         * Displays a loading indicator on the component.
         */
        loading: React.PropTypes.bool,

        /**
         *  Several of the following are deprecated.
         */
        negative: React.PropTypes.bool,
        positive: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        secondary: React.PropTypes.bool,

        /**
         * Adds a SemanticUI size class.
         */
        size: React.PropTypes.string,

        /**
         * Adds a SemanticUI social class (SocialButton).
         */
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
              fluid, icon, inverted, labeled, loading, negative,
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
