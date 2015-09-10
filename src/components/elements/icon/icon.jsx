import React from 'react';
import classNames from 'classnames';

export class Icon extends React.Component {
    static defaultProps = {
        component: 'i',
        defaultClasses: true
    };

    static propTypes = {
        aligned: React.PropTypes.string,
        bordered: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        color: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        corner: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        flipped: React.PropTypes.string,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        name: React.PropTypes.string.isRequired,
        rotated: React.PropTypes.string,
        size: React.PropTypes.string
    };

    render() {
        let { aligned, bordered, circular, color, component, corner, disabled, fitted, flipped, inverted, link, 
              loading, name, rotated, size, ...other } = this.props;

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

            // flipped variation
            horizontally: false,
            vertically: false,
            flipped: this.props.flipped,

            // rotated variation
            clockwise: false,
            counterclockwise: false,
            rotated: this.props.flipped,

            // aligned variation
            bottom: false,
            top: false,
            middle: false,
            aligned: this.props.aligned,         

            // component
            icon: this.props.defaultClasses
        };

        // handle all string or mixed string/bool props

        classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.flipped] = !!this.props.flipped;
        classes[this.props.rotated] = !!this.props.flipped;
        classes[this.props.name] = !!this.props.name;

        return classes;
    }

}