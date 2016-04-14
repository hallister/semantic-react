import React, { Component } from 'react';
import classNames from 'classnames';
import DefaultProps  from '../../defaultProps';

export default class Checkbox extends Component {
    static propTypes = {
        ...DefaultProps.propTypes,

        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        indeterminate: React.PropTypes.bool,
        name: React.PropTypes.string,
        onClick: React.PropTypes.func,
        radio: React.PropTypes.bool,
        readOnly: React.PropTypes.bool,
        slider: React.PropTypes.bool,
        toggle: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    onClick = (event) => {
        if (this.props.disabled || this.props.readOnly) return;

        this.props.onClick(event);
    };

    renderChildren() {
        /* eslint-disable no-use-before-define */
        let { children, defaultClasses, className, onClick,
              radio, slider, toggle, component, readOnly, checked, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        let childElements = [
            <input
                { ...other }
                type="checkbox"
                key="input"
                className="hidden"
                readOnly
                checked={checked} />,
            <label key="label">
                {children}
            </label>
        ];

        return childElements;
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, name, checked, onClick, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        other.onClick = this.onClick;

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
            fitted: this.props.fitted,
            slider: this.props.slider,
            toggle: this.props.toggle,

            // state
            'read-only': this.props.readOnly,
            checked: this.props.checked,
            disabled: this.props.disabled,
            indeterminate: this.props.indeterminate
        };
    }
}
