import React, { Component } from 'react';
import { Segment, Button, Content } from '../../components/elements';
import { Dimmer } from '../../components/modules';

export class DimmerDoc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dimmed: false,
            page: false
        }
    }

    onClick() {
        this.setState({
            dimmed: !this.state.dimmed

        })
    }

    onPage() {
        this.setState({
            page: !this.state.page,
            dimmed: false
        })
    }

    render() {

    	return (
    		<div>
                <Button onClick={this.onPage.bind(this)}>Dim Page!</Button>
                <Dimmer page active={this.state.page} onClick={this.onPage.bind(this)}>
                    <Content>
                        I can take up a page
                    </Content>
                </Dimmer>

                <Button onClick={this.onClick.bind(this)}>Dim Me!</Button>
                <Segment basic>
                    <Dimmer active={this.state.dimmed}>
                        I'm dimmable too
                        <Content>
                            I'm an overlay!
                        </Content>
                    </Dimmer>
                </Segment>

                <Dimmer basic={false} active={this.state.dimmed}>
                    A dimmer is just a Segment!
                    <Content>
                        By default, it's a basic segment!
                    </Content>
                </Dimmer>


                <Segment basic>
                    <Dimmer blurring inverted active={this.state.dimmed}>
                        I can be blurred by this thing.
                    </Dimmer>
                </Segment>

                <Segment basic>
                    <Dimmer blurring active={this.state.dimmed}>
                        I can be blurred by this thing.
                    </Dimmer>
                </Segment>
    		</div>
    	);
    }
}

/* part 2
 <Segment>
 <Dimmer blurring inverted tag="div" dimmed={this.state.blurred}>
 I can be blurred by this thing.
 </Dimmer>
 </Segment>
 */

/* part 1

 <Segment basic>
 <Dimmer active={this.state.dimmed}>

 </Dimmer>
 </Segment>

 <Segment basic>
 <Dimmer disabled active={this.state.dimmed}>
 I'm dimmable too
 <Content>
 I'm an overlay!
 </Content>
 </Dimmer>
 </Segment>

 <Button onClick={this.onBlur.bind(this)}>Blur me!</Button>
 <Segment blurring basic>
 <Dimmer blurring active={this.state.blurred}>
 I can be blurred by this thing.
 </Dimmer>

 </Segment>


 */