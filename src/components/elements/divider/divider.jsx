import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Divider
 */
export default class Divider extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Content segment vertically or horizontally
         */
        aligned: PropTypes.oneOf(['horizontal', 'vertical']),
        /**
         * A divider can clear the contents above it
         */
        clearing: PropTypes.bool,
        /**
         * Formats divider as header-like (taking less space and don't capitalize content)
         */
        header: PropTypes.bool,
        /**
         * A hidden divider divides content without creating a dividing line
         */
        hidden: PropTypes.bool,
        /**
         * A divider can have its colors inverted
         */
        inverted: PropTypes.bool,
        /**
         * Divider spacing
         */
        spacing: PropTypes.oneOf(['fitted', 'padded'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        const { aligned, children, clearing, component, defaultClasses,
            header, hidden, inverted, spacing, ...other } = this.props;

        let Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (
            <Component {...other}>{children}</Component>
        );
    }

    getClasses() {
        return {
            // default
            ui: this.props.defaultClasses,

            // types
            header: this.props.header,
            horizontal: this.props.aligned === 'horizontal',
            vertical: this.props.aligned === 'vertical',

            // variations
            clearing: this.props.clearing,
            fitted: this.props.spacing === 'fitted',
            hidden: this.props.hidden,
            inverted: this.props.inverted,
            section: this.props.spacing === 'padded',

            // component
            divider: this.props.defaultClasses
        };
    }
}
