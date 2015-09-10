import React from 'react';
import classNames from 'classnames';

export class Rail extends React.Component {
    static propTypes = {
        attached: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        close: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        defaultClasses: React.PropTypes.bool,
        dividing: React.PropTypes.bool,
        float: React.PropTypes.string.isRequired,
        internal: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        close: false,
        defaultClasses: true
    };

    render() {
        let { attached, children, className, close, defaultClasses, 
              dividing, float, internal, ...other } = this.props;

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

            // positioning
            left: false,
            right: false,

            // types
            attached: this.props.attached,
            close: this.props.close,
            dividing: this.props.dividing,
            internal: this.props.internal,

            // component
            rail: this.props.defaultClasses
        };

        classes[this.props.close] = typeof this.props.close == 'string' ? true : false;
        classes[this.props.float] = !!this.props.float;

        return classes;
    }
}