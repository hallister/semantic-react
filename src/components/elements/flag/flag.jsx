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

Flag.propTypes = {
    /**
     * The country code, name or alias of the flag
     */
    name: React.PropTypes.string.isRequired
}

exports.Flag = Flag;
