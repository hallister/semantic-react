import React from 'react';
import classNames from 'classnames';

export class Labels extends React.Component {
    static propTypes = {
        arrow: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        size: React.PropTypes.string
    };

    // we only set defaults for props that can be both bool and string + the defaultClasses
    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        let { arrow, circular, color, defaultClasses, size, tag, ...other } = this.props;

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
            labels: this.props.defaultClasses,
            tag: this.props.arrow,

            // variations
            color: this.props.color,
            circular: this.props.circular
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}