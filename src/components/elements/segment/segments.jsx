import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';


export class Segments extends Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        compact: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        piled: React.PropTypes.bool,
        raised: React.PropTypes.bool,
        stacked: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        let style = {};

        let classes = {
            ui: this.props.defaultClasses,
            segments: this.props.defaultClasses,
            horizontal: this.props.horizontal,
            raised: this.props.raised,
            stacked: this.props.stacked,
            piled: this.props.piled,
            compact: this.props.compact
        };

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { children, className, compact, defaultClasses, horizontal,
              piled, raised, stacked, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            style: style,
            ...other
        }, this.props.children);
    }
}