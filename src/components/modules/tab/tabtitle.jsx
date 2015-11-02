import React from 'react';
import classNames from 'classnames';

export class TabTitle extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
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
        component: 'div',
        defaultClasses: true,
        position: 'top'
    };

    render() {
        let { children, className, component, defaultClasses, position,
              title, type, ...other } = this.props;

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
