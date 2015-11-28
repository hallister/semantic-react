import React from 'react';
import { Button } from '../../elements';

let WarningButton = ({ children, ...other }) => {
    return (
        <Button {...other}
            color="yellow"
        >
            {children}
        </Button>
    );
};

WarningButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: React.PropTypes.node
};

export default WarningButton;
