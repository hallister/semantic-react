import React, { Component } from 'react';
import { Checkboxes } from '../../modules';
import classNames from 'classnames';

export class Checkbox extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        checked: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        radio: React.PropTypes.bool,
        readOnly: React.PropTypes.bool,
        slider: React.PropTypes.bool,
        tag: React.PropTypes.func,
        toggle: React.PropTypes.bool
    };

    static contextTypes = {
        isCheckboxesChild: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true,
        tag: React.DOM.div
    };

    constructor(props) {
        super(props);
    }

    renderCheckbox(classes) {
        return this.props.tag({
            className: classNames(this.props.className, classes)
        }, this.renderChildren());
    }

    renderCheckboxes() {
        let checkboxes = <Checkboxes {...this.props}><Checkbox {...this.props}/></Checkboxes>;

        return checkboxes;
    }

    renderChildren() {
        let { active, children, defaultClasses, className, onClick, 
              radio, slider, toggle, tag, readOnly, checked, 
              disabled,  ...other } = this.props;

        let childElements = [
            React.DOM.input({
                type: 'checkbox',
                key: 'input',
                className: 'hidden',
                checked: this.props.active && !this.props.readOnly,
                ...other
            }),
            React.DOM.label({
                key: 'label',
                onClick: this.props.onClick
            }, this.props.children)
        ];

        return childElements;
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

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
            indeterminate: this.props.indeterminate,

            // component
            checkbox: this.props.defaultClasses
        };

        return this.context.isCheckboxesChild ? this.renderCheckbox(classes) : this.renderCheckboxes();
    }
}