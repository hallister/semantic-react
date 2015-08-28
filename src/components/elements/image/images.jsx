import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Images extends Component {
    static defaultProps = {
        defaultClasses: true
    };

    static propTypes = {
        avatar: React.PropTypes.bool,
        bordered: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        size: React.PropTypes.string
    };

	constructor(props) {
        super(props);
    }

    render() {
    	let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
        	images: this.props.defaultClasses,

            // states
            hidden: this.props.hidden,
            disabled: this.props.disabled,

            // variations
            avatar: this.props.avatar,
            bordered: this.props.bordered,
            circular: this.props.circular,
            rounded: this.props.rounded
        };

        classes[this.props.size] = this.props.size ? true : false;

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        )
    }

}