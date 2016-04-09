import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Label detail element
 */
let Detail = (props) => {
    const { component, children, defaultClasses, ...other } = props;
    let Component = component;
    other.className = classNames(other.className, { detail: defaultClasses });
    return (<Component {...other}>{children}</Component>);
};

Detail.propTypes = {
    ...DefaultProps.propTypes
};

Detail.defaultProps = {
    ...DefaultProps.defaultProps
};

export default Detail;
