import React from 'react';
import classNames from 'classnames';

export class Card extends React.Component {
	static defaultProps = {
        component: 'div',
		defaultClasses: true
	};

    static propTypes = {
        centered: React.PropTypes.bool,
        col: React.PropTypes.string,
        color: React.PropTypes.string,
        doubling: React.PropTypes.string,
        defaultClasses: React.PropTypes.bool,
        fluid: React.PropTypes.bool,
        link: React.PropTypes.bool
    };

    static childContextTypes = {
        isCardChild: React.PropTypes.bool
    };

	static contextTypes = {
        isCardChild: React.PropTypes.bool
	};

	constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            isCardChild: true
        }
    }

    render() {
        let { centered, col, color, doubling, defaultClasses, fluid, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses  && !this.context.isChildCard,


            // component
            card: this.props.defaultClasses,

            // variations
            centered: this.props.centered,
            doubling: this.props.doubling,
            color: this.props.color,
            fluid: this.props.fluid,
            link: this.props.link || this.props.onClick
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.col] = !!this.props.col;
        classes[this.props.doubling] = !!this.props.doubling;

        return classes;
    }
}