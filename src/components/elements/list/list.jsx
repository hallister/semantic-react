import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class List extends Component {
    static propTypes = {
        aligned: React.PropTypes.string,
        animated: React.PropTypes.bool,
        bulleted: React.PropTypes.bool,
        celled: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool,
        divided: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        ordered: React.PropTypes.bool,
        relaxed: React.PropTypes.bool,
        selection: React.PropTypes.bool,
        size: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ])
    };

    static childContextTypes = {
        isListChild: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    getChildContext() {
        return {
            'isListChild': true
        }
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            bulleted: this.props.bulleted,
            horizontal: this.props.horizontal,
            link: this.props.link,
            ordered: this.props.ordered,

            // variations
            animated: this.props.animated,
            celled: this.props.celled,
            divided: this.props.divided,
            inverted: this.props.inverted,
            relaxed: this.props.relaxed,
            selection: this.props.selection,

            // aligned variation
            top: false,
            middle: false,
            bottom: false,
            aligned: this.props.aligned,

            // component
            list: this.props.defaultClasses
        };

        classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.size] = !!this.props.size;

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { aligned, animated, celled, bulleted, defaultClasses, divided, horizontal, 
              inverted, link, ordered, relaxed, selection, size, tag, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}