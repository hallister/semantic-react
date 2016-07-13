import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Segments extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Compact segments
         */
        compact: React.PropTypes.bool,
        /**
         * Horizontal segments
         */
        horizontal: React.PropTypes.bool,
        /**
         * Inverted segments
         */
        inverted: React.PropTypes.bool,
        /**
         * Piled segments
         */
        piled: React.PropTypes.bool,
        /**
         * Raised segments
         */
        raised: React.PropTypes.bool,
        /**
         * Stacked segments
         */
        stacked: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, children, className, compact, defaultClasses, horizontal, inverted,
              piled, raised, stacked, ...other } = this.props;
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
            raised: this.props.raised,
            stacked: this.props.stacked,
            piled: this.props.piled,
            compact: this.props.compact,
            inverted: this.props.inverted
        };
    }
}
