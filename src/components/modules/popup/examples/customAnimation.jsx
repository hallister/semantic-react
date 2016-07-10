import React from 'react';
import Button from '../../../elements/button/button';
import Popup from '../popup';
import { spring } from '../../../animationUtils';

class MyCustomAnimatedPopup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupActive: false,
            buttonEl: null
        }
    }

    onButtonHoverEnter = (event) => {
        this.setState({ popupActive: true, buttonEl: event.target });
    }

    onPopupRequestClose = () => {
        this.setState({ popupActive: false });
    }

    onAnimationStyle = (interpolatedStyle, dimensions) => {
        return {
            transform: `scaleY(${interpolatedStyle.y})`,
            transformOrigin: 'top left'
        };
    }

    render() {
        return (
            <div>
                <Button onMouseEnter={this.onButtonHoverEnter}>
                    Hover Me!
                </Button>
                <Popup active={this.state.popupActive}
                       onRequestClose={this.onPopupRequestClose}
                       target={this.state.buttonEl}
                       initialAnimation={{
                           y: 0
                       }}
                       enterAnimation={{
                           y: spring(1, { stiffness: 700, damping: 40, precision: 0.1})
                       }}
                       leaveAnimation={{
                           y: spring(0, { stiffness: 700, damping: 40, precision: 0.1})
                       }}
                       onAnimationStyle={this.onAnimationStyle}
                >
                    This is just popup
                </Popup>
            </div>
        );
    }
}

<MyCustomAnimatedPopup/>
