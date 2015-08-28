import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

// TODO: Circular (do header first)

export class Segment extends Component {
	static defaultProps = {
		defaultClasses: true,
        attached: false,
        style: {}
	};

	static propTypes = {
        aligned: React.PropTypes.string,
        attached: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        basic: React.PropTypes.bool,
        clearing: React.PropTypes.bool,
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.string,
        index: React.PropTypes.number,
        inverted: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        padded: React.PropTypes.bool,
        piled: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        raised: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        stacked: React.PropTypes.bool,
        tertiary: React.PropTypes.bool,
        vertical: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

	render() {
		let style = {};

    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // positioning
            right: false,
            left: false,
            center: false,

            // types
            raised: this.props.raised,
            stacked: this.props.stacked,
            piled: this.props.piled,
            vertical: this.props.vertical,

            // states
            disabled: this.props.disabled,
            loading: this.props.loading,

            // varigations
            aligned: this.props.aligned,
            attached: this.props.attached,
            basic: this.props.basic,
            clearing: this.props.clearing,
            compact: this.props.compact,
            container: this.props.container,
            floated: this.props.floated,
            inverted: this.props.inverted,
        	padded: this.props.padded,
        	primary: this.props.primary,
        	secondary: this.props.secondary,
        	tertiary: this.props.tertiary,

            // defaults (positioning matters)
            segment: this.props.defaultClasses,
        };

        classes[this.props.aligned] = this.props.aligned ? true : false;
        classes[this.props.color] = this.props.color ? true : false;
        classes[this.props.attached] = this.props.attached !== true && this.props.attached !== false ? true : false;
        classes[this.props.floated] = this.props.floated ? true : false;

        if (this.props.piled) {
        	this.props.style.zIndex = this.props.zIndex || 0;
        }

		return (
			<div className={classNames(this.props.className, classes)} style={this.props.style}>
				{this.props.children}
			</div>
		);
	}
}