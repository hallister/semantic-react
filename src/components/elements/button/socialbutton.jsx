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

exports.SocialButton = SocialButton;
