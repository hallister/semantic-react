import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Divider
 */
export default class Divider extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Content segment vertically or horizontally
         */
        aligned: React.PropTypes.oneOf(['horizontal', 'vertical']),
        /**
         * A divider can clear the contents above it
         */
        clearing: React.PropTypes.bool,
        /**
         * Formats divider as header-like (taking less space and don't capitalize content)
         */
        header: React.PropTypes.bool,
        /**
         * A hidden divider divides content without creating a dividing line
         */
        hidden: React.PropTypes.bool,
        /**
         * A divider can have its colors inverted
         */
        inverted: React.PropTypes.bool,
        /**
         * Divider spacing
         */
        spacing: React.PropTypes.oneOf(['fitted', 'padded'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
