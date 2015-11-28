import React from 'react';
import { Button } from '../../elements';

let PrimaryButton = ({ children, ...other }) => {
    return (
        <Button {...other}
            color="blue"
        >
            {children}
        </Button>
    );
};

PrimaryButton.propTypes = {
    /**
     * The child nodes of the component.
     */
    children: React.PropTypes.node
};

export default PrimaryButton;
