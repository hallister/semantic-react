import React from 'react';
import Input from '../input';
import Button from '../../button/button';
import Icon from '../../icon/icon';

class ToggleInputLoading extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false
        };
    }
    
    
    render() {
        return (
            <div>
                <Button toggle onClick={this.toggleLoadingState}>Toggle input loading</Button>
                <Input icon="users" state={this.state.loading ? 'loading' : null}/>
            </div>
        );
    }
    
    toggleLoadingState = () => {
        this.setState({
            loading: !this.state.loading
        });
    }
}

<ToggleInputLoading/>
