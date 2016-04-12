import React from 'react';
import Modal from '../modal';
import Button from '../../../elements/button/button';
import Icon from './../../../elements/icon/icon';
import Header from './../../../elements/header/header';
import Content from './../../../elements/simple/content';
import Description from './../../../elements/simple/description';
import Actions from './../../../elements/simple/actions';
import LabeledButton from './../../../elements/button/labeledbutton';

class MyBasicModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    
    onCloseModal() {
        this.setState({
            active: false
        });
    }
        
    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ active: true })}>Open modal</Button>
                <Modal basic onRequestClose={this.onCloseModal.bind(this)} active={this.state.active}>
                    <Header icon="archive">Archive old messages</Header>
                    <Content>
                        <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                    </Content>
                    <Actions>
                        <Button color="red" 
                                basic 
                                inverted 
                                onClick={this.onCloseModal.bind(this)}
                        >
                            <Icon name="remove"/>
                            No
                        </Button>
                        <Button color="green"
                                inverted 
                                onClick={this.onCloseModal.bind(this)}
                        >
                            <Icon name="checkmark"/>
                            Yep
                       </Button>
                    </Actions>
                </Modal>
             </div>
        );
    }
}

<MyBasicModal/>