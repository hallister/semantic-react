import React from 'react';
import { Icon, Button } from '../../elements';

exports.SocialButton = (props) => {
    let { name, ...other } = props;

    return (
        <Button {...other} 
            icon={React.Children.count(props.children) === 0 ? true : false}
            social={props.name} 
        >
            <Icon 
                name={props.name} 
            />
            {props.children}
        </Button>
    );   
}