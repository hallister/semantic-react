import React, { Component } from 'react';
import { Segment, Button, Content } from '../../components/elements';
import { Dimmer } from '../../components/modules';

export class DimmerDoc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dimmed: false,
            blurred: false
        }
    }

    onClick() {
        this.setState({
            dimmed: !this.state.dimmed
        })
    }

    onBlur() {
        this.setState({
            blurred: !this.state.blurred
        })
    }

    render() {
    	return (
    		<div>
                <Segment basic>
                    <Button onClick={this.onClick.bind(this)}>Dim Me!</Button>
                    <Dimmer dimmed={this.state.dimmed}>
                        I'm dimmable
                    </Dimmer>

                    <Dimmer dimmed={this.state.dimmed}>
                        I'm dimmable too
                        <Content>
                            I'm an overlay!
                        </Content>
                    </Dimmer>

                    <Dimmer disabled dimmed={this.state.dimmed}>
                        I'm dimmable too
                        <Content>
                            I'm an overlay!
                        </Content>
                    </Dimmer>

                    <Button onClick={this.onBlur.bind(this)}>Blur Me!</Button>
                    <Dimmer blurring dimmed={this.state.blurred}>
                        I can be blurred by this thing.
                    </Dimmer>     

                    <Dimmer blurring inverted dimmed={this.state.blurred}>
                        I can be blurred by this thing.
                    </Dimmer>  

                </Segment>
                <Segment>
                    <Dimmer blurring inverted tag="div" dimmed={this.state.blurred}>
                        I can be blurred by this thing.
                    </Dimmer>  
                </Segment>

    		</div>
    	);
    }
}