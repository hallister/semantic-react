import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Segments extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        compact: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        piled: React.PropTypes.bool,
        raised: React.PropTypes.bool,
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
        let { children, className, compact, defaultClasses, horizontal,
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
