import React from 'react';
import classNames from 'classnames';

export class Label extends React.Component {
    static defaultProps = {
        corner: false,
        defaultClasses: true,
        pointing: false,
        ribbon: false
    };

    static propTypes = {
        arrow: React.PropTypes.bool,
        attached: React.PropTypes.string,
        basic: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        corner: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        defaultClasses: React.PropTypes.bool,
        image: React.PropTypes.bool,
        left: React.PropTypes.bool,
        pointing: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        ribbon: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        right: React.PropTypes.bool,
        size: React.PropTypes.string
    };

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
            basic: this.props.basic,

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

        return classes;
    }
}