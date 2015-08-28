import React, { Component } from 'react';

// can't get import working?
var classNames = require('classnames');

export class List extends Component {
	static defaultProps = {
		defaultClasses: true
	};

    static propTypes = {
        aligned: React.PropTypes.string,
        animated: React.PropTypes.bool,
        celled: React.PropTypes.bool,
        bulleted: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        divided: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        ordered: React.PropTypes.bool,
        relaxed: React.PropTypes.bool,
        selection: React.PropTypes.bool,
        size: React.PropTypes.string
    };

    static childContextTypes = {
        isChildList: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            'isChildList': true
        }
    }

    render() {
    	let classes = {
            // default
        	ui: this.props.defaultClasses,

            // types
            bulleted: this.props.bulleted,
            horizontal: this.props.horizontal,
            link: this.props.link,
            list: this.props.defaultClasses,
            ordered: this.props.ordered,

            // variations
            animated: this.props.animated,
            celled: this.props.celled,
            divided: this.props.divided,
            inverted: this.props.inverted,
            relaxed: this.props.relaxed,
            selection: this.props.selection
        };

        classes[this.props.aligned] = this.props.aligned ? true : false;
        classes[this.props.size] = this.props.size ? true : false;

        // aligned must come *after* the actual alignment
        classes.aligned = this.props.aligned ? true : false;

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        )
    }
}