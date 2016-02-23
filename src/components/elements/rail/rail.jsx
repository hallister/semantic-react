import React from 'react';
import classNames from 'classnames';

export default class Rail extends React.Component {
    static propTypes = {
        attached: React.PropTypes.bool,
        children: React.PropTypes.any,
        className: React.PropTypes.node,
        close: React.PropTypes.bool,
        closer: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        dividing: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(['right', 'left']).isRequired,
        internal: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        close: false,
        defaultClasses: true
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { attached, children, className, close, defaultClasses,
              dividing, floated, internal, ...other } = this.props;
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
            ui: this.props.defaultClasses,

            right: this.props.floated === 'right',
            left: this.props.floated === 'left',

            // types
            attached: this.props.attached,
            very: this.props.closer,
            close: this.props.close || this.props.closer,
            dividing: this.props.dividing,
            internal: this.props.internal,

            // component
            rail: this.props.defaultClasses
        };
    }
}
