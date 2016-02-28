import React from 'react';
import { Dimmer, Dimmable } from '../../../src/components/modules';
import { Button, Segment, Header, Content } from '../../../src/components/elements';

class TestDimmer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }


    render() {
        return (
            <div>
                <Button onClick={this.handleButtonClick.bind(this)}>Click me</Button>
                <Segment attached 
                         bluring
                         component={Dimmable}
                >
                    <Header>Overlayable section</Header>
                    <p>Section text</p>
                    <Dimmer active={this.state.active}>
                        Dimmed message!
                    </Dimmer>
                </Segment>
            </div>
        )
    }

    handleButtonClick() {
        this.setState({
            active: !this.state.active
        });
    }
}

export default {
    default: [
        {
            component: TestDimmer
        }
    ]
};
