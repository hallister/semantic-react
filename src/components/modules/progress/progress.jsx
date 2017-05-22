import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';
import Bar from './bar';
import DefaultProps from '../../defaultProps';

let validProps = {
    attached: ['top', 'bottom']
};

export default class Progress extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        active: PropTypes.bool,
        attached: PropTypes.oneOf(['top', 'bottom']),
        color: PropTypes.string,
        disabled: PropTypes.bool,
        duration: PropTypes.number,
        error: PropTypes.bool,
        indicating: PropTypes.bool,
        inverted: PropTypes.bool,
        progress: PropTypes.number,
        size: PropTypes.string,
        success: PropTypes.bool,
        warning: PropTypes.bool
    };

    static childContextTypes = {
        isProgressChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        duration: 300
    };

    /* eslint-disable */
    static Components = {
        Bar: Bar
    };
    /* eslint-enable */

    getChildContext() {
        return {
            isProgressChild: true
        };
    }

    renderBar() {
        /* eslint-disable no-use-before-define */
        let { active, attached, children, color, component, defaultClasses,
              disabled, error, indicating, inverted, size, success,
              warning, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        other.progress = this.getProgress(other.progress);

        return (
            <Progress.Components.Bar
                key="progressBar"
                {...other} />
        );
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { active, attached, children, color, component, defaultClasses,
              disabled, duration, error, indicating, inverted, size, success,
              warning, progress, ...other } = this.props;
        /* eslint-enable no-use-before-define */

              // add classnames
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            [
                this.renderBar(),
                this.props.children
            ]

        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // position based props
            attached: this.props.attached,

            // types

            // states
            active: this.props.active,
            disabled: this.props.disabled,
            error: this.props.error,
            success: this.props.success,
            warning: this.props.warning,

            // variations
            indicating: this.props.indicating,
            inverted: this.props.inverted,

            // component
            progress: this.props.defaultClasses
        };

        // string types
        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }

    getProgress(progress) {
        if (progress > 100) {
            return 100;
        } else if (progress < 0) {
            return 0;
        } else {
            return progress;
        }
    }
}
