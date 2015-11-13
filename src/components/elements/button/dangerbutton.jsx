import React from 'react';
import { Button } from '../../elements';

let DangerButton = ({ children, ...other }) => {
    return (
        <Button {...other}
            color="red"
        >
            {children}
        </Button>
    );
};

DangerButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: React.PropTypes.node
}

exports.DangerButton = DangerButton;
