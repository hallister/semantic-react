import React from 'react';
import classNames from 'classnames';

export class Images extends React.Component {
    static propTypes = {
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        size: React.PropTypes.string
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };    

    render() {
        let { avatar, bordered, children, circular, defaultClasses, disabled, hidden, rounded,
              size, ...other } = this.props;

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
            hidden: this.props.hidden,
            disabled: this.props.disabled,

            // variations
            avatar: this.props.avatar,
            bordered: this.props.bordered,
            circular: this.props.circular,
            rounded: this.props.rounded,

            // component 
            images: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        return classes;
    }

}