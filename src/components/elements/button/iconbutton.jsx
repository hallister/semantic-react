import React from 'react';
import classNames from 'classnames';
import { Icon, Button } from '../../elements';

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
    const { children, iconColor, name, ...other } = props;
    other.className = classNames(other.className, getClasses(props));
    
    return (
        <Button
            {...other}
        >
            <Icon color={iconColor}
                  name={name}/>
            {children}
        </Button>
    );
};

IconButton.propTypes = {
    ...Button.propTypes,

    /**
     * Adds a SemanticUI color class to the icon.
     */
    iconColor: React.PropTypes.string,

    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: React.PropTypes.string.isRequired
};

IconButton.defaultProps = {
    ...Button.defaultProps
};

export default IconButton;
