import React, { Component } from 'react';
import { Segment, Header, Button } from '../../components/elements';
import { Popup } from '../../components/modules';

export class PopupDoc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    onMouseEnter() {
        this.setState({
            show: true
        });
    }

    onMouseLeave() {
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <Segment
                dividing
            >
                <Header
                    dividing
                    tag="h1"
                >
                    Types
                </Header>
                <br/><br/>
                <Button
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                >
                    <Popup active={this.state.show}>Test Because Testing is awesome!</Popup>
                    Popup
                </Button>

            </Segment>
        );
    }
}

/*
<Dimmer active={this.state.active} page>
    <OutsideClick
        onOutsideClick={this.onDocumentClick.bind(this)}
    >
        <ModalBody
            animate={this.state.active}
            active={this.state.visible}
            start={this.animation.enter}
            end={this.animation.leave}
            onComplete={this.onComplete.bind(this)}
        >
            <Header aligned="center">
                <Icon name="archive"/>
                <Content>
                    Archive Old Messages
                </Content>
            </Header>
            <Actions>
                <Button positive onClick={this.onButtonClick.bind(this)}>Ok</Button>
                <Button negative onClick={this.onButtonClick.bind(this)}>No</Button>
            </Actions>
        </ModalBody>
    </OutsideClick>
</Dimmer>
*/
