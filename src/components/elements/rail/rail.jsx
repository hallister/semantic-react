import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class Rail extends Component {
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
        close: false,
        defaultClasses: true
    };

    render() {
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

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { attached, children, className, close, defaultClasses, 
              dividing, float, internal, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}