import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Labels extends Component {
    // we only set defaults for props that can be both bool and string + the defaultClasses
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
        circular: React.PropTypes.bool,
        color: React.PropTypes.string,
        defaultClasses: React.PropTypes.bool,
        size: React.PropTypes.string,
        tag: React.PropTypes.bool
    };

     constructor(props) {
        super(props);
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // types
            labels: this.props.defaultClasses,
            tag: this.props.tag,

            // variations
            color: this.props.color,
            circular: this.props.circular
        };

        classes[this.props.color] = this.props.color ? true : false;
        classes[this.props.size] = this.props.size ? true : false;

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        )
    }
}