import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import AnimationProps from './animationProps'

/**
 * Transition children class. Pretty much copy of ReactCSSTransitionGroupChild
 * Differences:
 * 1) There is no appear animation
 * 2) Supports multiple class names in 'enter' and 'leave', so can pass 'fade in' and 'fade out'
 * 3) Automatically adds 'transition visible' and 'transition hidden / 'animating' classes
 */
export default class SemanticCSSTransitionChildren extends React.Component {
    static propTypes = {
        ...AnimationProps.propTypes,
        /**
         * Enter callback
         */
        onEnter: PropTypes.func,
        /**
         * Leave callback
         */
        onLeave: PropTypes.func,
        /**
         * Run animation on component mounting (transition component)
         * It's necessary for portal components
         */
        runOnMount: PropTypes.bool
    };

    static defaultProps = {
        ...AnimationProps.defaultProps,
        onEnter: () => {},
        onLeave: () => {},
        runOnMount: false
    };

    constructor(props) {
        super(props);
        this.transitionTimeouts = [];
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        this.transitionTimeouts.forEach(timeout => {
            clearTimeout(timeout);
        });
    }

    render() {
        return React.Children.only(this.props.children);
    }

    componentWillAppear = (done) => {
        const { runOnMount } = this.props;
        if (runOnMount) {
            this.componentWillEnter(done);
        } else {
            done();
        }
    };

    componentDidAppear = () => {
        const { runOnMount, onEnter } = this.props;
        if (runOnMount) {
            onEnter();
        }
    };

    componentWillEnter = (done) => {
        const { enter } = this.props;
        if (typeof enter === 'string') {
            this.enterTransition(done);
        } else {
            done();
        }
    };

    componentDidEnter = () => {
        this.props.onEnter();
    };


    componentWillLeave = (done) => {
        const { leave } = this.props;
        if (typeof leave === 'string') {
            this.leaveTransition(done);
        } else {
            done();
        }
    };

    componentDidLeave = () => {
        this.props.onLeave();
    };

    enterTransition = (done) => {
        const element = ReactDOM.findDOMNode(this);
        const { enter, enterDuration } = this.props;
        if (!element) {
            done();
            return;
        }

        if (!element.classList.contains('transition')) {
            element.classList.add('transition');
        }
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
        }
        if (!element.classList.contains('visible')) {
            element.classList.add('visible');
        }

        // bail if we don't have duration
        if (!enterDuration) {
            done();
            return;
        }
        element.classList.add('animating');
        element.style.animationDuration = `${enterDuration}ms`;


        // Add transition classes
        const enterClassNames = enter.split(' ');
        for (const name of enterClassNames) {
            element.classList.add(name);
        }

        let timeout = null;
        const endListener = () => {
            clearTimeout(timeout);

            element.classList.remove('animating');
            element.style.animationDuration = '';

            for (const name of enterClassNames) {
                element.classList.remove(name);
            }

            done();
        };

        // Clean-up the animation after the specified delay
        timeout = setTimeout(endListener, enterDuration);
        this.transitionTimeouts.push(timeout);
    };

    leaveTransition = (done) => {
        const element = ReactDOM.findDOMNode(this);
        const { leave, leaveDuration } = this.props;
        if (!element) {
            done();
            return;
        }

        // bail if we don't have duration
        if (!leaveDuration) {
            done();
            return;
        }

        element.classList.add('animating');
        element.style.animationDuration = `${leaveDuration}ms`;

        // Add transition classes
        const leaveClassNames = leave.split(' ');
        for (const name of leaveClassNames) {
            element.classList.add(name);
        }

        let timeout = null;
        const endListener = () => {
            clearTimeout(timeout);

            element.classList.remove('animating');
            element.style.animationDuration = '';

            for (const name of leaveClassNames) {
                element.classList.remove(name);
            }

            done();
        };

        // Clean-up the animation after the specified delay
        timeout = setTimeout(endListener, leaveDuration);
        this.transitionTimeouts.push(timeout);
    }
}

