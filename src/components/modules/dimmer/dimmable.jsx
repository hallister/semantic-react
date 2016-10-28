import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Defines dimmable section
 */
export default class Dimmable extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Blur dimmer
         */
        blurring: React.PropTypes.bool,
        /**
         * Add dimmed class to dimmable. This could be omitted and you can instead set overflow: hidden instead
         */
        dimmed: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        dimmed: false,
        blurring: false
    };

    render() {
        const { component, defaultClasses, dimmed, blurring, ...other } = this.props;
        const classes = {
            dimmable: defaultClasses,
            dimmed: dimmed,
            blurring: blurring
        };

        other.className = classNames(other.className, classes);
        let Component = component;
        return (
            <Component {...other} />
        );
    }
}

