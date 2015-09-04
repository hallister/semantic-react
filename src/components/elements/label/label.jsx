import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import classNames from 'classnames';

export class Label extends Component {
    static defaultProps = {
        corner: false,
        defaultClasses: true,
        pointing: false,
        ribbon: false
    };

    static propTypes = {
        arrow: React.PropTypes.bool,
        attached: React.PropTypes.string,
        circular: React.PropTypes.bool,
        color: React.PropTypes.string,
        corner: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        defaultClasses: React.PropTypes.bool,
        image: React.PropTypes.bool,
        left: React.PropTypes.bool,
        link: React.PropTypes.bool,
        pointing: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        ribbon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        right: React.PropTypes.bool,
        size: React.PropTypes.string,
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

            // positioning
            left: false,
            right: false,

            // types
            attached: this.props.attached,
            corner: this.props.corner,
            image: this.props.image,
            pointing: this.props.pointing,
            ribbon: this.props.ribbon,
            tag: this.props.arrow,

            // variations
            circular: this.props.circular,

            // component 
            label: this.props.defaultClasses
        };

        // handle mixed string/bool props
        classes[this.props.corner] = typeof this.props.corner == 'string' ? true : false;
        classes[this.props.pointing] = typeof this.props.pointing == 'string' ? true : false;   
        classes[this.props.ribbon] = typeof this.props.ribbon == 'string' ? true : false;   

        classes[this.props.attached] = !!this.props.attached;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        // if it's attached or animated use a div instead of a button
        let Tag = this.props.onClick || this.props.link ? React.DOM.a : React.DOM.div;
        Tag = returnTag(this.props.tag || Tag);

        let { defaultClasses, left, right, corner, label, 
              attached, image, color, pointing, ribbon, tag, 
              link, circular, size, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            onClick: this.props.onClick,
            ...other
        }, this.props.children);
    }
}