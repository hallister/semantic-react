import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Description extends Component {
	static defaultProps = {
		defaultClasses: true
	};

	static propTypes = {
		hidden: React.PropTypes.bool,
		visible: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

	render() {
		let classes = {
			// default
        	description: this.props.defaultClasses,

        	// animation
        	visible: this.props.visible,
        	hidden: this.props.hidden
		};

		return (
			<div className={classNames(this.props.className, classes)}>
				{this.props.children}
			</div>
		);
	}
}