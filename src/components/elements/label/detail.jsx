import React from 'react';
import classNames from 'classnames';

export class Detail extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        let Component = this.props.onClick ? 'a' : 'div';      
        let { defaultClasses, ...other } = this.props;

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
            detail: this.props.defaultClasses
        };

        return classes;
    }
}