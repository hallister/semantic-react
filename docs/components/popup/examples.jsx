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


    onBtnClick(event) {
        this.setState({
            popup: !this.state.popup,
            element: event.target
        });
    }

    onClickAway(event) {
        this.setState({
            popup: false
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.onBtnClick.bind(this)}>Test</Button>
                <Popup active={this.state.popup}
                       target={this.state.element}
                       inverted
                       wide={false}
                       size="small"
                       lastResortPosition="top left"
                       position="bottom right"
                       preventElementClicks={false}
                       onRequestClose={this.onClickAway.bind(this)}
                >
                    This is very long exampleThis is very long exampleThis is very long exampleThis is very long exampleThis is very long exampleThis is very long example
                </Popup>
            </div>
        )
    }
}

export default {
    Default: {
        component: TestPopupButton
    }
};
