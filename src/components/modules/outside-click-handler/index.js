/**
 * Outside click document
 */

import React from 'react';

export default class OutsideClickHandler extends React.Component {
    static propTypes = {
        onOutsideClick: React.PropTypes.func
    };

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    }

    handleDocumentClick = (event) => {
        if (this.props.onOutsideClick === null) {
            return;
        }
        return this.props.onOutsideClick(event);
    }

    handleMyClick = (event) => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    }

    render() {
        return (
            <div onClick={this.handleMyClick}>
                {this.props.children}
            </div>
        );
    }
}
