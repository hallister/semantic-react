import React, { Component } from 'react';

import * as ElementDocs from './docs/elements';
import * as ViewDocs from './docs/views';
import * as ModuleDocs from './docs/modules';
import { Segment, Button, Input } from '../src/components/elements';
import { Checkbox, Checkboxes } from '../src/components/modules';
import { Form, Fields, Field } from '../src/components/collections';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        }
    }

    onClick() {
        this.setState({
            progress: this.state.progress + 5
        })
    }

    render() {
        return (
            <Segment>
                <Form
                    success
                >
                    <Field
                        label="Test"
                    >
                        <Checkboxes>
                            <Checkbox>Test</Checkbox>
                            <Checkbox>Test</Checkbox>
                        </Checkboxes>
                    </Field>
                </Form>
            </Segment>
        );
    }
}
