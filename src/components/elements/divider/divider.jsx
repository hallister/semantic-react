import React from 'react';
import classNames from 'classnames';

// Currently header/dividers are only headers. Maybe do both?

export class Divider extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.oneOf(['horizontal', 'vertical']),
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        clearing: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        header: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        spacing: React.PropTypes.oneOf(['fitted', 'padded'])
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        let { aligned, children, className, clearing, component, defaultClasses,
              header, hidden, inverted, ...other } = this.props;

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
            horizontal: this.props.aligned === 'horizontal',
            vertical: this.props.aligned === 'vertical',

            // variations
            clearing: this.props.clearing,
            fitted: this.props.spacing === 'fitted',
            hidden: this.props.hidden,
            inverted: this.props.inverted,
            section: this.props.spacing === 'padded',

            // component
            divider: this.props.defaultClasses
        };

        return classes;
    }
}
