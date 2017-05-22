import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Segments extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Compact segments
         */
        compact: PropTypes.bool,
        /**
         * Horizontal segments
         */
        horizontal: PropTypes.bool,
        /**
         * Inverted segments
         */
        inverted: PropTypes.bool,
        /**
         * Type of segments
         */
        type: PropTypes.oneOf(['raised', 'stacked', 'piled'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { component, children, className, compact, defaultClasses, horizontal, inverted,
              type, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,
            segments: this.props.defaultClasses,
            horizontal: this.props.horizontal,
            raised: this.props.raised || this.props.type === 'raised',
            stacked: this.props.stacked || this.props.type === 'stacked',
            piled: this.props.piled || this.props.type === 'piled',
            compact: this.props.compact,
            inverted: this.props.inverted
        };
    }
}
