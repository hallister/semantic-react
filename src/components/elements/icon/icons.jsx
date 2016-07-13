import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Group of icons
 */
export default class Icons extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Size of icon group
         */
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'i'
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
