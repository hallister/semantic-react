import React from 'react';
import { Dimmer } from '../../../src/components/modules';
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
                <Dimmer active={this.state.active}>
                    <Header>Overlayable section</Header>
                    <p></p>
                    <Content>Dimmed message!</Content>
                </Dimmer>
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
