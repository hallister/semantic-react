import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import { Numbers, hasFirstChild } from '../../utilities';
import Checkbox from './../../modules/checkbox/checkbox';
import CheckboxFields from './../../modules/checkbox/checkboxfields';

export default class Field extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        grouped: React.PropTypes.bool,
        inline: React.PropTypes.bool,
        label: React.PropTypes.string,
        required: React.PropTypes.bool,
        state: React.PropTypes.oneOf([
            'disabled',
            'error'
        ]),
        width: React.PropTypes.number
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    /* eslint-disable */
    static Components = {
        Checkbox: Checkbox,
        CheckboxFields: CheckboxFields
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    renderLabel(label) {
        return (
            <label key={label + 'Label'}>{label}</label>
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, label, width, ...other } = this.props;
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
