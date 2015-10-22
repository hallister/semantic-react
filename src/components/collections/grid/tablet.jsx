import React from 'react';
import { Device } from './device';

let Tablet = (props) => {
    return (
        <Device
            {...props}
            type="tablet"
        >
            {props.children}
        </Device>
    );
};

Tablet.propTypes = {
    children: React.PropTypes.node
}

exports.Tablet = Tablet;
