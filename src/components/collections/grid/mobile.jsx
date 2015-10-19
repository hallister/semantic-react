import React from 'react';
import { Device } from './device';

exports.Mobile = (props) => {
    return (
        <Device
            {...props}
            type="mobile"
        >
            {props.children}
        </Device>
    );
};
