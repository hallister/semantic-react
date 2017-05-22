import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';


export default class Feed extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        size: PropTypes.string
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, size,
            ...other } = this.props;
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

            feed: this.props.defaultClasses
        }

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
