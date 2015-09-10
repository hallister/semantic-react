import React from 'react';
import classNames from 'classnames';

export class Detail extends React.Component {
    static defaultProps = {
        defaultClasses: true
    };

    static propTypes = {
        defaultClasses: React.PropTypes.bool
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