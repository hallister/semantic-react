import React from 'react';
import classNames from 'classnames';

export default class Description extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        hidden: React.PropTypes.bool,
        visible: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { defaultClasses, component, visible, hidden, ...other } = this.props;
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
            // default
            description: this.props.defaultClasses,

            // animation
            visible: this.props.visible,
            hidden: this.props.hidden
        };
    }
}
