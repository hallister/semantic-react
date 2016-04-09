import React from 'react';
import classNames from 'classnames';
import { IconButton, Button, Icon } from '../../elements';


/**
 * Social button is simple social colored button with social icon. This is ordinary button, 
 */
let SocialButton = ({ children, name, ...other }) => {
    const hasChildren = React.Children.count(children) > 0;
    other.className = classNames(other.className, name);
    // Render button if has any children (i.e. caption), otherwise render icon button
    if (hasChildren) {
        return (
            <Button {...other}>
                <Icon name={name}/>
                {children}
            </Button>
        )
    } else {
        return (
            <IconButton {...other}
                name={name} />
        )
    }
};

SocialButton.propTypes = {
    ...Button.propTypes,
    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: React.PropTypes.string.isRequired
};

export default SocialButton;
