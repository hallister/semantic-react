import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class Labels extends Component {
    static propTypes = {
        arrow: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        defaultClasses: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        size: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ])
    };

    // we only set defaults for props that can be both bool and string + the defaultClasses
    static defaultProps = {
        defaultClasses: true
    };

    render() {
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

        // if it's attached or animated use a div instead of a button
        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { arrow, circular, color, defaultClasses, size, tag, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            onClick: this.props.onClick,
            ...other
        }, this.props.children);
    }
}