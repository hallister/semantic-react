import React from 'react';
import { Icon, Button } from '../../elements';

function renderChildren(children, name, social, iconColor) {
    let componentChildren = [];

    componentChildren.push(
        <Icon
            color={social ? null : iconColor}
            key="icon"
            name={name}
        />
    );

    React.Children.forEach(children, child => {
        componentChildren.push(child);
    });

    return componentChildren;
}

let IconButton = ({ children, iconColor, name, social, ...other }) => {

    return (
        <Button
            {...other}
            icon={React.Children.count(children) === 0 ? true : false}
            social={social ? name : ''}
        >
            {renderChildren(children, name, social, iconColor)}
        </Button>
    );
};

IconButton.propTypes = {
    children: React.PropTypes.node,
    iconColor: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string
    ]),
    name: React.PropTypes.string,
    social: React.PropTypes.bool
}

exports.IconButton = IconButton;
