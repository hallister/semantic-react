import React from 'react';
import { Device } from './device';

exports.Computer = (props) => {
    return (
        <Device
            {...props}
            type="computer"
        >
            {props.children}
        </Device>
    );
};
