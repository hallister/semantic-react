import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['right', 'left', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

export class Segment extends React.Component {
    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        attached: false,
        style: {}
    };

    static propTypes = {
        aligned: React.PropTypes.oneOf(validProps.aligned),
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(validProps.attached),
            React.PropTypes.bool
        ]),
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        clearing: React.PropTypes.bool,
        color: React.PropTypes.string,
        compact: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(validProps.floated),
        index: React.PropTypes.number,
        inverted: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        padded: React.PropTypes.bool,
        piled: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        raised: React.PropTypes.bool,
        secondary: React.PropTypes.bool,
        stacked: React.PropTypes.bool,
        style: React.PropTypes.object,
        tertiary: React.PropTypes.bool,
        vertical: React.PropTypes.bool,
        zIndex: React.PropTypes.number
    };

    render() {
        let { aligned, attached, basic, children, className, clearing, color, compact, 
              defaultClasses, disabled, floated, index, inverted, loading, padded, piled, 
              primary, raised, secondary, stacked, tertiary, vertical, zIndex, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.getStyle();

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning
            right: false,
            left: false,
            center: false,
            top: false,
            bottom: false,

            // types
            raised: this.props.raised,
            stacked: this.props.stacked,
            piled: this.props.piled,
            vertical: this.props.vertical,

            // states
            disabled: this.props.disabled,
            loading: this.props.loading,

            // varigations
            aligned: this.props.aligned,
            attached: this.props.attached,
            basic: this.props.basic,
            clearing: this.props.clearing,
            compact: this.props.compact,
            container: this.props.container,
            floated: this.props.floated,
            inverted: this.props.inverted,
            padded: this.props.padded,
            primary: this.props.primary,
            secondary: this.props.secondary,
            tertiary: this.props.tertiary,

            // component
            segment: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;

        return validateClassProps(classes, this.props, validProps);
    }

    getStyle() {
        let style = this.props.style;

        if (this.props.piled && !style.zIndex) {
            style.zIndex = this.props.zIndex || 0;
        }

        return style;
    }
}