import React from 'react';
import { Icon } from '../../elements';

export class Flag extends React.Component {
    render() {
        return (
            <Icon className="flag" 
                  defaultClasses={false} 
                  {...this.props} 
            />
        );
    }
}