import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Group of icons
 */
export default class Icons extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Size of icon group
         */
        size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'i'
    };

    render() {
        const {
            component, defaultClasses, children, size, ...other
        } = this.props;
        let Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (<Component {...other}>{children}</Component>);
    }

    getClasses() {
        let classes = {
            icons: this.props.defaultClasses
        };
        classes[this.props.size] = !!this.props.size;
        return classes;
    }
}
