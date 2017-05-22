import React from 'react';
import PropTypes from 'prop-types';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

const validProps = {
    aligned: ['right', 'left', 'center'],
    attached: ['bottom', 'top'],
    floated: ['right', 'left']
};

export default class Segment extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A segment can have its text aligned to a side
         */
        aligned: PropTypes.oneOf(['right', 'left', 'center']),
        /**
         * A segment can be attached to other content on a page
         */
        attached: PropTypes.oneOfType([
            PropTypes.oneOf(['bottom', 'top']),
            PropTypes.bool
        ]),
        /**
         * A basic segment has no special formatting
         */
        basic: PropTypes.bool,
        /**
         * Blurring segment when used with dimmer
         */
        blurring: PropTypes.bool,
        /**
         * A segment can clear floated content
         */
        clearing: PropTypes.bool,
        /**
         * A segment can be colored
         */
        color: PropTypes.string,
        /**
         * Container segment
         */
        container: PropTypes.bool,
        /**
         * A segment may show its content is disabled
         */
        disabled: PropTypes.bool,
        /**
         * A segment can be formatted to appear more or less noticeable
         */
        emphasis: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
        /**
         * A segment can appear to the left or right of other content
         */
        floated: PropTypes.oneOf(['right', 'left']),
        /**
         * A segment can have its colors inverted for contrast
         */
        inverted: PropTypes.bool,
        /**
         * A segment may show its content is being loaded
         */
        loading: PropTypes.bool,
        /**
         * Segment spacing
         */
        spacing: PropTypes.oneOf(['fitted', 'padded']),
        /**
         * Segment type
         */
        type: PropTypes.oneOf(['raised', 'stacked', 'piled']),
        /**
         * A vertical segment formats content to be aligned as part of a vertical group
         */
        vertical: PropTypes.bool,
        /**
         * Segment zIndex
         */
        zIndex: PropTypes.number
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        attached: false,
        style: {}
    };

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
