import React from 'react';
import { Header } from '../../elements';
import classNames from 'classnames';
import Radium from 'radium';

@Radium
export default class SubHeader extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            // can't set Header in default props as it comes back undefined
            this.props.component || Header,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            // default
            sub: this.props.defaultClasses
        };
    }
}
