import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Form extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Forms can automatically divide fields to be equal width
         */
        equalWidth: PropTypes.bool,
        /**
         * A form on a dark background may have to invert its color scheme
         */
        inverted: PropTypes.bool,
        /**
         * If a form is in loading state, it will automatically show a loading indicator.
         */
        loading: PropTypes.bool,
        /**
         * A form can vary in size
         */
        size: PropTypes.string,
        /**
         * Form state
         */
        state: PropTypes.oneOf([
            'success',
            'error',
            'warning'
        ])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'form'
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, equalWidth, inverted, loading, size, state, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            loading: this.props.loading,

            error: this.props.state === 'error',
            success: this.props.state === 'success',
            warning: this.props.state === 'warning',

            inverted: this.props.inverted,

            form: this.props.defaultClasses
        };

        if (this.props.equalWidth) {
            classes['equal width'] = true;
        }

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
