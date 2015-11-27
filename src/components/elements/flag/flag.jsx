import React from 'react';
import { Icon } from '../../elements';

let Flag = (props) => {
    let other = Object.assign({}, props);
    other.className = 'flag';
    other.defaultClasses = false;

    return React.createElement(
        Icon,
        other
    );
};

exports.Flag = Flag;
