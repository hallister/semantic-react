import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Icon, Content } from '../../elements';
import { KeyFrame } from '../../modules';
// import { Animate } from '../../../lib/animate';

// can't get import working?
let classNames = require('classnames');

// TODO: image and horizontal list examples

export class AccordionBody extends Component {
	static defaultProps = {
		defaultClasses: true
	};

	static propTypes = {

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

            // states

            // variations

            // component
        };

        let childClasses = {
            transition: true
        };

        // handle all string or mixed string/bool props
		return (
			<Content className={classNames(this.props.className, classes)} ref="el" active={this.props.active}>
                {this.props.children}
			</Content>
		);
	}
};