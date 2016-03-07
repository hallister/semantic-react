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
                         dimmed={this.state.active}
                         blurring
                         component={Dimmable}
                >
                    <Header>Overlayable section</Header>
                    <p>Section text</p>
                    <Dimmer active={this.state.active}>
                        <Header inverted>Dimmed message!</Header>
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
