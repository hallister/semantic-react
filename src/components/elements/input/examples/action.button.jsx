import React from 'react';
import Input from '../input';
import Button from '../../button/button';
import Header from '../../header/header';
import Segment from '../../segment/segment';
import Segments from '../../segment/segments';

class MyInputWithButton extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'initial',
            send: false,
            sendValue: ''
        };
    }
    
    onButtonClick = () => {
        this.setState({
            send: !this.state.send,
            sendValue: this.state.value
        });
    }
    
    render() {
        return (
            <Segments>
                {this.state.send &&
                <Segment type="raised">
                    <Header>You've send the value: {this.state.sendValue}</Header>
                </Segment>}
                <Segment>
                    <Input actionComponent={() => <Button emphasis="primary" onClick={this.onButtonClick}>{this.state.send ? 'Unsend' : 'Send'}</Button>}
                           onChange={(evt) => this.setState({ value: evt.target.value })}
                           value={this.state.value}/>
                </Segment>
            </Segments>
        )
    }
}

<MyInputWithButton/>
