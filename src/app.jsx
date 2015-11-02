import React, { Component } from 'react';

import * as ElementDocs from './docs/elements';
import * as ViewDocs from './docs/views';
import * as ModuleDocs from './docs/modules';
import { Segment, Button, Input } from '../src/components/elements';
import { Tab, Tabs } from '../src/components/modules';
import { Form, Fields, Field } from '../src/components/collections';

export default class App extends Component {
    render() {
        return (
            <Segment basic>
                <Tabs type="menu">
                    <Tab title="test">Tab</Tab>
                    <Tab
                        active
                        title="Test 2"
                    >Tab 2</Tab>
                </Tabs>

            </Segment>
        );
    }
}
