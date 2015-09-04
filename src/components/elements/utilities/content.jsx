import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Content extends Component {
	static defaultProps = {
		defaultClasses: true,
		floated: false
	};

	static propTypes = {
		active: React.PropTypes.bool,
		aligned: React.PropTypes.string,
		extra: React.PropTypes.bool,
		floated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
		hidden: React.PropTypes.bool,
		meta: React.PropTypes.bool,
		visible: React.PropTypes.bool
	};

    static contextTypes = {
        isDimmerChild: React.PropTypes.bool
    };

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
        	active: this.props.active,
        	aligned: this.props.aligned,
        	extra: this.props.extra,
        	floated: this.props.floated,
        	hidden: this.props.hidden,
        	meta: this.props.meta,
        	visible: this.props.visible
		};

		classes[this.props.floated] = typeof floated == 'string' ? true : false;
		classes[this.props.aligned] = !!this.props.aligned;

		let children = this.context.isDimmerChild ? 
			<div className="center">{this.props.children}</div> :
			this.props.children;

		return (
			<div className={classNames(this.props.className, classes)} style={this.props.style} active={this.props.active}>
				{children}
			</div>
		);
	}
}