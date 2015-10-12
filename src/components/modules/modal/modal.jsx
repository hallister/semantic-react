import React from 'react';
import { ModalBody, Dimmer } from '../../modules';
import OutsideClick from 'react-outsideclickhandler';

export class Modal extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        basic: React.PropTypes.bool,
        blurring: React.PropTypes.bool,
        children: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        disabled: React.PropTypes.bool,
        enterAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        fullscreen: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        leaveAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        offset: React.PropTypes.number,
        onComplete: React.PropTypes.func,
        outsideClickClose: React.PropTypes.bool,
        padding: React.PropTypes.number,
        page: React.PropTypes.bool,
        size: React.PropTypes.string
    };

    static defaultProps = {
        component: 'div',
        enterAnimation: {
            duration: 500,
            easing: 'in-ease',
            from: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            },
            to: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            }
        },
        leaveAnimation: {
            duration: 500,
            easing: 'in-ease',
            from: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            },
            to: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            }
        },
        onComplete: function noop() {},
        outsideClickClose: true,
        page: true
    };

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            visible: false
        }
    }

    componentWillReceiveProps(props) {
        if (props.active != this.props.active && props.active !== this.state.active) {
            if (props.active) {
                this.setState({
                    active: true,
                    visible: true
                });
            } else {
                this.setState({
                    active: false
                });
            }
        }
    }

    shouldComponentUpdate(props, state) {
        // this will happen when we modify the state by clicking the Backdrop
        // we don't want to force a re-render just because the parent component
        // got it's active state changed after the animation completed
        if (props.active === this.props.active && state.active === this.state.active) {
            return false;
        } else {
            return true;
        }
    }

    onAnimationComplete() {
        if (!this.state.active) {
            this.setState({
                visible: false
            });
        }

        this.props.onComplete(this.state.active);
    }

    onModalClose() {
        if (this.state.active) {
            this.setState({
                active: false
            });
        }
    }

    renderModalBody() {
        let { blurring, component, disabled, leaveAnimation, inverted, outsideClickClose, page, enterAnimation, ...other } = this.props;

        let props = Object.assign(other, {
            animate: this.state.active,
            active: this.state.visible,
            start: this.props.enterAnimation,
            end: this.props.leaveAnimation,
            onComplete: this.onAnimationComplete.bind(this)
        });

        let modal = React.createElement(
            ModalBody,
            props,
            this.props.children
        );

        if (this.props.outsideClickClose) {
            return (
                    <OutsideClick
                        onOutsideClick={this.onModalClose.bind(this)}
                    >
                        {modal}
                    </OutsideClick>
            );
        } else {
            return modal;
        }
    }

    render() {
        let { basic, children, component, leaveAnimation, fullscreen, offset, outsideClickClose, padding, size, enterAnimation, ...other } = this.props;
        other.active = this.state.active;

        return React.createElement(
            Dimmer,
            other,
            this.renderModalBody()
        );
    }

    getModalClasses() {
        let classes = {
            // variations
            basic: this.props.basic,
            fullscreen: this.props.fullscreen
        }

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
