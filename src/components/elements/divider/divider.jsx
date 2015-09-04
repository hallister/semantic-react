import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

// Currently header/dividers are only headers. Maybe do both?

export class Divider extends Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        clearing: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        header: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        section: React.PropTypes.bool,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        vertical: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            //types
            header: this.props.header,
            horizontal: this.props.horizontal,
            vertical: this.props.vertical,

            //variations
            clearing: this.props.clearing,
            fitted: this.props.fitted,
            hidden: this.props.hidden,
            inverted: this.props.inverted,
            section: this.props.section,

            // component
            divider: this.props.defaultClasses
        };

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { children, className, clearing, defaultClasses, fitted, header, hidden, 
              horizontal, inverted, section, tag, vertical, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}