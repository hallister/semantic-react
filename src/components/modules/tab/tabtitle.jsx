import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class TabTitle extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        position: React.PropTypes.oneOf([
            'top',
            'bottom'
        ]),
        title: React.PropTypes.string,
        type: React.PropTypes.oneOf([
            'tab',
            'menu',
            'pill'
        ])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        position: 'top'
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, position,
              title, type, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses())

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,

            // position
            'top attached': this.props.type === 'tab',

            pointing: this.props.type == 'menu',
            'secondary menu': this.props.type == 'pill' || this.props.type == 'menu',
            'tabular menu': this.props.type == 'tab'
        }
    }
}
