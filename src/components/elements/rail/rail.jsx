import React, { Component } from 'react';

// Todo: Can't do much without a dimmer

// can't get import working?
var classNames = require('classnames');

export class Rail extends Component {
	static defaultProps = {
        close: false,
		defaultClasses: true
	};

    static propTypes = {
        close: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        attached: React.PropTypes.bool,
        dividing: React.PropTypes.bool,
        float: React.PropTypes.string.isRequired,
        internal: React.PropTypes.bool
    };

     constructor(props) {
        super(props);
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // positioning
            left: false,
            right: false,

            // types
            attached: this.props.attached,
            close: this.props.close,
            dividing: this.props.dividing,
            internal: this.props.internal,
            rail: this.props.defaultClasses
        };

        classes[this.props.close] = this.props.close !== true && this.props.close !== false ? true : false;
        classes[this.props.float] = this.props.float ? true : false;

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        )
    }
}