import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class Label extends Component {
	static defaultProps = {
        corner: false,
		defaultClasses: true,
        pointing: false,
        ribbon: false
	};

    static propTypes = {
        attached: React.PropTypes.string,
        circular: React.PropTypes.bool,
        color: React.PropTypes.string,
        corner: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        defaultClasses: React.PropTypes.bool,
        image: React.PropTypes.bool,
        left: React.PropTypes.bool,
        link: React.PropTypes.bool,
        pointing: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        ribbon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        right: React.PropTypes.bool,
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

            // positioning
            left: false,
            right: false,

            // types
            attached: this.props.attached,
            corner: this.props.corner,
            image: this.props.image,
            label: this.props.defaultClasses,
            pointing: this.props.pointing,
            ribbon: this.props.ribbon,
            tag: this.props.tag,

            // variations
            color: this.props.color,
            circular: this.props.circular
        };

        let { defaultClasses, left, right, corner, label, 
              attached, image, color, pointing, ribbon, tag, 
              link, circular, size, ...other } = this.props;

        classes[this.props.attached] = this.props.attached ? true : false;
        classes[this.props.color] = this.props.color ? true : false;
        classes[this.props.corner] = this.props.corner !== true && this.props.corner !== false ? true : false;
        classes[this.props.pointing] = this.props.pointing !== true && this.props.pointing !== false ? true : false;
        classes[this.props.ribbon] = this.props.ribbon !== true && this.props.ribbon !== false ? true : false;
        classes[this.props.size] = this.props.size ? true : false;

        let Tag = this.props.link || this.props.onClick ? "a" : "div";

        return (
            <Tag className={classNames(this.props.className, classes)} {...other}>
                {this.props.children}
            </Tag>
        )
    }
}