import React from 'react';

const AnimationProps = () => null;

AnimationProps.propTypes = {
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
};

AnimationProps.defaultProps = {
    enterDuration: 500,
    leaveDuration: 500,
};

export default AnimationProps;
