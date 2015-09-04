import React, { Component } from 'react';
import { Icon } from '../../elements';
import { hasChild, returnTag } from '../../utilities';
import classNames from 'classnames';

// TODO: image and horizontal list examples

export class Header extends Component {
    static propTypes = {
        aligned: React.PropTypes.string,
        attached: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        block: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        divider: React.PropTypes.bool,
        dividing: React.PropTypes.bool,
        element: React.PropTypes.string,
        floated: React.PropTypes.string,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,             
        size: React.PropTypes.string,
        tag: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.func,
            React.PropTypes.string
        ])
    };

    // we don't want the ui in these circumstances
    static contextTypes = {
        isListChild: React.PropTypes.bool,
        isHeaderChild: React.PropTypes.bool,
        isAccordionChild: React.PropTypes.bool
    };

    // any header/subheader under a header is a subheader
    static childContextTypes = {
        isHeaderChild: React.PropTypes.bool
    };

    static defaultProps = {
        attached: false,
        defaultClasses: true
    };

    getChildContext() {
        return {
            isHeaderChild: true
        };
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses  && !this.context.isListChild && !this.context.isHeaderChild,

            // positioning
            right: false,
            left: false,

            // types
            icon: hasChild(this.props.children, Icon) && this.props.aligned == 'center',

            // states
            disabled: this.props.disabled,

            // variations
            aligned: this.props.aligned && this.props.aligned !== 'justified',
            attached: this.props.attached,
            block: this.props.block,
            divider: this.props.divider,
            dividing: this.props.dividing,
            floated: this.props.floated,
            horizontal: this.props.horizontal,
            inverted: this.props.inverted,

            // component
            header: this.props.defaultClasses
        };

        // handle all mixed string/bool props
        classes[this.props.attached] = typeof this.props.attached == 'string' ? true : false;
       
        // string types
        classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.floated] = !!this.props.floated;
        classes[this.props.size] = !!this.props.size;

        // if it's attached or animated use a div instead of a button, allow tag overriding
        let Tag = this.props.onClick ? React.DOM.a : React.DOM.div;
        Tag = returnTag(this.props.tag || Tag);

        let { aligned, attached, block, children, className, color, defaultClasses, 
              disabled, divider, dividing, element, floated, horizontal, inverted, 
              size, tag, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}