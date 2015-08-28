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
                    <Rail float="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail float="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment style={{left: '-150px', width: '960px', minHeight: '300px'}}>
                    <Rail internal float="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail internal float="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                </Segment>
                <Segment>
                    <Rail dividing float="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail dividing float="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment>
                    <Rail attached float="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail attached float="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment>
                    <Rail close float="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail close float="right">
                        <Segment>
                            Right Rail Content
                        </Segment>
                    </Rail>
                    <p>Something</p>
                </Segment>
                <Segment>
                    <Rail close="very" float="left">
                        <Segment>
                            Left Rail Content
                        </Segment>
                    </Rail>
                    <Rail close="very" float="right">
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