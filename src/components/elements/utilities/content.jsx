import React from 'react';
import classNames from 'classnames';


export class Content extends React.Component {
	static defaultProps = {
		component: 'div',
		defaultClasses: true,
		floated: false
	};

	static propTypes = {
		active: React.PropTypes.bool,
		aligned: React.PropTypes.string,
		extra: React.PropTypes.bool,
		floated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
		hidden: React.PropTypes.bool,
		meta: React.PropTypes.bool,
		visible: React.PropTypes.bool
	};

    static contextTypes = {
        isDimmerChild: React.PropTypes.bool
    };

    renderDimmerChild() {
    	return (<div className="center">{this.props.children}</div>);
    }

	render() {
		let children = this.context.isDimmerChild ? this.renderDimmerChild() : this.props.children;

		let { aligned, component, extra, floated, hidden, meta, visible, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            children
        );
	}

	getClasses() {
		let classes = {
			// default
        	content: this.props.defaultClasses,
        	
        	// positioning
        	left: false,
        	right: false,
        	top: false,
        	middle: false,
        	bottom: false,

        	// variations
        	active: this.props.active,
        	aligned: this.props.aligned,
        	extra: this.props.extra,
        	floated: this.props.floated,
        	hidden: this.props.hidden,
        	meta: this.props.meta,
        	visible: this.props.visible
		};

		classes[this.props.floated] = typeof floated == 'string' ? true : false;
		classes[this.props.aligned] = !!this.props.aligned;

		return classes;
	}
}