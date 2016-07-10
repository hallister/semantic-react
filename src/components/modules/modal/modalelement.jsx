import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from './../../defaultProps';

/**
 * Modal element
 */
export default class ModalElement extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Should be modal visible
         */
        active: React.PropTypes.bool,
        /**
         * A modal can reduce its complexity
         */
        basic: React.PropTypes.bool,
        /**
         * A modal can use the entire size of the screen
         */
        fullscreen: React.PropTypes.bool,
        /**
         * Scrolling content
         */
        scrolling: React.PropTypes.bool,
        /**
         * A modal can vary in size
         */
        size: React.PropTypes.string,
        /**
         * Internal
         */
        closePortal: React.PropTypes.func
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        active: true
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, defaultClasses, children, active, basic, fullscreen, size, ...other } = this.props;
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
