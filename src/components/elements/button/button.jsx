import React from 'react';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';
import DefaultProps from './../../defaultProps';

const validProps = {
    animated: ['vertical', 'fade'],
    attached: ['left', 'right', 'bottom', 'top'],
    floated: ['left', 'right']
};

/**
 * Basic button. Icon and labeled buttons have own components
 */
export default class Button extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
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
         * A button can be circular
         */
        circular: React.PropTypes.bool,

        /**
         * Adds a SemanticUI color class.
         */
        color: React.PropTypes.string,

        /**
         * Reduces the padding on the component.
         */
        compact: React.PropTypes.bool,

        /**
         * A button can be formatted to show different levels of emphasis
         */
        emphasis: React.PropTypes.oneOf(['primary', 'secondary', 'positive', 'negative']),

        /**
         * Forces to component to float left or right.
         */
        floated: React.PropTypes.oneOf(['left', 'right']),

        /**
         * The component fills the parent components horizontal space.
         */
        fluid: React.PropTypes.bool,

        /**
         * Styles the component for a dark background.
         */
        inverted: React.PropTypes.bool,

        /**
         * Adds a SemanticUI size class.
         */
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),

        /**
         * Indicates whether the button is currently highlighted or disabled.
         */
        state: React.PropTypes.oneOf(['active', 'disabled', 'loading']),

        /**
         * A button can be formatted to toggle on and off
         */
        toggle: React.PropTypes.bool
    };

    static contextTypes = {
        isAttached: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        // consume this.props
        let { animated, attached, basic, children, circular, color, component,
            compact, defaultClasses, emphasis, floated, fluid,
            inverted, size, state, toggle,
            ...other
        } = this.props;

        let Component = (attached || this.context.isAttached || animated || React.Children.count(this.props.children) > 1) ? 'div' : 'button';
        if (component) {
            Component = component;
        }

        other.className = classNames(other.className, this.getClasses());

        return (
            <Component {...other}>
                       {children}
            </Component>
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // position based this.props
            floated: this.props.floated,
            attached: this.props.attached,

            // types
            animated: this.props.animated,
            basic: this.props.basic,
            inverted: this.props.inverted,

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
        classes[this.props.emphasis] = !!this.props.emphasis;
        classes[this.props.state] = !!this.props.state;

        return validateClassProps(classes, this.props, validProps);
    }
}
