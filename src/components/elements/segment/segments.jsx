import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Segments extends Component {
	static defaultProps = {
		defaultClasses: true
	};

	static propTypes = {
		raised: React.PropTypes.bool,
		stacked: React.PropTypes.bool,
		piled: React.PropTypes.bool,
		horizontal: React.PropTypes.bool,
		compact: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

	render() {
		let style = {};

    	let classes = {
        	ui: this.props.defaultClasses,
        	segments: this.props.defaultClasses,
        	horizontal: this.props.horizontal,
        	raised: this.props.raised,
        	stacked: this.props.stacked,
        	piled: this.props.piled,
        	compact: this.props.compact
        };


		return (
			<div className={classNames(this.props.className, classes)}>
				{this.props.children}
			</div>
		);
	}
}