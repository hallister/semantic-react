import React, { Component } from 'react';
import classNames from 'classnames';


export class Segments extends Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        compact: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        piled: React.PropTypes.bool,
        raised: React.PropTypes.bool,
        stacked: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        let { children, className, compact, defaultClasses, horizontal,
              piled, raised, stacked, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            segments: this.props.defaultClasses,
            horizontal: this.props.horizontal,
            raised: this.props.raised,
            stacked: this.props.stacked,
            piled: this.props.piled,
            compact: this.props.compact,
            inverted: this.props.inverted
        };

        return classes;
    }
}