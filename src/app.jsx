import React, { Component } from 'react';

import * as ElementDocs from './docs/elements';
import * as ViewDocs from './docs/views';
import * as ModuleDocs from './docs/modules';
import { Segment, Button, Input } from '../src/components/elements';
import { Checkbox, CheckboxFields } from '../src/components/modules';
import { Form, Fields, Field } from '../src/components/collections';

export default class App extends Component {
    render() {
        return (
            <Segment>
                <Form>
                    <CheckboxFields
                        name="tests"
                        type="grouped"
                        radio
                    >
                        Test
                        <Checkbox>Test</Checkbox>
                        <Checkbox>Test2</Checkbox>
                    </CheckboxFields>
                </Form>
            </Segment>
        );
    }
}
