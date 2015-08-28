import React, { Component } from 'react';
import { Icon, Label } from '../../elements';

// can't get import working?
var classNames = require('classnames');

// TODO: Animated

export class Input extends Component {
	static defaultProps = {
        corner: false,
		defaultClasses: true,
        loading: false,
        placeholder: "Search..."
	};

    static propTypes = {
        corner: React.PropTypes.bool,
        labeled: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        loading: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        icon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        placeholder: React.PropTypes.string,
        type: React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    // checks if Icon and Label are children of this Input
    // we don't use hasComponent because we need to know if two exist...
    // better alternative? 
    processChildren() {
        let children = {
            icon: null,
            label: null
        }

        React.Children.forEach(this.props.children, function(child) {
            if (child.type === Icon && child.type != undefined) {
                children.icon = child;
            } else if (child.type === Label && child.type != undefined) {
                children.label = child;
            }
        });

        this.children = children;
    }

    // sets labelClass if label is a child
    getLabelClass() {
        let classes = {
            right: false,
            left: false,
            corner: false,
            labeled: false
        }

        // if label exists, set the appropriate css classes
        if (this.children.label) {
            classes.right = this.children.label.props.right || false;
            classes.corner = this.children.label.props.corner || false;
            classes.left = this.children.label.props.left || (classes.corner == "left")|| false;
            classes.labeled = true;
        }

        return classes;
    }

    // sets iconClass if Icon is a child
    getIconClass() {
        let classes = {
            right: false,
            left: false,
            icon: false
        }

       // if icon exists, set the appropriate css classes
        if (this.children.icon) {
            classes.right = this.children.icon.props.right || false;
            classes.left = this.children.icon.props.left || false;
            classes.icon = true;
        }

        return classes;
    }

    // ensures that the label is on the correct side of the input
    prepareInput(labelClass) {
        let input = [];

        // the actual input element
        let inputHTML = <input key="input" type={this.props.type} placeholder={this.props.placeholder}/>;

        if (labelClass.corner) {
            input.push(inputHTML)
            input.push(this.props.children);
        } else{
            input.push(this.children.icon);

            // if label is on the write, put the input on the left
            if (labelClass.right) {
                input.push(inputHTML);
                input.push(this.children.label);
            } else {
                input.push(this.children.label);
                input.push(inputHTML);
            }
        }



        return input;
    }

    render() {
     	let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            input: this.props.defaultClasses,

            // states
            disabled: this.props.disabled,
            error: this.props.error,
            focus: this.props.focus,
            loading: this.props.loading,

            // variations
            action: this.props.action,
            fluid: this.props.fluid,
            inverted: this.props.inverted,
            size: this.props.size,
            transparent: this.props.transparent
        };

        // see if icon and label are children
        this.processChildren();
        
        let labelClass = this.getLabelClass();
        let iconClass = this.getIconClass();
        let input = this.prepareInput(labelClass);

        classes[this.props.loading] = this.props.loading !== true && this.props.loading !== false ? true : false;
        classes[this.props.size] = this.props.size ? true : false;

        return (
            <div className={classNames(this.props.className, labelClass, iconClass, classes)}>
                {input}    
            </div>
        )
    }
}