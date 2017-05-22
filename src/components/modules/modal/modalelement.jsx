import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from './../../defaultProps';

/**
 * Modal element
 */
export default class ModalElement extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Should be modal visible
         */
        active: PropTypes.bool,
        /**
         * A modal can reduce its complexity
         */
        basic: PropTypes.bool,
        /**
         * A modal can use the entire size of the screen
         */
        fullscreen: PropTypes.bool,
        /**
         * Scrolling content
         */
        scrolling: PropTypes.bool,
        /**
         * A modal can vary in size
         */
        size: PropTypes.string,
        /**
         * Internal
         */
        closePortal: PropTypes.func
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        active: true
    };

    render() {
        const { component, defaultClasses, children, active, basic, fullscreen, scrolling, size, closePortal, runOnMount, ...other } = this.props;
        let Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            active: this.props.active,
            basic: this.props.basic,
            fullscreen: this.props.fullscreen,
            scrolling: this.props.scrolling,
            modal: this.props.defaultClasses
        };
        classes[this.props.size] = !!this.props.size;
        return classes;
    }
}
