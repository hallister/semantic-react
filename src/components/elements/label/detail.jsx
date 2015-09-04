import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class Detail extends Component {
    static defaultProps = {
        defaultClasses: true
    };

    static propTypes = {
        defaultClasses: React.PropTypes.bool
    };

    render() {
        let classes = {
            // default
            detail: this.props.defaultClasses
        };

        let Tag = this.props.onClick || this.props.link ? React.DOM.a : React.DOM.div;
        Tag = returnTag(this.props.tag || Tag);
       
        let { defaultClasses, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            onClick: this.props.onClick,
            ...other
        }, this.props.children);
    }
}