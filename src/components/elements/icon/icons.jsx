import React from 'react';
import classNames from 'classnames';

export class Icons extends React.Component {
    static defaultProps = {
        defaultClasses: true,
        component: 'i'
    };

    static propTypes = {
        aligned: React.PropTypes.string,
        bordered: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        disabled: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        flipped: React.PropTypes.string,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        rotated: React.PropTypes.string,
        size: React.PropTypes.string
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
            icons: this.props.defaultClasses
        };

        // props are undefined if not explicitly given a value
        classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.flipped] = !!this.props.flipped;
        classes[this.props.rotated] = !!this.props.rotated;

        return classes;
    }

}