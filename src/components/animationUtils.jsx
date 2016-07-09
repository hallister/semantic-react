import React from 'react';
import { spring } from 'react-motion';

/**
 * Need component to pass into react-docgen
 */
const AnimationProps = () => null;

AnimationProps.propTypes = {
    /**
     * Initial style object. Accepts object map with keys and numbers as values.
     * These values will be initial values where animation starts
     * For example:
     * {
         *   scale: 0.7,
         *   opacity: 0
         * }
     */
    initialAnimation: React.PropTypes.object,

    /**
     * Start animation. Accepts false or animation map.
     * When given false when animation would be disabled
     * Accepts animation map of one of following formats:
     * {
         *   scale: 1 // animate to 1 from initial values with default stiffness, damping, precision
         * }
     * {
         *   scale: { val: 1, stiffness: 500, damping: 40, precision: 2 } // animate to 1 with custom configuration
         * }
     */
    enterAnimation: React.PropTypes.oneOf([
        React.PropTypes.object,
        React.PropTypes.bool
    ]),
    /**
     * Leave animation. Accepts false or animation map.
     * When given false when animation would be disabled
     * Accepts animation map of one of following formats:
     * {
         *   scale: 1 // animate to 1 from initial values with default stiffness, damping, precision
         * }
     * {
         *   scale: { val: 1, stiffness: 500, damping: 40, precision: 2 } // animate to 1 with custom configuration
         * }
     */
    leaveAnimation: React.PropTypes.oneOf([
        React.PropTypes.object,
        React.PropTypes.bool
    ]),
    /**
     * Called internally to produce valid css style for element. Will receive interpolated style object and element dimensions and active flag
     * You can use it to make custom animations for elements
     */
    onAnimationStyle: React.PropTypes.func,
}

/**
 * Returns animation style for Motion
 * @param initialAnimation Initial animation configuration
 * @param enterAnimation Enter animation configuration
 * @param leaveAnimation Leave animation configuration
 * @param active True if we're entering, false if we're leaving
 */
export function getMotionStyle(initialAnimation, enterAnimation, leaveAnimation, active) {
    if (active) {
        // Start animation is disabled, return initialAnimation
        // enterAnimation=true will also disable it
        if (typeof enterAnimation === "boolean") {
            return initialAnimation;
        } else {
            const animationStyle = {};
            Object.keys(enterAnimation).forEach(key => {
                animationStyle[key] = (typeof enterAnimation[key] === "number") ? spring(enterAnimation[key]) : enterAnimation[key];
            });
            return animationStyle;
        }
    } else {
        // Leave animation is disabled
        if (typeof leaveAnimation === "boolean") {
            // Hide object immediately
            return {
                opacity: 0
            };
        } else {
            const animationStyle = {};
            Object.keys(leaveAnimation).forEach(key => {
                animationStyle[key] = (typeof leaveAnimation[key] === "number") ? spring(leaveAnimation[key]) : leaveAnimation[key];
            });
            return animationStyle;
        }
    }
}

// re-export spring for convenient
export { spring };

export default AnimationProps;
