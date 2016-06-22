import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    attached: ['bottom', 'top'],
    type: ['info', 'warning', 'positive', 'negative'],
    state: ['success', 'error']
};

export default class Message extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['bottom', 'top']),
            React.PropTypes.bool
        ]),
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        floating: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        icon: React.PropTypes.bool,
        size: React.PropTypes.string,
        state: React.PropTypes.oneOf(['success', 'error']),
        type: React.PropTypes.oneOf(['info', 'warning', 'positive', 'negative']),
        visible: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { attached, children, className, color, compact, component,
            defaultClasses, floating, hidden, icon, size, state, type, visible,
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

            compact: this.props.compact,
            floating: this.props.floating,
            hidden: this.props.hidden,
            icon: this.props.icon,
            visible: this.props.visible,

            info: this.props.type === 'info' && !this.props.state,
            warning: this.props.type === 'warning' && !this.props.state,
            positive: this.props.type === 'positive' && !this.props.state,
            negative: this.props.type === 'negative' && !this.props.state,

            success: this.props.state === 'success',
            error: this.props.state === 'error',

            message: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        return validateClassProps(classes, this.props, validProps);
    }
}
