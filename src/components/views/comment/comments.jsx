import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';


export default class Comments extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        collapsed: React.PropTypes.bool,
        minimal: React.PropTypes.bool,
        threaded: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, collapsed, component, defaultClasses, minimal,
            threaded, ...other } = this.props;
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

            collapsed: this.props.collapsed,
            minimal: this.props.minimal,
            threaded: this.props.threaded,

            comments: this.props.defaultClasses
        };

        return classes;
    }
}

