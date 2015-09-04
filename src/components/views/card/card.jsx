import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Card extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
        centered: React.PropTypes.bool,
        col: React.PropTypes.string,
        color: React.PropTypes.string,
        doubling: React.PropTypes.string,
        defaultClasses: React.PropTypes.bool,
        fluid: React.PropTypes.bool
    };

    static childContextTypes = {
        DisableUIClass: React.PropTypes.bool
    };

	static contextTypes = {
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
        	ui: this.props.defaultClasses  && !this.context.isChildCard,


        	// component
        	card: this.props.defaultClasses,

            // variations
            centered: this.props.centered,
            doubling: this.props.doubling,
            color: this.props.color,
            fluid: this.props.fluid
        };

        classes[this.props.color] = this.props.color ? true : false;
        classes[this.props.col] = this.props.col ? true : false;
        classes[this.props.doubling] = this.props.doubling ? true : false;

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        );
    }
}