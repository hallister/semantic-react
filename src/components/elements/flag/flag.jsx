import React, { Component } from 'react';
import { Icon } from '../../elements'; // needed for type comparison

export class Flag extends Component {
	constructor(props) {
        super(props);
    }

    render() {
        return (
            <Icon defaultClasses={false} className="flag" {...this.props} />
        )
    }

}