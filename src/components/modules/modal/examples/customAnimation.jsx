import React from 'react';
import Modal from '../modal';
import Button from '../../../elements/button/button';
import Icon from './../../../elements/icon/icon';
import Header from './../../../elements/header/header';
import Content from './../../../elements/simple/content';
import Description from './../../../elements/simple/description';
import Actions from './../../../elements/simple/actions';
import LabeledButton from './../../../elements/button/labeledbutton';

class MyCustomAnimatedModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    onCloseModal = () => {
        this.setState({
            active: false
        });
    };

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ active: true })}>Open modal</Button>
                <Modal onRequestClose={this.onCloseModal}
                       active={this.state.active}
                       enter="slide in"
                       enterDuration={1000}
                       leave="scale out"
                       leaveDuration={1000}
                >
                    <Icon name="close" onClick={this.onCloseModal.bind(this)}/>
                    <Header>Select a photo</Header>
                    <Content image>
                        <Image size="medium" wrapComponent src="http://semantic-ui.com/images/avatar2/large/rachel.png"/>
                        <Description>
                            <Header>Default profile image</Header>
                            <p>
                                We've found the following gravatar image associated with your e-mail address.
                            </p>
                            <p>
                                Is it okay to use this photo?
                            </p>
                        </Description>
                    </Content>
                    <Actions>
                        <Button emphasis="negative" onClick={this.onCloseModal.bind(this)}>Nope</Button>
                        <LabeledButton emphasis="positive"
                                       label="checkmark"
                                       labelType="icon"
                                       onClick={this.onCloseModal.bind(this)}
                        >
                            Yep, that's me
                        </LabeledButton>
                    </Actions>
                </Modal>
            </div>
        );
    }
}

<MyCustomAnimatedModal/>
