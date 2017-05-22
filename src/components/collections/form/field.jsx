import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Numbers, hasFirstChild } from '../../utilities';
import Checkbox from './../../modules/checkbox/checkbox';
import CheckboxFields from './../../modules/checkbox/checkboxfields';
import DefaultProps from '../../defaultProps';

export default class Field extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Grouped field
         */
        grouped: PropTypes.bool,
        /**
         * A field can have its label next to instead of above it.
         */
        inline: PropTypes.bool,
        /**
         * Field label
         */
        label: PropTypes.string,
        /**
         * A field can show that input is mandatory
         */
        required: PropTypes.bool,
        /**
         * Field state
         */
        state: PropTypes.oneOf([
            'disabled',
            'error'
        ]),
        /**
         * Field width in columns
         */
        width: PropTypes.number
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Checkbox: Checkbox,
        CheckboxFields: CheckboxFields
    };
    /* eslint-enable */

    renderLabel(label) {
        return (
            <label key={label + 'Label'}>{label}</label>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, grouped, inline, label, required, state, width, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            [
                hasFirstChild(children, Field.Components.Checkbox) || hasFirstChild(children, Field.Components.CheckboxFields) || !label || label == ''  ? null : this.renderLabel(this.props.label),
                children
            ]
        );
    }

    getClasses() {
        let classes = {
            disabled: this.props.state === 'disabled',
            error: this.props.state === 'error',

            required: this.props.required,
            inline: this.props.inline,
            grouped: this.props.grouped
        };

        if (this.props.width) {
            if (this.props.width > 0  && this.props.width <= 16) {
                classes[Numbers[this.props.width] + ' wide'] = true;
            }
        }

        classes.field = this.props.defaultClasses;

        return classes;
    }
}
