import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Just a flag
 */
let Flag = (props) => {
    const { component, defaultClasses, name, ...other } = props;
    other.className = classNames(other.className, { flag: defaultClasses }, name);
    
    let Component = component;
    
    return (<Component {...other}/>);
};

Flag.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * The country code, name or alias of the flag
     */
    name: React.PropTypes.string.isRequired
};

Flag.defaultProps = {
    ...DefaultProps.defaultProps,
    component: 'i'
};

export default Flag;
