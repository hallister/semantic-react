import React from 'react';
import { Device } from './device';

let Mobile = (props) => {
    return (
        <Device
            {...props}
            type="mobile"
        >
            {props.children}
        </Device>
    );
};

Mobile.propTypes = {
    children: React.PropTypes.node
}

exports.Mobile = Mobile;
