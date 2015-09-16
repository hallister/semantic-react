import React from 'react';
import classNames from 'classnames';

export class Card extends React.Component {
    static propTypes = {
        centered: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        col: React.PropTypes.string,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        doubling: React.PropTypes.string,
        fluid: React.PropTypes.bool,
        link: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static contextTypes = {
        isCardChild: React.PropTypes.bool
    };

    static childContextTypes = {
        isCardChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
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