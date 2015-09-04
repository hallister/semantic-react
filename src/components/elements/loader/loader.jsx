import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

// Todo: Can't do much without a dimmer

export class Loader extends Component {
    static defaultProps = {
        defaultClasses: true
    };

    static propTypes = {
        defaultClasses: React.PropTypes.bool,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ])
    };


    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // component
            loader: this.props.defaultClasses
        };

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { defaultClasses, tag, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}