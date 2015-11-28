import React from 'react';
import { hasChild } from '../../utilities';
import classNames from 'classnames';

export default class Loader extends React.Component {
    static propTypes = {
        centered: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        inline: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        size: React.PropTypes.string,
        state: React.PropTypes.oneOf([
            'active', 'indeterminate', 'disabled'
        ]),
        text: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true,
        component: 'div'
    };

    render() {
        let { ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            active: this.props.state === 'active',
            centered: this.props.centered,
            indeterminate: this.props.state === 'indeterminate',
            inline: this.props.inline,
            inverted: this.props.inverted,
            text: this.props.text || hasChild(this.props.children, 'string'),
            disabled: this.props.state === 'disabled',

            // component
            loader: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
