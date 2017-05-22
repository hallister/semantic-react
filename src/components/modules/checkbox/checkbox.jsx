import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps  from '../../defaultProps';

export default class Checkbox extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Apply additional class name to to the label
         */
        labelClassName: PropTypes.string,
        /**
         * State checked
         */
        checked: PropTypes.bool,
        /**
         * Does not allow user interaction
         */
        disabled: PropTypes.bool,
        /**
         * It does disabled, but does not allow user interaction
         */
        readOnly: PropTypes.bool,
        /**
         * Callback handler to click checkbox
         */
        onClick: PropTypes.func,
        /**
        * Attr name
         */
        name: PropTypes.string,
        /**
        * Checkbox - appearance
         */
        type: PropTypes.oneOf(['default', 'radio', 'toggle', 'slider']),
        /**
        * A fitted checkbox does not leave padding for a label
         */
        fitted: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        type: 'default',
        onClick: () => { }
    };

    onClick = (event) => {
        if (this.props.disabled || this.props.readOnly) return;

        this.props.onClick(event);
    };

    renderChildren() {
        /* eslint-disable no-use-before-define */
        let { children, defaultClasses, className, labelClassName, onClick, type,
              component, readOnly, checked, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        let childElements = [
            <input
                type="checkbox"
                key="input"
                className="hidden"
                readOnly
                checked={checked} />,
            <label key="label" className={labelClassName}>
                {children}
            </label>
        ];

        return childElements;
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, labelClassName, checked, disabled, readOnly, type, onClick, name, fitted, ...other } = this.props;
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
