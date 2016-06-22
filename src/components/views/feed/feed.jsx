import React from 'react';
import classNames from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import DefaultProps from '../../defaultProps';


export default class Feed extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        size: React.PropTypes.string
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
