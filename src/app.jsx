import React, { Component } from 'react';

import * as ElementDocs from './docs/elements';
import * as ViewDocs from './docs/views';
import * as ModuleDocs from './docs/modules';
import { Segment, Button } from '../src/components/elements';
import { Progress } from '../src/components/modules';

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
                <Button onClick={this.onClick.bind(this)}>Increase</Button>
                <Progress progress={this.state.progress} />
            </Segment>
        );
    }
}
