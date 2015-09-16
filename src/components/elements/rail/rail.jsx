import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    floated: ['right', 'left']  
};

export class Rail extends React.Component {
    static propTypes = {
        attached: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        close: React.PropTypes.bool,
        closer: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        dividing: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(validProps.floated).isRequired,
        internal: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        close: false,
        defaultClasses: true
    };

    render() {
        let { attached, children, className, close, defaultClasses, 
              dividing, floated, internal, ...other } = this.props;

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
            attached: this.props.attached,
            very: this.props.closer,
            close: this.props.close || this.props.closer,
            dividing: this.props.dividing,
            internal: this.props.internal,

            // component
            rail: this.props.defaultClasses
        };

        return validateClassProps(classes, this.props, validProps);
    }
}