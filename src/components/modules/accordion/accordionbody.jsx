import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import DefaultProps from '../../defaultProps';
import { getMotionStyle, valueFromPercents } from '../../animationUtils';

/**
 * Accordion body (content)
 */
export default class AccordionBody extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * True to animate. This is being set by Accordion itself
         */
        animating: React.PropTypes.bool,
        /**
         * True for active (visible) accordion section. This is being set by Accordion itself
         */
        active: React.PropTypes.bool,
        /**
         * True for styled accordion. This is being set by Accordion itself
         */
        styled: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        animating: true,
        active: false,
        styled: false
    };

    constructor(props) {
        super(props);

        this.state = {
            height: 1,
            closing: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.state.active) {
            if (!nextProps.active) {
                this.setState({
                    closing: true
                });
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    /**
     * Dimensions was changed
     * @param dimensions
     */
    onMeasure = (dimensions) => {
        if (dimensions && dimensions.height && dimensions.height !== this.state.height) {
            this.setState({
                height: dimensions.height
            });
        }
    }

    onAnimationRest = () => {
        this.setState({ closing: false });
    }

    /**
     * Return animation style
     * @param interpolatedStyle
     * @returns {{paddingTop: string, paddingBottom: string, height: number}}
     */
    getAnimationStyle(interpolatedStyle) {
        return {
            paddingTop: `${interpolatedStyle.paddingTop}em`,
            paddingBottom: `${interpolatedStyle.paddingBottom}em`,
            height: interpolatedStyle.height
        };
    }

    render() {
        const {
            animating, component, children, defaultClasses, active, style, styled, ...other
        } = this.props;
        const Component = component;
        other.className = classNames(other.className, {
            content: defaultClasses,
            active: active
        });

        const initialStyle = style ? { ...style, overflow: 'hidden' } : { overflow: 'hidden' };

        let motionStyle;
        if (active) {
            motionStyle = {
                height: spring(this.state.height),
                paddingTop: spring(0.5),
                paddingBottom: styled ? spring(1.5) : spring(1)
            };
        } else {
            motionStyle = {
                height: spring(0),
                paddingTop: spring(0),
                paddingBottom: spring(0)
            };
        }

        if (!animating) {
            return (
                <Component {...other}>
                    {children}
                </Component>
            );
        }

        return (
            <Motion defaultStyle={this.initialAnimation}
                    style={motionStyle}
                    onRest={this.onAnimationRest}
            >
                {interpolatedStyle => {
                    const animationStyle = this.getAnimationStyle(interpolatedStyle);
                    const visibleStyle = active ? { display: 'block' } :
                        this.state.closing ? { display: 'block' } : { display: 'none' };
                    return (
                        <Measure accurate
                                 whitelist={['height']}
                                 onMeasure={this.onMeasure}
                        >
                            <Component {...other}
                                       style={{ ...initialStyle, ...visibleStyle, ...animationStyle }}
                            >
                                {children}
                            </Component>
                        </Measure>
                    );
                }}
            </Motion>
        );
    }
}
