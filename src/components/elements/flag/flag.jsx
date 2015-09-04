import React, { Component } from 'react';
import { Icon } from '../../elements'; // needed for type comparison

export class Flag extends Component {
    render() {
        return (
            <Icon 
                  className="flag" 
                  defaultClasses={false} 
                  {...this.props} 
            />
        );
    }
}