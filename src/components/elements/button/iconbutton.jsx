import React from 'react';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Button from './button';
import Icon from '../icon/icon';

function getClasses(props) {
    let classes = {
        icon: true
    };
    return classes;
}

/**
 * Icon button es un button con icon, en serio
 */
let IconButton = (props) => {
    const { children, iconColor, iconComponent, name, ...other } = props;
    other.className = classNames(other.className, getClasses(props));
    const IconComponent = iconComponent || IconButton.Components.Icon;
    
    return (
        <IconButton.Components.Button
            {...other}
        >
            <IconComponent color={iconColor}
                  name={name}/>
            {children}
        </IconButton.Components.Button>
    );
};

IconButton.propTypes = {
    ...Button.propTypes,

    /**
     * Adds a SemanticUI color class to the icon.
     */
    iconColor: React.PropTypes.string,

    /**
     * Icon component
     */
    iconComponent: elementType,

    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: React.PropTypes.string.isRequired
};

IconButton.defaultProps = {
    ...Button.defaultProps
};

IconButton.Components = {
    Button: Button,
    Icon: Icon
};
export default IconButton;
