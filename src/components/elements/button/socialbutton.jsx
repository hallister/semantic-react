import React from 'react';
import { Icon, Button } from '../../elements';

exports.SocialButton = (props) => {
    let { name, ...other } = props;
    let children = [];

    children.push(
        <Icon
            key="icon"
            name={props.name}
        />
    );

    React.Children.forEach(props.children, child => {
        children.push(child);
    });

    return (
        <Button {...other} 
            icon={React.Children.count(props.children) === 0 ? true : false}
            social={props.name} 
        >
            {children}
        </Button>
    );   
}