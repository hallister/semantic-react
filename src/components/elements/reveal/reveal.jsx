import React, { Component } from 'react';

// Todo: Can't do much without a dimmer

// DFS for recursive seaarching of a specific child component
let hasComponent = function(children, component) {
    let found = false;

    React.Children.forEach(children, function(child) {
        if (child.type === component && child.type != undefined) {
            found = true;
        } else {
            if (child.props.children) {
            found = hasComponent(child.props.children, component);
            }
        }
    });

    return found;
}

// can't get import working?
var classNames = require('classnames');

export class Reveal extends Component {
	static defaultProps = {
		defaultClasses: true,
        image: false,
        move: false,
        rotate: false
	};

    static propTypes = {
        active: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fade: React.PropTypes.bool,
        instant: React.PropTypes.bool,
        image: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        move: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        rotate: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        size: React.PropTypes.string,
        type: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // types
            active: this.props.active,
            circular: this.props.circular,
            instant: this.props.instant,

            // states
            disabled: this.props.disabled,

            // transitions
            fade: this.props.fade,
            move: this.props.move,
            rotate: this.props.rotate,

            // sub-defaults (order can matter?)
            reveal: this.props.defaultClasses,
            image: this.props.image || hasComponent(this.props.children, Image)
        };

        classes[this.props.image] = this.props.image !== true && this.props.image !== false ? true : false;
        classes[this.props.move] = this.props.move !== true && this.props.move !== false ? true : false;
        classes[this.props.rotate] = this.props.rotate !== true && this.props.rotate !== false ? true : false;
        classes[this.props.size] = this.props.size ? true : false;
        classes[this.props.type] = this.props.type ? true : false;

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        )
    }
}