import React from 'react';
import Button from '../../../elements/button/button';
import Popup from '../popup';

class MyPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupActive: false,
            buttonEl: null
        }
    }

    onButtonHoverEnter(event) {
        this.setState({ popupActive: true, buttonEl: event.target });
    }

    onPopupRequestClose() {
        this.setState({ popupActive: false });
    }

    render() {
        return (
            <div>
                <Button onMouseEnter={this.onButtonHoverEnter.bind(this)}>
                    Hover Me!
                </Button>
                <Popup active={this.state.popupActive}
                       onRequestClose={this.onPopupRequestClose.bind(this)}
                       target={this.state.buttonEl}
                >
                    This is just popup
                </Popup>
            </div>
        );
    }
}

<MyPopup/>
