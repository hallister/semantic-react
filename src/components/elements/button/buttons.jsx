import React, { Component } from 'react';

// can't get import working?
let classNames = require('classnames');

// could move this to a utility
let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
			   'eight', 'nine', 'ten', 'eleven', 'twelve'];

export class Buttons extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
		attached: React.PropTypes.string,
		basic: React.PropTypes.bool,
		color: React.PropTypes.string,
        compact: React.PropTypes.bool,
		defaultClasses: React.PropTypes.bool,
        even: React.PropTypes.bool,
		icon: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        negative: React.PropTypes.bool,
        positive: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
		size: React.PropTypes.string,
		vertical: React.PropTypes.bool
    };

	static childContextTypes = {
		attached: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

    getChildContext() {
    	return {
    		'attached': !!this.props.attached
    	}
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

        }

        // buttons group with >0 buttons that are all of equal width
        if (classes.attached || this.props.even) {
        	if (React.Children.count(this.props.children) > 0 
                && React.Children.count(this.props.children) <= 12) {
        		classes[numbers[this.props.children.length]] = true;
        	}
        }

        classes[this.props.color] = this.props.color ? true : false;
        classes[this.props.size] = this.props.size ? true : false;

    	return (
    		<div className={classNames(this.props.className, classes)}>
    			{this.props.children}
    		</div>
    	)
    }
}