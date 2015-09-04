import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class Item extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ])
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning

            // types
            active: this.props.active,

            // content

            // variations

            // component
            item: this.props.defaultClasses

        };

        // if it's attached or animated use a div instead of a button
        let Tag = this.props.link || this.props.onClick ? React.DOM.a : React.DOM.div;
        Tag = returnTag(this.props.tag || Tag);

        let { defaultClasses, tag, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}