import React from 'react';
import PropTypes from 'prop-types';
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
        animated: PropTypes.oneOfType([
            PropTypes.oneOf(['fade', 'vertical']),
            PropTypes.bool
        ]),

        /**
         * It's attached to some other attachable component.
         */
        attached: PropTypes.oneOfType([
            PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
            PropTypes.bool
        ]),

        /**
         * Adds simple styling to the component.
         */
        basic: PropTypes.bool,

        /**
         * A button can be circular
         */
        circular: PropTypes.bool,

        /**
         * Adds a SemanticUI color class.
         */
        color: PropTypes.string,

        /**
         * Reduces the padding on the component.
         */
        compact: PropTypes.bool,

        /**
         * A button can be formatted to show different levels of emphasis
         */
        emphasis: PropTypes.oneOf(['primary', 'secondary', 'positive', 'negative']),

        /**
         * Forces to component to float left or right.
         */
        floated: PropTypes.oneOf(['left', 'right']),

        /**
         * The component fills the parent components horizontal space.
         */
        fluid: PropTypes.bool,

        /**
         * Styles the component for a dark background.
         */
        inverted: PropTypes.bool,

        /**
         * Adds a SemanticUI size class.
         */
        size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),

        /**
         * Indicates whether the button is currently highlighted or disabled.
         */
        state: PropTypes.oneOf(['active', 'disabled', 'loading']),

        /**
         * A button can be formatted to toggle on and off
         */
        toggle: PropTypes.bool
    };

    static contextTypes = {
        isAttached: PropTypes.bool
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
