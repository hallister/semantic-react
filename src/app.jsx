import React, { Component } from 'react';

// import * as ElementDocs from './docs/elements';
// import * as ViewDocs from './docs/views';
// import * as ModuleDocs from './docs/modules';
import { Segment } from '../src/components/elements';
import { Search } from '../src/components/modules';
// import { Form, Fields, Field } from '../src/components/collections';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.defaultResults = this.results = [
            { title: 'Cat', description: 'Feline' },
            { title: 'Dog', description: 'Canine' }
        ];
    }

    onSearchClick(e, child) {
        this.results = [child];

        this.forceUpdate();
    }

    onChange(e) {
        this.results = this.defaultResults;
        let results = [];

        this.results.forEach(result => {
            if (result.indexOf(e.target.value) > -1) {
                results.push(result);
            }
        });

        this.results = results;

        this.forceUpdate();
    }

    render() {
        return (
            <Segment basic>
                <Search onChange={this.onObjectChange.bind(this)}
                    onSearchClick={this.onSearchClick.bind(this)}
                    results={this.results}
                />

            </Segment>
        );
    }
}
