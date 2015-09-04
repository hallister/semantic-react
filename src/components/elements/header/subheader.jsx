import React, { Component } from 'react';
import { Header } from '../../elements';

export class SubHeader extends Component {
	render() {
        return (
			<Header 
				className="sub" 
				{...this.props}
			/>
		);
    }
}