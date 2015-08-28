import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

// Currently header/dividers are only headers. Maybe do both?

export class Divider extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
        defaultClasses: React.PropTypes.bool,
        clearing: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        header: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        section: React.PropTypes.bool,
        vertical: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {

    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            //types
            header: this.props.header,
            horizontal: this.props.horizontal,
            vertical: this.props.vertical,

            //variations
            clearing: this.props.clearing,
            fitted: this.props.fitted,
            hidden: this.props.hidden,
            inverted: this.props.inverted,
            section: this.props.section,

            // component
            divider: this.props.defaultClasses
        };

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        )
    }
}