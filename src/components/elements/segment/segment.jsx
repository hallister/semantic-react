import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

const validProps = {
    aligned: ['right', 'left', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

export default class Segment extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A segment can have its text aligned to a side
         */
        aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
        /**
         * A segment can be attached to other content on a page
         */
        attached: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['bottom', 'top']),
            React.PropTypes.bool
        ]),
        /**
         * A basic segment has no special formatting
         */
        basic: React.PropTypes.bool,
        /**
         * Blurring segment when used with dimmer
         */
        blurring: React.PropTypes.bool,
        /**
         * A segment can clear floated content
         */
        clearing: React.PropTypes.bool,
        /**
         * A segment can be colored
         */
        color: React.PropTypes.string,
        /**
         * Container segment
         */
        container: React.PropTypes.bool,
        /**
         * A segment may show its content is disabled
         */
        disabled: React.PropTypes.bool,
        /**
         * A segment can be formatted to appear more or less noticeable
         */
        emphasis: React.PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
        /**
         * A segment can appear to the left or right of other content
         */
        floated: React.PropTypes.oneOf(['right', 'left']),
        /**
         * A segment can have its colors inverted for contrast
         */
        inverted: React.PropTypes.bool,
        /**
         * A segment may show its content is being loaded
         */
        loading: React.PropTypes.bool,
        /**
         * Segment spacing
         */
        spacing: React.PropTypes.oneOf(['fitted', 'padded']),
        /**
         * Segment type
         */
        type: React.PropTypes.oneOf(['raised', 'stacked', 'piled']),
        /**
         * A vertical segment formats content to be aligned as part of a vertical group
         */
        vertical: React.PropTypes.bool,
        /**
         * Segment zIndex
         */
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
        let { component, defaultClasses, children, aligned, attached, basic, blurring,
              className, clearing, color, disabled, container, spacing,
              emphasis, floated,  inverted, loading, vertical, type,
              zIndex, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.getStyle();

        const Component = component;
        return (
            <Component {...other}>
                {children}
            </Component>
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
