import React from 'react';
import { Icon } from '../../elements';

exports.Flag = (props) => {
    return (
        <Icon 
            className="flag" 
            defaultClasses={false} 
            {...props} 
        />
    );
};