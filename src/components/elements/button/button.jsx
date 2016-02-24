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

export default class Button extends React.Component {
    static propTypes = {
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
        className: React.PropTypes.node,

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
         * Forces to component to float left or right.
         */
        floated: React.PropTypes.oneOf(['left', 'right']),

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
         * Adds a SemanticUI size class.
         */
        size: React.PropTypes.string,

        /**
         * Adds a SemanticUI social class (SocialButton).
         */
        social: React.PropTypes.string,

        /**
         * Indicates whether the button is currently highlighted or disabled.
         */
        state: React.PropTypes.oneOf(['active', 'disabled'])
    };

    static contextTypes = {
        isAttached: React.PropTypes.bool,
        isIconButtons: React.PropTypes.bool,
        isLabeledButtons: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };


    render() {
        let Component = (this.props.attached || this.context.isAttached || this.props.animated || React.Children.count(this.props.children) > 1) ? 'div' : 'button';

        // consume props
        /* eslint-disable no-use-before-define */
        let { animated, attached, basic, children, circular, color, component,
              compact, className, defaultClasses, floated, fluid, icon,
              inverted, labeled, loading, size, social, state,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        // add class names
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component || Component,
            other,
            this.props.children
        );
    }

    isIconButton() {
        return hasChild(this.props.children, Icon) && React.Children.count(this.props.children) === 1;
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
            active: this.props.state === 'active',
            disabled: this.props.state === 'disabled',
            loading: this.props.loading,

            // variations
            circular: this.props.circular,
            compact: this.props.compact,
            fluid: this.props.fluid,

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
