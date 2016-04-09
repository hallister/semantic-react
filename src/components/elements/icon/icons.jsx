import React from 'react';
import Icon, { getClasses as getIconClasses } from './icon';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

function getClasses(props) {
    let classes = {
        icons: props.defaultClasses
    };
    classes[props.size] = !!props.size;
    return classes;
}

/**
 * Group of icons
 */
let Icons = (props) => {
    const {
        component, defaultClasses, children, size, ...other
    } = props;
    let Component = component;
    other.className = classNames(other.className, getClasses(props));
    return (<Component {...other}>{children}</Component>);
};

Icons.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Size of icon group
     */
    size: React.PropTypes.string
};

Icons.defaultProps = {
    ...DefaultProps.defaultProps,
    component: 'i'
};

export default Icons;
