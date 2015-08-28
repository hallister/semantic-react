import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Icon extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
        aligned: React.PropTypes.string,
        circular: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired,
        size: React.PropTypes.string
    };

	constructor(props) {
        super(props);
    }

    render() {
    	let classes = {
            // default
        	icon: this.props.defaultClasses,

            // variations
            circular: this.props.circular,
            link: this.props.link,
            inverted: this.props.inverted
        };

        // handle all string or mixed string/bool props
        classes[this.props.aligned] = this.props.aligned ? true : false;

        // aligned must come *after* the actual alignment
        classes.aligned = this.props.aligned ? true : false;
        classes[this.props.name] = this.props.name ? true : false;
        classes[this.props.size] = this.props.size ? true : false;

        return (
            <i className={classNames(this.props.className, classes)}></i>
        )
    }

}