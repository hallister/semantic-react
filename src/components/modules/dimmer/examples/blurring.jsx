import React from 'react';
import Dimmer from '../dimmer';
import Dimmable from '../dimmable';
import Segment from '../../../elements/segment/segment';
import Header from '../../../elements/header/header';
import Images from '../../../elements/image/images';
import Image from '../../../elements/image/image';
import Icon from '../../../elements/icon/icon'
import Button from '../../../elements/button/button';

class MyBlurringDimmer extends React.Component {
    constructor() {
        super();
        this.state = {
            dimmed: false,
            inverted: false
        }
    }

    render() {
        return (
            <div>
                <Segment component={Dimmable} dimmed={this.state.dimmed} blurring>
                    <Header size="medium">Overlayable section</Header>
                    <Images size="small">
                        <Image src="http://semantic-ui.com/images/wireframe/image.png"/>
                        <Image src="http://semantic-ui.com/images/wireframe/image.png"/>
                        <Image src="http://semantic-ui.com/images/wireframe/image.png"/>
                    </Images>
                    <Dimmer active={this.state.dimmed} inverted={this.state.inverted}>
                        <Icon size="large" name="users"/>
                        Hey, I'm dimmer
                    </Dimmer>
                </Segment>
                <Button onClick={() => this.setState({ dimmed: !this.state.dimmed })}>Toggle</Button>
                <Button onClick={() => this.setState({ inverted: !this.state.inverted })}>Toggle dimmer inverting</Button>
            </div>
        );
    }
}
<MyBlurringDimmer />

