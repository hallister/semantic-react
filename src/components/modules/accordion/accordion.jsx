import React, { Component } from 'react';
import { AccordionTitle, AccordionBody } from '../../modules'

// can't get import working?
var classNames = require('classnames');

export class Accordion extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
        defaultClasses: React.PropTypes.bool
    };

    constructor(props) {
        super(props);

        this.state = {
            currentActive: null
        }
    }

    _handleClick(key, e, idx) {
        let active = undefined;

        if (key !== this.state.currentActive) {
            active = key;
        }

        this.setState({
            currentActive: active
        })
    }

    renderChildren() {
        let index = 0;
        let element = null;

        return React.Children.map(this.props.children, function(child) {

            let active = this.state.currentActive === index;

            if (child.type == AccordionTitle) {
                var boundClick = this._handleClick.bind(this, index);

                element = React.cloneElement(child, {
                    active: this.state.currentActive === index,
                    onClick: boundClick
                });
            } else if (child.type == AccordionBody) {
                element = React.cloneElement(child, {
                    active: this.state.currentActive === index,
                    event: this.state.event
                });
                index++;
            } else {
                return child;
            }

            return element;
        }.bind(this));
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // positioning

            // types
            styled: this.props.styled,

            // variations
            fluid: this.props.fluid,
            inverted: this.props.inverted,

            // component
            accordion: this.props.defaultClasses
        };


        return (
            <div className={classNames(this.props.className, classes)}>
                {this.renderChildren()}
            </div>
        )
    }
}