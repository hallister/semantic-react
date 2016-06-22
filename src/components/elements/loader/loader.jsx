import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { hasChild } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Loader extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        centered: React.PropTypes.bool,
        inline: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        size: React.PropTypes.string,
        state: React.PropTypes.oneOf([
            'active', 'indeterminate', 'disabled'
        ]),
        text: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { ...other } = this.props;
        /* eslint-enable no-use-before-define */

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
