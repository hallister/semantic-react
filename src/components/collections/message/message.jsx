import React from 'react';
import PropTypes from 'prop-types';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';
import Icon from '../../elements/icon/icon';
import { hasFirstChild } from '../../utilities';

const validProps = {
    attached: ['bottom', 'top'],
    emphasis: ['success', 'error', 'info', 'warning', 'positive', 'negative']
};

export default class Message extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A message can be formatted to attach itself to other content
         */
        attached: PropTypes.oneOfType([
            PropTypes.oneOf(['bottom', 'top']),
            PropTypes.bool
        ]),
        /**
         * A message can be formatted to be different colors
         */
        color: PropTypes.string,
        /**
         * A message can only take up the width of its content.
         */
        compact: PropTypes.bool,
        /**
         * A message can float above content that it is related to
         */
        floating: PropTypes.bool,
        /**
         * A message can be hidden
         */
        hidden: PropTypes.bool,
        /**
         * A message can contain an icon. If message contain icon as first child then it will be set automatically,
         * unless you provide it explicitly
         */
        icon: PropTypes.bool,
        /**
         * A message can have different sizes
         */
        size: PropTypes.string,
        /**
         * Another emphasis
         */
        emphasis: PropTypes.oneOf(['success', 'error', 'info', 'warning', 'positive', 'negative']),
        /**
         * Message is visible
         */
        visible: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon
    };
    /* eslint-enable */

    render() {
        /* eslint-disable no-use-before-define */
        let { attached, children, className, color, compact, component,
            defaultClasses, floating, hidden, icon, size, emphasis, visible,
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
            // Do not set icon flag automatically if it explicitly provided even with icon child
            icon: this.props.icon || (hasFirstChild(this.props.children, Message.Components.Icon) && typeof this.props.icon === 'undefined'),
            visible: this.props.visible,

            info: this.props.emphasis === 'info',
            warning: this.props.emphasis === 'warning',
            positive: this.props.emphasis === 'positive',
            negative: this.props.emphasis === 'negative',

            success: this.props.emphasis === 'success',
            error: this.props.emphasis === 'error',

            message: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        return validateClassProps(classes, this.props, validProps);
    }
}
