import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Item extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
        active: React.PropTypes.bool
    };

     constructor(props) {
        super(props);
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // positioning

            // types
            active: this.props.active,
            item: this.props.defaultClasses

            // content

            // variations

        };

        let { defaultClasses, ...other } = this.props;

        let Tag = this.props.link || this.props.onClick ? "a" : "div";

        return (
            <Tag className={classNames(this.props.className, classes)} {...other}>
                {this.props.children}
            </Tag>
        )
    }
}