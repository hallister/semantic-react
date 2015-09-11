import React, { Component } from 'react';
import { Rail, Segment } from '../../components/elements';

// Todo: Can't do much without a dimmer

export class RailDoc extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div style={{width: '700px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Segment>
                    <Rail floated="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail floated="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment style={{left: '-150px', width: '960px', minHeight: '300px'}}>
                    <Rail internal floated="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail internal floated="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                </Segment>
                <Segment>
                    <Rail dividing floated="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail dividing floated="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment>
                    <Rail attached floated="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail attached floated="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment>
                    <Rail close floated="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail close floated="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment>
                    <Rail closer floated="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail closer floated="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
            </div>
        );
    }
}