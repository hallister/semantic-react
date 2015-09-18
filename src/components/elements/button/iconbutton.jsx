import React from 'react';
import { Icon, Button } from '../../elements';

exports.IconButton = (props) => {
    let { iconColor, name, ...other } = props;
    let children = [];

    children.push(
        <Icon
            color={props.iconColor}
            key="icon"
            name={props.name}
        />
    );

    React.Children.forEach(props.children, child => {
        children.push(child);
    });

    return (
        <Button 
            {...other}    
            icon={React.Children.count(props.children) === 0 ? true : false}
        >
            {children}
        </Button>
    );
};