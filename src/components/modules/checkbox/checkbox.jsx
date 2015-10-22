import React, { Component } from 'react';
import { Checkboxes } from '../../modules';
import classNames from 'classnames';

export class Checkbox extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
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

    static contextTypes = {
        isCheckboxesChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    renderCheckbox() {
        let { active, component, defaultClasses, name, ...other } = this.props;
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    renderCheckboxes() {
        let checkboxes = <Checkboxes {...this.props}><Checkbox {...this.props}/></Checkboxes>;

        return checkboxes;
    }

    renderChildren() {
        let { active, children, defaultClasses, className, onClick,
              radio, slider, toggle, component, readOnly, checked,
              disabled, ...other } = this.props;

        checked = this.props.active && !this.props.readOnly;

        let childElements = [
            React.DOM.input({
                type: 'checkbox',
                key: 'input',
                className: 'hidden',
                checked: this.props.active,
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
        return this.context.isCheckboxesChild ? this.renderCheckbox() : this.renderCheckboxes();
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
            checked: this.props.active && !this.props.readOnly,
            disabled: this.props.disabled,
            indeterminate: this.props.indeterminate
        };
    }
}
