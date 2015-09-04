import React, { Component } from 'react';
import { Icon } from '../../elements';
import { hasChild, childCount, returnTag } from '../../utilities';
import classNames from 'classnames';

export class Button extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        animated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        attached: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.string,
        fluid: React.PropTypes.bool,
        icon: React.PropTypes.string,
        inverted: React.PropTypes.bool,
        label: React.PropTypes.string,
        loading: React.PropTypes.bool,
        negative: React.PropTypes.bool,
        positive: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        size: React.PropTypes.string,
        social: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        toggle: React.PropTypes.bool
    };

    static contextTypes = {
        isAttached: React.PropTypes.bool
    };
    
    static defaultProps = {
        animated: false,
        attached: false,
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
            animated: this.props.animated,
            basic: this.props.basic,
            icon: hasChild(this.props.children, Icon) && (!this.props.social || this.props.circular),
            inverted: this.props.inverted,
            labeled: (this.hasOneIconChild() || this.props.label) && !this.props.social,

            // states
            active: this.props.active,
            disabled: this.props.disabled,
            loading: this.props.loading,

            // variations
            attached: this.props.attached,
            circular: this.props.circular,
            compact: this.props.compact,
            fluid: this.props.fluid,
            negative: this.props.negative,
            positive: this.props.positive,
            primary: this.props.primary,
            secondary: this.props.secondary,

            // component
            button: this.props.defaultClasses
        };

        // handle mixed string/bool props
        classes[this.props.animated] = typeof this.props.animated == 'string' ? true : false;
        classes[this.props.attached] = typeof this.props.attached == 'string' ? true : false;
        
        // string types
        classes[this.props.color] = !!this.props.color;
        classes[this.props.floated] = !!this.props.floated;
        classes[this.props.label] = !!this.props.label;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.social] = !!this.props.social;

        // if it's attached or animated use a div instead of a button
        let Tag = this.props.attached || this.context.isAttached || this.props.animated ? React.DOM.div : React.DOM.button;
        Tag = returnTag(this.props.tag || Tag);

        let { active, animated, attached, basic, children, circular, color, compact, defaultClasses, disabled, 
            fluid, inverted, label, loading, negative, positive, primary, secondary, size, social, tag, 
            ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }

    hasOneIconChild() {
        if (childCount(this.props.children) > 1 && hasChild(this.props.children, Icon)) {
            return true;
        } else {
            return false;
        }
    }
}