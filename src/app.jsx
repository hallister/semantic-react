import React, { Component } from 'react';

import * as ElementDocs from './docs/elements';
import * as ViewDocs from './docs/views';
import * as ModuleDocs from './docs/modules';
import { Header, Image, Images, Date, Summary } from '../src/components/elements';
import { Feed, Event  } from '../src/components/views';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ModuleDocs.DimmerDoc/>
        );
    }
}
