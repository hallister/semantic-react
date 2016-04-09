import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,
        images: props.defaultClasses
    };
    classes[props.size] = !!props.size;
    return classes;
}

/**
 * Group of images
 * @param props
 */
let Images = (props) => {
    const { component, children, defaultClasses, size, ...other } = props;
    const Component = component;
    other.className = classNames(other.className, getClasses(props));
    
    return (<Component {...other}>{children}</Component>);
};

// It does support only size and state, but omitting state here, since nobody wants row of disabled images?
Images.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Images size
     */
    size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
};

Images.defaultProps = {
    ...DefaultProps.defaultProps
};

export default Images;
