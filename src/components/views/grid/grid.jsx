import React, { Component } from 'react';
import { Numbers, returnTag } from '../../utilities';
import classNames from 'classnames';

export class Grid extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {

    };

    renderColumn() {
        return (
            <Column {...this.props} grid>
                {this.props.children}
            </Column>
        );
    }

    render() {
        if (this.props.column) {
            return this.renderColumn();
        }

    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // types
            mobile: this.props.mobile,
            tablet: this.props.tablet,
            computer: this.props.computer,

            // positions
            left: false,
            center: false,
            right: false,

            // variations
            reversed: this.props.reversed,
            equal: this.props.even,
            width: this.props.even,
            stackable: this.props.stackable,
            aligned: this.props.aligned,
            padded: this.props.padded,
            celled: this.props.celled,

        	// component
        	grid: this.props.defaultClasses,
            container: this.props.container
        };

        classes[this.props.size] = !!this.props.size;
        classes[this.props.aligned] = !!this.props.aligned;

        let Tag = returnTag(this.props.tag || React.DOM.div);   

        let { defaultClasses, size, celled, container, aligned, even, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
            }, 
            this.props.children
        );
    }
}