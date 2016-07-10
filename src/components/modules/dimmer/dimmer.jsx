import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import classNames from 'classnames';
import { hasChild } from '../../utilities';
import DefaultProps from '../../defaultProps';
import AnimationProps, { getMotionStyle } from '../../animationUtils';
import Content from './../../elements/simple/content';
import Loader from './../../elements/loader/loader';

export default class Dimmer extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        ...AnimationProps.propTypes,
        /**
         * Hide/Display dimmer
         */
        active: React.PropTypes.bool,
        /**
         * Page dimmer. Doesn't require dimmable section
         */
        page: React.PropTypes.bool,
        /**
         * Inverted dimmer
         */
        inverted: React.PropTypes.bool,
        /**
         * Disables auto-wrapping child contents into <Content>
         */
        noWrapChildren: React.PropTypes.bool
    };

    
    // This forces <Content> to add a centered div below it.
    static childContextTypes = {
        isDimmerChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        active: false,
        initialAnimation: {
            opacity: 0.3
        },
        enterAnimation: {
            opacity: spring(1, { stiffness: 500, damping: 40, precision: 1})
        },
        leaveAnimation: {
            opacity: spring(0, { stiffness: 900, damping: 40, precision: 1})
        },
        page: false,
        inverted: false,
        noWrapChildren: false
    };

    /* eslint-disable */
    static Components = {
        Content: Content,
        Loader: Loader
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        this.state = {
            animating: false,
            dimmerHeight: 1,
            dimmerWidth: 1
        };

        this.dimmerActiveStyle = {
            display: 'block'
        };

        this.dimmerHiddenStyle = {
            display: 'none'
        };
    }

    getChildContext() {
        return {
            isDimmerChild: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            this.setState({ animating: true });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    /**
     * Modal dimensions was changed
     * @param dimensions
     */
    onDimmerMeasure = (dimensions) => {
        if (dimensions &&
            ((dimensions.height && dimensions.height !== this.state.dimmerHeight) ||
            (dimensions.width && dimensions.width !== this.state.dimmerWidth))) {
            this.setState({
                dimmerHeight: dimensions.height,
                dimmerWidth: dimensions.width
            });
        }
    }

    /**
     * Animation completed
     */
    onAnimationRest = () => {
        this.setState({ animating: false });
    };

    /**
     * Return animation style to apply
     * @param interpolatedStyle
     * @param dimensions
     */
    getAnimationStyle(interpolatedStyle, dimensions) {
        const { active, onAnimationStyle } = this.props;
        if (onAnimationStyle && typeof onAnimationStyle === "function") {
            return onAnimationStyle(interpolatedStyle, dimensions, active);
        }
        return {
            opacity: interpolatedStyle.opacity
        };
    }

    /**
     * Render dimmer children
     */
    renderChildren() {
        const { children, noWrapChildren } = this.props;
        if (noWrapChildren) {
            return children;
        } else {
            return (hasChild(children, Dimmer.Components.Loader)) ? children : <Dimmer.Components.Content>{children}</Dimmer.Components.Content>;
        }
    }

    /**
     * Render dimmer
     * @param interpolatedStyle
     * @returns {XML}
     */
    renderDimmer(interpolatedStyle) {
        const {
            active, children, component, defaultClasses, initialAnimation, enterAnimation, leaveAnimation,
            page, inverted, noWrapChildren, ...other
        } = this.props;

        const animatingStyle = this.getAnimationStyle(interpolatedStyle, { height: this.state.dimmerHeight, width: this.state.dimmerWidth });
        /* eslint-disable */
        // Apply additional styling for dimmer when visible/hidden
        const dimmerStyle = active ? this.dimmerActiveStyle :
            this.state.animating ? this.dimmerActiveStyle : this.dimmerHiddenStyle;
        /* eslint-enable */
        const Component = component;
        other.className = classNames(other.className, this.getClasses());
        // Final dimmer style
        const style = {...other.style, ...dimmerStyle, ...animatingStyle };
        return (
            <Measure accurate
                     whitelist={["height", "width"]}
                     onMeasure={this.onDimmerMeasure}
            >
                <Component {...other}
                           key="dimmer"
                           style={style}
                >
                    {this.renderChildren()}
                </Component>
            </Measure>
        );
    }
    
    render() {
        /* eslint-disable no-use-before-define */
        const { active, initialAnimation, enterAnimation, leaveAnimation } = this.props;
        /* eslint-enable no-use-before-define */

        const motionStyle = getMotionStyle(initialAnimation, enterAnimation, leaveAnimation, active);
        return (
            <Motion defaultStyle={initialAnimation}
                    style={motionStyle}
                    onRest={this.onAnimationRest}
            >
                {interpolatedStyle => this.renderDimmer(interpolatedStyle)}
            </Motion>
        );
    }
    
    getClasses() {
        return {
            ui: this.props.defaultClasses,
            dimmer: this.props.defaultClasses,
            active: this.props.active,
            page: this.props.page,
            inverted: this.props.inverted
        };
    }
}
