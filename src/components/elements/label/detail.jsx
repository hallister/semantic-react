import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

@Radium
export default class Detail extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        let Component = this.props.onClick ? 'a' : 'div';
        /* eslint-disable no-use-before-define */
        let { defaultClasses, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component || Component,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            // default
            detail: this.props.defaultClasses
        };
    }
}
