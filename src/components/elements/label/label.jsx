import React from 'react';
import { hasChild, validateClassProps } from '../../utilities';
import { Image } from '../../elements';
import classNames from 'classnames';

let validProps = {
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    corner: ['left', 'right'],
    pointing: ['below', 'left', 'right'],
    ribbon: ['right']
};

export class Label extends React.Component {
    static propTypes = {
        attached: React.PropTypes.oneOf(validProps.attached),
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        corner: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(validProps.corner),
            React.PropTypes.bool
        ]),
        defaultClasses: React.PropTypes.bool,
        floating: React.PropTypes.bool,
        image: React.PropTypes.bool,
        label: React.PropTypes.bool,
        left: React.PropTypes.bool,
        link: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        pointing: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(validProps.pointing),
            React.PropTypes.bool
        ]),
        ribbon: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(validProps.ribbon),
            React.PropTypes.bool
        ]),
        right: React.PropTypes.bool,
        size: React.PropTypes.string,
        tag: React.PropTypes.bool,
        uiClass: React.PropTypes.bool
    };

    static contextTypes = {
        isProgressChild: React.PropTypes.bool
    }

    // any header/subheader under a header is a subheader
    static childContextTypes = {
        isLabelChild: React.PropTypes.bool
    };

    static defaultProps = {
        corner: false,
        defaultClasses: true,
        pointing: false,
        ribbon: false,
        uiClass: true
    };

    getChildContext() {
        return {
            isLabelChild: true
        };
    }

    render() {
        // if it's attached or animated use a div instead of a button

        let Component = this.props.onClick ? 'a' : 'div';

        let { defaultClasses, left, right, corner, label, attached, image, color, pointing, ribbon, tag,
              link, circular, size, ...other } = this.props;

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
            ui: this.props.defaultClasses && this.props.uiClass && !this.context.isProgressChild,

            // types
            attached: this.props.attached,
            corner: this.props.corner,
            floating: this.props.floating,
            image: this.props.image || hasChild(this.props.children, Image),
            pointing: this.props.pointing,
            ribbon: this.props.ribbon,
            tag: this.props.tag,
            basic: this.props.basic,

            // variations
            circular: this.props.circular,

            // component
            label: this.props.defaultClasses
        };

        // handle mixed string/bool props
        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
