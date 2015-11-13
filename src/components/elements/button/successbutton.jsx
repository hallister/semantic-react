import React from 'react';
import { Button } from '../../elements';

let SuccessButton = ({ children, ...other }) => {
    return (
        <Button {...other}
            color="green"
        >
            {children}
        </Button>
    );
};

SuccessButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: React.PropTypes.node
}

exports.SuccessButton = SuccessButton;
