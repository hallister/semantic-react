import React, { Component } from 'react';
import { hasChild } from '../../utilities';
import classNames from 'classnames';

export class Loader extends Component {
    static defaultProps = {
        defaultClasses: true,
        component: 'div'
    };

    static propTypes = {
        active: React.PropTypes.bool,
        centered: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        inline: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        text: React.PropTypes.bool
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

            active: this.props.active,
            centered: this.props.centered,
            indeterminate: this.props.indeterminate,
            inline: this.props.inline,
            inverted: this.props.inverted,
            text: this.props.text || hasChild(this.props.children, 'string'),
            disabled: this.props.disabled,

            //component
            loader: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}