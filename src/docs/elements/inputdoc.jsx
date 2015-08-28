import React, { Component } from 'react';
import { Input, Icon, Label, Segment } from '../../components/elements';

export class InputDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Segment>
                   <Input type="text"/>
                </Segment>
                <Segment>
                   <Input focus type="text"/>
                </Segment>
                <Segment>
                   <Input loading type="text"/>
                </Segment>
                <Segment>
                   <Input error type="text"/>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Icon name="search"/>
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text" placeholder="Search users...">
                        <Icon left name="users"/>
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Icon circular link name="search"/>
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Icon inverted circular link name="search"/>
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Label>
                            http://
                        </Label>    
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Label right>
                            .com
                        </Label>    
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Icon left name="tags"/>
                        <Label right tag link>
                            Add tag
                        </Label>
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Label corner="left">
                            <Icon name="asterisk"/>
                        </Label>
                    </Input>
                </Segment>
                <Segment>
                    <Input type="text">
                        <Label corner>
                            <Icon name="asterisk"/>
                        </Label>
                    </Input>
                </Segment>
            </div>
        );
    }
}