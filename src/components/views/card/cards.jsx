import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Cards extends Component {
	static defaultProps = {
		defaultClasses: true
	};


    static propTypes = {
    	defaultClasses: React.PropTypes.bool,
    	link: React.PropTypes.bool,
    };

	static childContextTypes = {
		DisableUIClass: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

    getChildContext() {
    	return {
    		DisableUIClass: true
    	}
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

        	// types
        	link: this.props.link || this.props.onClick,

        	// component
        	cards: this.props.defaultClasses
        };

        return (
			<div className={classNames(this.props.className, classes)}>
				{this.props.children}
			</div>
        );
    }
}
