import React from 'react';
import classNames from 'classnames';

export class Item extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ])
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
        let Component = this.props.onClick && !this.context.isMenuChild ? 'a' : 'div';

        let { defaultClasses, tag, selected, ...other } = this.props;

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
            active: this.props.selected,
            selected: this.props.selected,

            // content

            // variations

            // component
            item: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;

        return classes;
    }
}