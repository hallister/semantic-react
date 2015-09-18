import React from 'react';
import { LabeledButton, IconButton } from '../../elements';
import { Numbers, validateClassProps, isEveryChild } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
}

export class Buttons extends React.Component {
    static propTypes = {
        attached: React.PropTypes.oneOf(validProps.attached),
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        equal: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(validProps.floated),
        icon: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        labeled: React.PropTypes.bool,
        negative: React.PropTypes.bool,
        positive: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        size: React.PropTypes.string,
        vertical: React.PropTypes.bool
    };

    static childContextTypes = {
        isAttached: React.PropTypes.bool,
        isIconButtons: React.PropTypes.bool,
        isLabeledButtons: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    getChildContext() {
        return {
            isAttached: !!this.props.attached,
            isIconButtons: !!this.props.icon,
            isLabeledButtons: !!this.props.labeled
        };
    }

    render() {
        let { attached, basic, children, className, color, compact, component, defaultClasses, equal, floated, 
              icon, inverted, labeled, negative, positive, primary, secondary, size, vertical, ...other } = this.props;

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
            basic: this.props.basic,
            icon: this.props.icon || isEveryChild(this.props.children, IconButton),
            inverted: this.props.inverted,
            labeled: this.props.labeled || isEveryChild(this.props.children, LabeledButton),

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
        if (this.props.equal) {
            if (childCount > 1  && childCount <= 12) {
                classes[Numbers[childCount]] = true;
            } else {
                classes['fluid'] = true;
            }
        }

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}