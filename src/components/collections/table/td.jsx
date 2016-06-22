import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['right', 'left', 'center', 'top', 'bottom']
};

export default class Td extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        aligned: React.PropTypes.oneOf(['right', 'left', 'center', 'top', 'bottom']),
        collapsing: React.PropTypes.bool,
        singleLine: React.PropTypes.bool,
        type: React.PropTypes.oneOf(['negative', 'positive', 'warning'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'td'
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, collapsing, component, singleLine, state, type,
            ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        let classes = {
            collapsing: this.props.collapsing,

            positive: this.props.type === 'positive' && !this.props.state,
            negative: this.props.type === 'negative' && !this.props.state,
            warning: this.props.type === 'warning' && !this.props.state,

            active: this.props.state === 'active',
            error: this.props.state === 'error',
            disabled: this.props.state === 'disabled',

            'single line': this.props.singleLine
        };

        classes[this.props.type] = !!this.props.type;

        return validateClassProps(classes, this.props, validProps);
    }
}
