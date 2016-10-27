import React from 'react';
import ReactTransitionGroup from 'react/lib/ReactTransitionGroup';
import SemanticCSSTransitionChildren from './animationChildren';

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

/**
 * Animation component using semantic-ui CSS transitions
 */
export default class SemanticCSSTransition extends React.Component {
    static propTypes = {
        /**
         * Enter animation duration
         */
        enterDuration: React.PropTypes.number,
        /**
         * Leave animation duration
         */
        leaveDuration: React.PropTypes.number,
        /**
         * Enter animation name
         */
        enter: React.PropTypes.string,
        /**
         * Leave animation name
         */
        leave: React.PropTypes.string,
        /**
         * Enter callback
         */
        onEnter: React.PropTypes.func,
        /**
         * Leave callback
         */
        onLeave: React.PropTypes.func,
        /**
         * Run animation on component mounting (transition component)
         * It's necessary for portal components
         */
        runOnMount: React.PropTypes.bool
    };

    static defaultProps = {
        enterDuration: 500,
        leaveDuration: 500,
        runOnMount: false,
        onEnter: () => {},
        onLeave: () => {}
    };

    render() {
        const { enterDuration, leaveDuration, enter, leave, onEnter, onLeave, runOnMount, ...other } = this.props;
        return (
            <ReactTransitionGroup
                {...other}
                component={FirstChild}
                childFactory={this.wrapChildren}/>
        );
    }

    wrapChildren = (child) => {
        const { enterDuration, leaveDuration, enter, leave, onEnter, onLeave, runOnMount } = this.props;
        return (
            <SemanticCSSTransitionChildren
                enterDuration={enterDuration}
                leaveDuration={leaveDuration}
                enter={enter}
                leave={leave}
                onEnter={onEnter}
                onLeave={onLeave}
                runOnMount={runOnMount}
            >
                {child}
            </SemanticCSSTransitionChildren>
        );
    }
}
