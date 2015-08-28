import React, { Component } from 'react';

import * as Docs from './docs/elements';

export default class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
				<Docs.ButtonDoc/>
			</div>
		);
	}
}