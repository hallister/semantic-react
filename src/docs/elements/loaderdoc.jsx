import React, { Component } from 'react';
import { Loader, Segment } from '../../components/elements';
import { Dimmer } from '../../components/modules';

// Todo: Can't do much without a dimmer

export class LoaderDoc extends Component {
    render() {

        return (
            <div>
                <Segment inverted compact aligned="center" >
                    <img src="docs/images/paragraph.png" className="wireframe" />
                    <Dimmer dimmed={true}>
                        <Loader />
                    </Dimmer>
                </Segment>
                <Segment inverted compact>
                    <img src="docs/images/paragraph.png" className="wireframe" />
                    <Dimmer dimmed={true}>
                        <Loader>Loading</Loader>
                    </Dimmer>
                </Segment>
                <Segment compact>
                <img src="docs/images/paragraph.png" className="wireframe" />
                    <Dimmer inverted dimmed={true}>
                        <Loader>Loading</Loader>
                    </Dimmer>
                </Segment>
                <Segment compact>
                <img src="docs/images/paragraph.png" className="wireframe" />
                    <Dimmer dimmed={true}>
                        <Loader indeterminate>Loading</Loader>
                    </Dimmer>
                </Segment>
                <Segment compact>
                    <Loader active={true}>Loading</Loader>
                    <img src="docs/images/paragraph.png" className="wireframe" />
                </Segment>
            </div>
        );
    }
}