import React, { Component } from 'react';

import * as ElementDocs from './docs/elements';
import * as ViewDocs from './docs/views';
import * as ModuleDocs from './docs/modules';

export default class App extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
				<ModuleDocs.DimmerDoc/>
			</div>
		);
	}
}