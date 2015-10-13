import React, { Component } from 'react';
import { Numbers, returnTag } from '../../utilities';
import classNames from 'classnames';

export class Column extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {

    };

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            //position
            left: false,
            right: false,
            vertically: false,

            // types
            mobile: this.props.mobile,
            tablet: this.props.tablet,
            computer: this.props.computer,

            // variations
            doubling: this.props.doubling,
            centered: this.props.centered,
            divided: this.props.divided,
            floated: this.props.floated,

            // component
            column: this.props.defaultClasses,
            grid: this.props.grid,
            row: this.props.row
        };

        classes[this.props.celled] = typeof this.props.celled == 'string' ? true : false;
        classes[this.props.divided] = typeof this.props.divided == 'string' ? true : false;

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.floated] = !!this.props.floated;

        Tag = returnTag(this.props.tag || React.DOM.div);

        let { defaultClasses, floated, size, wide, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
            }, 
            this.props.children
        );
    }
}