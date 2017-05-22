import React from 'react';
import PropTypes from 'prop-types';

const AnimationProps = () => <noscript/>;

AnimationProps.propTypes = {
    /**
     * Enter animation duration
     */
    enterDuration: PropTypes.number,
    /**
     * Leave animation duration
     */
    leaveDuration: PropTypes.number,
    /**
     * Enter animation name
     */
    enter: PropTypes.string,
    /**
     * Leave animation name
     */
    leave: PropTypes.string
};

AnimationProps.defaultProps = {
    enterDuration: 500,
    leaveDuration: 500
};

export default AnimationProps;
