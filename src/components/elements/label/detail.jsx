import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Detail extends Component {
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
        	detail: this.props.defaultClasses
        };

        let { defaultClasses, ...other } = this.props;

        let Tag = this.props.link || this.props.onClick ? "a" : "div";

        return (
            <Tag className={classNames(this.props.className, classes)} {...other}>
                {this.props.children}
            </Tag>
        );
    }
}