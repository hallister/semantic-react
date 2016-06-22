import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Defines dimmable section
 */
export default class Dimmable extends React.Component {
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

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, dimmed, blurring, ...other } = this.props;
        const classes = {
            dimmable: other.defaultClasses,
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

