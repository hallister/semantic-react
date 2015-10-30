import React, { Component } from 'react';
import classNames from 'classnames';

export class Checkbox extends Component {
    static propTypes = {
        checked: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        indeterminate: React.PropTypes.bool,
        name: React.PropTypes.string,
        onClick: React.PropTypes.func,
        radio: React.PropTypes.bool,
        readOnly: React.PropTypes.bool,
        slider: React.PropTypes.bool,
        toggle: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    constructor(props) {
        super(props);

        this.state = {
            active: this.props.checked
        }
    }

    onClick() {
        if (!this.state.active || (this.state.active && !this.props.radio)) {
            this.setState({
                active: !this.state.active
            });
        }
    }

    renderChildren() {
        let { children, defaultClasses, className, onClick,
              radio, slider, toggle, component, readOnly, checked,
              disabled, ...other } = this.props;

        let childElements = [
            React.DOM.input({
                type: 'checkbox',
                key: 'input',
                className: 'hidden',
                checked: this.state.active || this.props.checked,
                readOnly: true,
                ...other
            }),
            React.DOM.label({
                key: 'label'
            }, this.props.children)
        ];

        return childElements;
    }

    render() {
        let { component, defaultClasses, name, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());
        other.onClick = typeof this.props.onClick === 'function' ? this.props.onClick : this.onClick.bind(this);

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    getClasses() {
        return {
            // default
            ui: this.props.defaultClasses,
            checkbox: this.props.defaultClasses,

            // positioning

            // types
            radio: this.props.radio,

             // variations
            slider: this.props.slider,
            toggle: this.props.toggle,

            // state
            'read-only': this.props.readOnly,
            checked: this.state.active || this.props.checked,
            disabled: this.props.disabled,
            indeterminate: this.props.indeterminate
        };
    }
}
