import React from 'react';
import Dimmer from '../dimmer';
import Dimmable from '../dimmable';
import Segment from '../../../elements/segment/segment';
import Header from '../../../elements/header/header';
import Images from '../../../elements/image/images';
import Image from '../../../elements/image/image';
import Icon from '../../../elements/icon/icon'
import Button from '../../../elements/button/button';

class MyPageDimmer extends React.Component {
    constructor() {
        super();
        this.state = {
            dimmed: false
        }
    }

    render() {
        return (
            <div>
                <Dimmer page active={this.state.dimmed} onClick={() => this.setState({ dimmed: false })}>
                    <Icon size="large" name="users"/>
                    Hey, I'm page dimmer
                </Dimmer>
                <Button onClick={() => this.setState({ dimmed: !this.state.dimmed })}>Show page dimmer</Button>
            </div>
        );
    }
}
<MyPageDimmer />

