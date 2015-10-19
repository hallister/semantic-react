import React from 'react';
import { Device } from './device';

exports.Computer = (props) => {
    return (
        <Device
            {...props}
            type="tablet"
        >
            {props.children}
        </Device>
    );
};
