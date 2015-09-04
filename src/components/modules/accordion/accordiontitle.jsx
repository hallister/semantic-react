import React, { Component } from 'react';
import { Icon } from '../../elements';

// can't get import working?
var classNames = require('classnames');

export class AccordionTitle extends Component {
	static defaultProps = {
		defaultClasses: true,
        icon: 'dropdown'
	};

    static propTypes = {
        defaultClasses: React.PropTypes.bool
    };

     constructor(props) {
        super(props);
    }

    render() {

    	let classes = {
            // default

            // positioning

            // types

            // variations
            active: this.props.active,

            // component
            title: this.props.defaultClasses
        };

        return (
            <div className={classNames(this.props.className, classes)} onClick={this.props.onClick}>
                <Icon name={this.props.icon} />
                {this.props.children}
            </div>
        )
    }
}