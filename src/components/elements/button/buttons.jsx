import React, { Component } from 'react';
import { Numbers, returnTag } from '../../utilities';
import classNames from 'classnames';

export class Buttons extends Component {
    static propTypes = {
        attached: React.PropTypes.string,
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        even: React.PropTypes.bool,
        icon: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        labeled: React.PropTypes.bool,
        negative: React.PropTypes.bool,
        positive: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        size: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        vertical: React.PropTypes.bool
    };

    static childContextTypes = {
        isAttached: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    getChildContext() {
        return {
            'isAttached': !!this.props.attached
        };
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            basic: this.props.basic,
            icon: this.props.icon,
            inverted: this.props.inverted,
            labeled: this.props.labeled,

            // variations
            attached: this.props.attached,
            compact: this.props.compact,
            negative: this.props.negative,
            positive: this.props.positive,
            primary: this.props.primary,
            secondary: this.props.secondary,
            vertical: this.props.vertical,

            // component
            buttons: this.props.defaultClasses
        };

        let childCount = React.Children.count(this.props.children);

        // buttons group with >0 buttons that are all of equal width
        if (classes.attached || this.props.even) {
            if (childCount > 0  && childCount <= 12) {
                classes[Numbers[childCount]] = true;
            }
        }

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { attached, basic, children, className, color, compact, defaultClasses, even, icon, labeled, 
              negative, positive, primary, secondary, size, tag, vertical, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}