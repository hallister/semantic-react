import React from 'react';
import classNames from 'classnames';
import { Bar } from '../../modules';
import { validateClassProps } from '../../utilities';

let validProps = {
    attached: ['top', 'bottom']
};

export class Progress extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        animation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        attached: React.PropTypes.oneOf(validProps),
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        duration: React.PropTypes.number,
        error: React.PropTypes.bool,
        indicating: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        progress: React.PropTypes.number,
        size: React.PropTypes.string,
        success: React.PropTypes.bool,
        warning: React.PropTypes.bool
    };

    static childContextTypes = {
        isProgressChild: React.PropTypes.bool
    };

    static defaultProps = {
        animation: {
            duration: 300,
            ease: 'in-ease',
            from: {
                opacity: 0,
                width: {
                    units: '%'
                }
            },
            to: {
                opacity: 1,
                width: {
                    units: '%'
                }
            }
        },
        component: 'div',
        defaultClasses: true
    };

    constructor(props) {
        super(props);
        this.animate = false;
        this.animation = this.props.animation;
        this.animation.from.width.value = this.animation.to.width.value = this.getProgress(this.props.progress);
    }

    getChildContext() {
        return {
            isProgressChild: true
        };
    }

    componentWillReceiveProps(props) {
        if (props.progress !== this.props.progress) {
            this.animate = true;
            this.animation.from.width.value = this.getProgress(this.props.progress);
            this.animation.to.width.value = this.getProgress(props.progress);
        }
    }

    onAnimationComplete() {
        this.animate = false;
    }

    renderBar() {
        let { active, attached, children, color, component, defaultClasses,
              disabled, error, indicating, inverted, size, success,
              warning, ...other } = this.props;
        other.progress = this.getProgress(other.progress);

        return (
            <Bar
                {...other}
                animate={this.animate}
                key="pBarBar"
                onComplete={this.onAnimationComplete.bind(this)}
                start={this.animation}
            />
        );
    }

    render() {
        let { active, attached, children, color, component, defaultClasses,
              disabled, duration, error, indicating, inverted, size, success,
              warning, progress, ...other } = this.props;

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
