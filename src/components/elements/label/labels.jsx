import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,
        labels: props.defaultClasses,
        circular: props.circular,
        tag: props.tag
    };
    
    classes[props.color] = !!props.color;
    classes[props.size] = !!props.size;
    return classes;
}

/**
 * Group of labels which can share same size, shape or color
 */
let Labels = (props) => {
    const { 
        component, children, defaultClasses, circular, color, tag, size, ...other
    } = props;
    
    let Component = component;
    other.className = classNames(other.className, getClasses(props));
    return (<Component {...other}>{children}</Component>);
};

Labels.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Labels can share shapes 
     */
    circular: React.PropTypes.bool,
    /**
     * Labels can share colors together
     */
    color: React.PropTypes.string,
    /**
     * Labels can share tag formatting
     */
    tag: React.PropTypes.bool,
    /**
     * Labels can share sizes together
     */
    size: React.PropTypes.string
};

Labels.defaultProps = {
    ...DefaultProps.defaultProps
};

export default Labels;

