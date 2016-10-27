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
        enterDuration: React.PropTypes.number,
        leaveDuration: React.PropTypes.number,
        enter: React.PropTypes.string,
        leave: React.PropTypes.string
    };

    static defaultProps = {
        enterDuration: 500,
        leaveDuration: 500
    };

    render() {
        const { enterDuration, leaveDuration, enter, leave, ...other } = this.props;
        return (
            <ReactTransitionGroup
                {...other}
                component={FirstChild}
                childFactory={this.wrapChildren}/>
        );
    }

    wrapChildren = (child) => {
        const { enterDuration, leaveDuration, enter, leave } = this.props;
        return (
            <SemanticCSSTransitionChildren
                enterDuration={enterDuration}
                leaveDuration={leaveDuration}
                enter={enter}
                leave={leave}
            >
                {child}
            </SemanticCSSTransitionChildren>
        );
    }
}
