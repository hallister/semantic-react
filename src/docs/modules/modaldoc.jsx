import React, { Component } from 'react';
import { Segment, Header, Content, Button, Icon, Label, Image } from '../../components/elements';
import { ModalBody, Modal, Dimmer, Rating } from '../../components/modules';
import { Comments, Comment, Actions, Author, Meta, Text, Feed, Event, Summary } from '../../components/views';
import OutsideClick from 'react-outsideclickhandler';

export class ModalDoc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.progress = 30;
    }

    onModalOpen(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setState({
            active: true
        });
    }

    onModalClose(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setState({
            active: false
        });
    }

    onComplete(state) {
        if (state !== this.state.active) {
            this.setState({
                active: state
            });
        }
    }

    onProgress() {
        this.progress += 5;
        this.forceUpdate();
    }

    onProgress2() {
        this.progress -= 30;
        this.forceUpdate();
    }

    render() {

        return (
            <Segment
                basic
            >
                <Header
                    dividing
                    component="h1"
                >
                    Types
                </Header>

                <Button onClick={this.onModalOpen.bind(this)}>Modal</Button>
                <Modal active={this.state.active} onComplete={this.onComplete.bind(this)} size="large">
                    <Header aligned="center">
                        <Icon name="archive"/>
                        <Content>
                            Archive Old Messages
                        </Content>
                    </Header>
                    <Actions>
                        <Button positive>Ok</Button>
                        <Button negative>No</Button>
                    </Actions>
                </Modal>

                <Segment>
                    <Rating max={10}/>
                </Segment>

                <Segment basic>
                    <Comments>
                        <Header dividing>Comments</Header>
                        <Comment>
                        <Image src="http://semantic-ui.com/images/avatar/small/matt.jpg" />
                            <Author>Test</Author>
                            <Meta>2 hours ago</Meta>
                            <Text>Test</Text>
                            <Actions>
                                <a>Reply</a>
                            </Actions>
                        </Comment>
                        <Comment>
                            <Author>Test</Author>
                            <Meta>
                                <div>Test</div>
                            </Meta>
                            <Text>Test</Text>
                            <Actions>
                                <a>Reply</a>
                            </Actions>
                        </Comment>
                    </Comments>
                </Segment>

                <Feed>
                    <Event>
                        <Image src="http://semantic-ui.com/images/avatar/small/matt.jpg" />
                    </Event>

                </Feed>

                <Feed>
                    <Event>
                        <Icon name="pencil" />
                    </Event>

                </Feed>

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
