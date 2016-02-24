import React from 'react';
import classNames from 'classnames';

export default class Images extends React.Component {
    static propTypes = {
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        shape: React.PropTypes.oneOf(['circular', 'rounded']),
        size: ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'],
        visible: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['hidden', 'visible']),
            React.PropTypes.bool
        ])
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { avatar, bordered, children, className, component, defaultClasses,
              disabled, shape, size, visible, ...other } = this.props;
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
            // default
            ui: this.props.defaultClasses,

            // types

            // states
            hidden: this.props.visible === 'hidden' || this.props.visible === false,
            disabled: this.props.disabled,

            // variations
            avatar: this.props.avatar,
            bordered: this.props.bordered,
            circular: this.props.shape === 'circular',
            rounded: this.props.shape === 'rounded',

            // component
            images: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
