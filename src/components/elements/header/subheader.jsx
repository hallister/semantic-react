import React, { Component } from 'react';
import { Header } from '../../elements';

// can't get import working?
var classNames = require('classnames');

export class SubHeader extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<Header className="sub" {...this.props}></Header>
		);
	}
}