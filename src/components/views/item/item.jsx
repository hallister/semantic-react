import React from 'react';
import classNames from 'classnames';

export class Item extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.oneOfType([
            React.PropTypes.node,
            React.PropTypes.object
        ]),
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        link: React.PropTypes.bool,
        name: React.PropTypes.string,
        onClick: React.PropTypes.func,
        selected: React.PropTypes.bool
    };
    // anytime we are the child of a menu, we want to use a div
    static contextTypes = {
        isMenuChild: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        // if it's attached or animated use a div instead of a button
        let Component = (this.props.link || this.props.onClick) && !this.context.isMenuChild ? 'a' : 'div';

        let { active, component, color, link, selected, defaultClasses,
              name, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component || Component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default

            // positioning

            // types
            active: this.props.active,
            selected: this.props.active && this.context.isMenuChild,

            // content

            // variations

            // component
            item: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;

        return classes;
    }
}
