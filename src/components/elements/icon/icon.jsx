import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    flipped: ['horizontally', 'vertically'],
    rotated: ['clockwise', 'counterclockwise']
};

export class Icon extends React.Component {
    static propTypes = {
        bordered: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        corner: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        flipped: React.PropTypes.oneOf(validProps.flipped),
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func,
        rotated: React.PropTypes.oneOf(validProps.rotated),
        size: React.PropTypes.string
    };

    static defaultProps = {
        component: 'i',
        defaultClasses: true
    };

    render() {
        let { bordered, circular, color, component, corner, defaultClasses,
              disabled, fitted, flipped, inverted, link, loading, name, rotated,
              size, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other
        );
    }

    getClasses() {
        let classes = {
            // default

            // variations
            bordered: this.props.bordered,
            circular: this.props.circular,
            corner: this.props.corner,
            disabled: this.props.disabled,
            fitted: this.props.fitted,
            link: this.props.link || this.props.onClick,
            inverted: this.props.inverted,
            loading: this.props.loading,

            // component
            icon: this.props.defaultClasses
        };

        // handle all string or mixed string/bool props

        // classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.name] = !!this.props.name;

        return validateClassProps(classes, this.props, validProps);
    }

}
