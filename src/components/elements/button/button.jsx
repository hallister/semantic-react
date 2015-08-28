import React, { Component } from 'react';
import { Icon } from '../../elements'; // needed for type comparison

// can't get import working?
var classNames = require('classnames');

export class Button extends Component {
	static defaultProps = {
        annimated: false,
        attached: false,
		defaultClasses: true
	};

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
        circular: React.PropTypes.bool,
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
        toggle: React.PropTypes.bool
    };

    static contextTypes = {
        attached: React.PropTypes.bool
    };

    constructor(props) {
        super(props);

    }

  	isLabeled() {
  		if (this.props.label || (React.Children.count(this.props.children) > 1 && this.hasIcon())) {
  			return true;
  		} else {
  			return false;
  		}
  	}

    hasIcon() {
        let hasIcon = false;

        React.Children.forEach(this.props.children, function(child) {
            if (child.type === Icon && child.type != undefined) {
                hasIcon = true;
            }
        });

        return hasIcon;
    }

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
            icon: this.hasIcon() && (!this.props.social || this.props.circular),
        	inverted: this.props.inverted,
        	labeled: this.isLabeled() && !this.props.social,

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

        // handle all string or mixed string/bool props
        classes[this.props.animated] = this.props.animated !== true && this.props.animated !== false ? true : false;
        classes[this.props.attached] = this.props.attached !== true && this.props.attached !== false ? true : false;
        classes[this.props.color] = this.props.color ? true : false;
        classes[this.props.floated] = this.props.floated ? true : false;
        classes[this.props.label] = this.props.label ? true : false;
        classes[this.props.size] = this.props.size ? true : false;
        classes[this.props.social] = this.props.social ? true : false;

        // if it's attached or animated use a div instead of a button (as Semantic UI's examples do)
        let Tag = this.props.attached || this.context.attached || this.props.animated ? "div" : "button";

        return (
            <Tag className={classNames(this.props.className, classes)}>
                {this.props.children}
            </Tag>
        )
    }
}