import React from 'react';
import { Popup } from '../../../src/components/modules';
import { Button } from '../../../src/components/elements';

class TestPopupButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }
    }


    onBtnClick() {
        this.setState({
            popup: !this.state.popup
        });
    }

    onClickAway() {
        this.setState({
            popup: false
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.onBtnClick.bind(this)}>Test</Button>
                <Popup active={this.state.popup}><h1>TEST3</h1></Popup>
            </div>
        )
    }
}

export default {
    Default: {
        component: TestPopupButton
    }
};
