import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';

export default class Form extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        equalWidth: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        size: React.PropTypes.string,
        state: React.PropTypes.oneOf([
            'success',
            'error',
            'warning'
        ])
    };

    static defaultProps = {
        component: 'form',
        defaultClasses: true
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            loading: this.props.loading,

            error: this.props.state === 'error',
            success: this.props.state === 'success',
            warning: this.props.state === 'warning',

            inverted: this.props.inverted,

            form: this.props.defaultClasses
        };

        if (this.props.equalWidth) {
            classes['equal width'] = true;
        }

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
