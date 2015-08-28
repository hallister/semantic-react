import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Content extends Component {
	static defaultProps = {
		defaultClasses: true,
		floated: false
	};

	static propTypes = {
		aligned: React.PropTypes.string,
		floated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
		hidden: React.PropTypes.bool,
		visible: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

	render() {
		let classes = {
			// default
        	content: this.props.defaultClasses,

        	// positioning
        	left: false,
        	right: false,
        	top: false,
        	middle: false,
        	bottom: false,

        	// variations
        	aligned: this.props.aligned,
        	floated: this.props.floated,
        	hidden: this.props.hidden,
        	visible: this.props.visible
		};

		 classes[this.props.aligned] = this.props.aligned ? true : false;
		 classes[this.props.floated] = this.props.floated !== true && this.props.floated !== false ? true : false;

		return (
			<div className={classNames(this.props.className, classes)}>
				{this.props.children}
			</div>
		);
	}
}