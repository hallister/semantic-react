import React from 'react';
import PropTypes from 'prop-types';
import { hasChild } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Loader extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Loaders can appear inline centered with content
         */
        centered: PropTypes.bool,
        /**
         * Loaders can appear inline with content
         */
        inline: PropTypes.bool,
        /**
         * Loaders can have their colors inverted.
         */
        inverted: PropTypes.bool,
        /**
         * Loaders can have different sizes
         */
        size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
        /**
         * Loader state
         */
        state: PropTypes.oneOf([
            'active', 'indeterminate', 'disabled'
        ]),
        /**
         * A loader can contain text
         */
        text: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        /* eslint-disable no-use-before-define */
        const { component, children, defaultClasses, centered, inline, inverted, size, state, text, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            active: this.props.state === 'active',
            centered: this.props.centered,
            indeterminate: this.props.state === 'indeterminate',
            inline: this.props.inline || this.props.centered,
            inverted: this.props.inverted,
            text: this.props.text || hasChild(this.props.children, 'string'),
            disabled: this.props.state === 'disabled',

            // component
            loader: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
