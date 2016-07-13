import React from 'react';
import Input from '../input';
import Segment from '../../segment/segment';
import Segments from '../../segment/segments';

class MyControlledInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    
    onInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    
    render() {
        return (
            <Segments>
                <Segment type="raised">
                    {this.state.value}
                </Segment>
                <Segment>
                    <Input type="text"
                           value={this.state.value}
                           onChange={this.onInputChange}/>
                </Segment>
            </Segments>
        );
    }
}

<MyControlledInput/>
