import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

@Radium
export default class Segments extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        compact: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        piled: React.PropTypes.bool,
        raised: React.PropTypes.bool,
        stacked: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

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
