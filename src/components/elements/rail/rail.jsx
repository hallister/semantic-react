import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Rail extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        attached: React.PropTypes.bool,
        close: React.PropTypes.bool,
        closer: React.PropTypes.bool,
        dividing: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(['right', 'left']).isRequired,
        internal: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        close: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
