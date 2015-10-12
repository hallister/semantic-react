import React from 'react';
import classNames from 'classnames';

// Currently header/dividers are only headers. Maybe do both?

export class Divider extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        clearing: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        header: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        section: React.PropTypes.bool,
        vertical: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        let { children, className, clearing, component, defaultClasses, fitted,
              header, hidden, horizontal, inverted, section, vertical,
              ...other } = this.props;

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
            header: this.props.header,
            horizontal: this.props.horizontal,
            vertical: this.props.vertical,

            // variations
            clearing: this.props.clearing,
            fitted: this.props.fitted,
            hidden: this.props.hidden,
            inverted: this.props.inverted,
            section: this.props.section,

            // component
            divider: this.props.defaultClasses
        };

        return classes;
    }
}
