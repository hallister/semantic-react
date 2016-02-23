import React from 'react';
import classNames from 'classnames';

export class Items extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        divided: React.PropTypes.bool,
        link: React.PropTypes.bool,
        relaxed: React.PropTypes.relaxed
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, divided,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning

            // types
            divided: this.props.divided,
            relaxed: this.props.relaxed,
            link: this.props.link,

            // content

            // variations

            // component
            items: this.props.defaultClasses
        };

        return classes;
    }
}
