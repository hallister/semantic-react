import React from 'react';
import { Icon, Button } from '../../elements';

function renderChildren(children, name, social, iconColor) {
    let componentChildren = [];

    componentChildren.push(
        <Icon
            color={social ? null : iconColor}
            key="icon"
            name={name} />
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
    /**
     * The child nodes of the component.
     */
    children: React.PropTypes.node,

    /**
     * Adds a SemanticUI color class to the icon.
     */
    iconColor: React.PropTypes.string,

    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: React.PropTypes.string,

    /**
     * Renders as a social button if true (see SocialButton);
     */
    social: React.PropTypes.bool
}

exports.IconButton = IconButton;
