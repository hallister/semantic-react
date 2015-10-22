import React from 'react';
import { Device } from './device';

let Computer = (props) => {
    return (
        <Device
            {...props}
            type="computer"
        >
            {props.children}
        </Device>
    );
};

Computer.propTypes = {
    children: React.PropTypes.node
}

exports.Computer = Computer;
