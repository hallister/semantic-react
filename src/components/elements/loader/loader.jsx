import React, { Component } from 'react';

// Todo: Can't do much without a dimmer

// can't get import working?
var classNames = require('classnames');

export class Loader extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {

    };

     constructor(props) {
        super(props);
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // types
            loader: this.props.defaultClasses
        };

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        )
    }
}