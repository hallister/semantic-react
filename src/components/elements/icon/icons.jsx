import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    flipped: ['horizontally', 'vertically'],
    rotated: ['clockwise', 'counterclockwise']
};

export class Icons extends React.Component {
    static propTypes = {
        bordered: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        flipped: React.PropTypes.oneOf(validProps.flipped),
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        rotated: React.PropTypes.oneOf(validProps.rotated),
        size: React.PropTypes.string
    };

    static defaultProps = {
        defaultClasses: true,
        component: 'i'
    };

    render() {
        let { children, className, component, size, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default

            // variations
            bordered: this.props.bordered,
            circular: this.props.circular,
            disabled: this.props.disabled,
            fitted: this.props.fitted,
            link: this.props.link || this.props.onClick,
            inverted: this.props.inverted,
            loading: this.props.loading,

            // flipped variation
            flipped: this.props.flipped,
            rotated: this.props.flipped,

            // component
            icons: this.props.defaultClasses
        };

        // props are undefined if not explicitly given a value
        classes[this.props.size] = !!this.props.size;
        classes[this.props.color] = !!this.props.color;

        return validateClassProps(classes, this.props, validProps);
    }

}