import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['right', 'left', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

export default class Segment extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['bottom', 'top']),
            React.PropTypes.bool
        ]),
        basic: React.PropTypes.bool,
        blurring: React.PropTypes.bool,
        clearing: React.PropTypes.bool,
        color: React.PropTypes.string,
        container: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        emphasis: React.PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
        floated: React.PropTypes.oneOf(['right', 'left']),
        index: React.PropTypes.number,
        inverted: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        spacing: React.PropTypes.oneOf(['fitted', 'padded']),
        style: React.PropTypes.object,
        type: React.PropTypes.oneOf(['raised', 'stacked', 'piled']),
        vertical: React.PropTypes.bool,
        zIndex: React.PropTypes.number
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        attached: false,
        style: {}
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { aligned, component, attached, basic, blurring, children,
              className, clearing, color, defaultClasses, disabled,
              emphasis, floated, index, inverted, loading, vertical,
              zIndex, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.getStyle();

        if (typeof this.props.component == 'function' && this.props.component.displayName == 'Segment') {
            component = 'div';
        } else {
            component = this.props.component;
        }

        return React.createElement(
            component,
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
            raised: this.props.type === 'raised',
            stacked: this.props.type === 'stacked',
            piled: this.props.type === 'piled',
            vertical: this.props.vertical,

            // states
            disabled: this.props.disabled,
            loading: this.props.loading,

            // variations
            aligned: this.props.aligned,
            attached: this.props.attached,
            basic: this.props.basic,
            blurring: this.props.blurring,
            clearing: this.props.clearing,
            compact: this.props.spacing === 'fitted',
            container: this.props.container,
            floated: this.props.floated,
            inverted: this.props.inverted,
            padded: this.props.spacing === 'padded',
            primary: this.props.emphasis === 'primary',
            secondary: this.props.emphasis === 'secondary',
            tertiary: this.props.emphasis === 'tertiary',

            // component
            segment: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;

        return validateClassProps(classes, this.props, validProps);
    }

    getStyle() {
        let style = this.props.style;

        if (this.props.type === 'piled' && !style.zIndex) {
            style.zIndex = this.props.zIndex || 0;
        }

        return style;
    }
}
