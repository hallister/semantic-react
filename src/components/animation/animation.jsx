import React from 'react';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';
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
        ...SemanticCSSTransitionChildren.propTypes
    };

    static defaultProps = {
        ...SemanticCSSTransitionChildren.defaultProps
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
