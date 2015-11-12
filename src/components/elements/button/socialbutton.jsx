import React from 'react';
import { IconButton } from '../../elements';

let SocialButton = ({ children, name, ...other }) => {
    return (
        <IconButton {...other}
            icon={React.Children.count(children) === 0 ? true : false}
            name={name}
            social
        >
            {children}
        </IconButton>
    );
};

SocialButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: React.PropTypes.node,

    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: React.PropTypes.string
}

exports.SocialButton = SocialButton;
