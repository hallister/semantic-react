import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import { Icon, Label, Checkbox } from '../../elements';
import classNames from 'classnames';

export class Input extends Component {
    static propTypes = {
        children: React.PropTypes.node, 
        className: React.PropTypes.node, 
        defaultClasses: React.PropTypes.bool,
        icon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        labeled: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        loading: React.PropTypes.bool,
        name: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        type: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        defaultClasses: true,
        loading: false,
        placeholder: 'Search...'
    }; 

    renderCheckbox() {
        // consume the type and create a checkbox
        let { type, ...other } = this.props;

        return (<Checkbox {...other} />);
    }

    renderText() {
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

        classes[this.props.size] = !!this.props.size;

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { children, className, defaultClasses, icon, labeled, loading, name, 
              placeholder, tag, type,...other } = this.props;

        return Tag({
            className: classNames(this.props.className, labelClass, iconClass, classes),
            ...other
        }, input);
    }

    render() {
        if (this.props.type == 'checkbox') {
            return this.renderCheckbox();
        } else{
            return this.renderText();
        }

    }

    // sets iconClass if Icon is a child
    getIconClass() {
        let classes = {
            right: false,
            left: false,
            icon: false
        };

       // if icon exists, set the appropriate css classes
        if (this.children.icon) {
            classes.right = this.children.icon.props.right || false;
            classes.left = this.children.icon.props.left || false;
            classes.icon = true;
        }

        return classes;
    }

    // sets labelClass if label is a child
    getLabelClass() {
        let classes = {
            right: false,
            left: false,
            corner: false,
            labeled: false
        };

        // if label exists, set the appropriate css classes
        if (this.children.label) {
            classes.right = this.children.label.props.right || false;
            classes.corner = this.children.label.props.corner || false;
            classes.left = this.children.label.props.left || (classes.corner == 'left')|| false;
            classes.labeled = true;
        }

        return classes;
    }

    // ensures that the label is on the correct side of the input
    prepareInput(labelClass) {
        let input = [];

        // the actual input element
        let inputHTML = <input 
                            key="input" 
                            placeholder={this.props.placeholder} 
                            type={this.props.type} 
                        />;

        if (labelClass.corner) {
            input.push(inputHTML);
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


    // checks if Icon and Label are children of this Input
    // we don't use hasComponent because we need to know if two exist
    // don't need this for anything else yet, so will leave for now
    processChildren() {
        let children = {
            icon: null,
            label: null
        };

        React.Children.forEach(this.props.children, function(child) {
            if (child.type === Icon && child.type != undefined) {
                children.icon = child;
            } else if (child.type === Label && child.type != undefined) {
                children.label = child;
            }
        });

        this.children = children;
    }
}