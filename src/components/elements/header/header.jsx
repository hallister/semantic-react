import React, { Component } from 'react';
import { Icon } from '../../elements';

// can't get import working?
var classNames = require('classnames');

// TODO: image and horizontal list examples

export class Header extends Component {
	static defaultProps = {
		attached: false,
		defaultClasses: true,
	};

	static propTypes = {
		aligned: React.PropTypes.string,
		attached: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.bool
		]),
		block: React.PropTypes.bool,
		color: React.PropTypes.string,
		disabled: React.PropTypes.bool,
        divider: React.PropTypes.bool,
		dividing: React.PropTypes.bool,
		element: React.PropTypes.string,
		floated: React.PropTypes.string,
        horizontal: React.PropTypes.bool,
		inverted: React.PropTypes.bool,				
		size: React.PropTypes.string
	};

    /* A header that is under a header is a special case sub-header.
     * If we find ourselves as the ancestor of a Header, we avoid the ui
     * css class. This behavior can be overridden with the style prop.
     */
	static childContextTypes = {
		isChildHeader: React.PropTypes.bool
	};

    /* A header that is under a list is a special case header. 
     * If we find ourselves as the ancestor of a List, we avoid the ui
     * css class. This behavior can be overridden with the style prop.
     */
	static contextTypes = {
        isChildList: React.PropTypes.bool,
		isChildHeader: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

    getChildContext() {
    	return {
    		'isChildHeader': true
    	}
    }

    // replace with hasComponent DFS
    hasIcon() {
        let hasIcon = false;

        React.Children.forEach(this.props.children, function(child) {
            if (child.type === Icon && child.type != undefined) {
                hasIcon = true;
            }
        });

        return hasIcon;
    }

	render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses  && !this.context.isChildList,

            // positioning
        	right: false,
        	left: false,

            // types
            header: this.props.defaultClasses,

            // states
            disabled: this.props.disabled,

            // variations
            aligned: this.props.aligned && this.props.aligned !== "justified",
            attached: this.props.attached,
            block: this.props.block,
            divider: this.props.divider,
            dividing: this.props.dividing,
        	floated: this.props.floated,
            horizontal: this.props.horizontal,
       		inverted: this.props.inverted
        };

        // handle all string or mixed string/bool props
        classes[this.props.aligned] = this.props.aligned ? true : false;
        classes[this.props.attached] = this.props.attached !== true && this.props.attached !== false ? true : false;
        classes[this.props.color] = this.props.color ? true : false;
        classes[this.props.floated] = this.props.floated ? true : false;
        classes[this.props.size] = this.props.size ? true : false;

        let Tag = "";

        if (this.props.element) {
            Tag = this.props.element;
        } else if (this.props.onClick){
            Tag = "a";
        } else{
            Tag = "div";
        }

		return (
			<Tag className={classNames(this.props.className, classes)}>
				{this.props.children}
			</Tag>
		);
	}
}