import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps  from '../../defaultProps';

export default class Checkbox extends Component {
    static propTypes = {
        ...DefaultProps.propTypes,

        /**
         * State checked
         */
        checked: React.PropTypes.bool,
        /**
         * Does not allow user interaction
         */
        disabled: React.PropTypes.bool,
        /**
         * It does disabled, but does not allow user interaction
         */
        readOnly: React.PropTypes.bool,
        /**
         * Callback handler to click checkbox
         */
        onClick: React.PropTypes.func,
        /**
        * Attr name
         */
        name: React.PropTypes.string,
        /**
        * Checkbox - appearance
         */
        type: React.PropTypes.oneOf(['default', 'radio', 'toggle', 'slider']),
        /**
        * A fitted checkbox does not leave padding for a label
         */
        fitted: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        type: 'default',
        onClick: () => { }
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    onClick = (event) => {
        if (this.props.disabled || this.props.readOnly) return;

        this.props.onClick(event);
    };

    renderChildren() {
        /* eslint-disable no-use-before-define */
        let { children, defaultClasses, className, onClick, type,
              component, readOnly, checked, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        let childElements = [
            <input
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
        let { component, defaultClasses, checked, disabled, readOnly, type, onClick, name, fitted, ...other } = this.props;
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
            radio: this.props.type == 'radio',
            slider: this.props.type == 'slider',
            toggle: this.props.type == 'toggle',

             // variations
            fitted: this.props.fitted,

            // state
            'read-only': this.props.readOnly,
            checked: this.props.checked,
            disabled: this.props.disabled,
            indeterminate: this.props.indeterminate
        };
    }
}
