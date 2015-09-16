import React from 'react';
import classNames from 'classnames';

export class Description extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        visible: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        let { defaultClasses, component, visible, hidden, ...other } = this.props;

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
            description: this.props.defaultClasses,

            // animation
            visible: this.props.visible,
            hidden: this.props.hidden
        };

        return classes;
    }
}