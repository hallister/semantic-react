import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';
import Measure from 'react-measure';
import Portal from 'react-portal';
import EventListener from 'react-event-listener';
import shallowCompare from 'react-addons-shallow-compare';
import { isNodeInRoot } from '../../utilities';
import Dimmer from '../dimmer/dimmer';
import ModalElement from './modalelement';

/**
 * Modal is modal
 */
export default class Modal extends React.Component {
    static propTypes = {
        ...ModalElement.propTypes,
        /**
         * Start animation. Accepts react-motion spring configuration.
         * Pass false to disable animation
         */
        enterAnimation: React.PropTypes.oneOf([
            React.PropTypes.shape({
                stiffness: React.PropTypes.number,
                damping: React.PropTypes.number,
                precision: React.PropTypes.number
            }),
            React.PropTypes.bool
        ]),
        /**
         * Leave animation. Accepts react-motion spring configuration
         * Pass false to disable animation
         */
        leaveAnimation: React.PropTypes.oneOf([
            React.PropTypes.shape({
                stiffness: React.PropTypes.number,
                damping: React.PropTypes.number,
                precision: React.PropTypes.number
            }),
            React.PropTypes.bool
        ]),
        /**
         * Dimmer variations
         */
        dimmed: React.PropTypes.oneOf(['blurring', 'inverted', 'blurring inverted']),
        /**
         * Callback from outside modal click
         */
        onRequestClose: React.PropTypes.func,
        /**
         * Callback for modal opening
         */
        onModalOpened: React.PropTypes.func,
        /**
         * Callback for modal closing
         */
        onModalClosed: React.PropTypes.func,
        /**
         * Overlay zIndex
         */
        zIndex: React.PropTypes.number
    };


    static childContextTypes = {
        isModalChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...ModalElement.defaultProps,
        onRequestClose: () => {},
        onModalOpened: () => {},
        onModalClosed: () => {},
        enterAnimation: {
            stiffness: 700,
            damping: 40,
            precision: 0.1
        },
        leaveAnimation: false,
        zIndex: 1000
    };

    /* eslint-disable */
    static Components = {
        Dimmer: Dimmer,
        ModalElement: ModalElement
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        this.state = {
            modalHeight: 1,
            active: props.active,
            closing: false,
        };

        this.modal = null;
    }

    getChildContext() {
        return {
            isModalChild: true
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.state.active) {
            if (nextProps.active) {
                this.setState({
                    active: true,
                    closing: false
                });
            } else {
                this.setState({
                    active: false,
                    closing: true
                });
            }
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        // since we're changing state immediately after componentDidUpdate we need to prevent re-rendering loop
        return shallowCompare(this, nextProps, nextState);
    }

    onPressEsc = (event) => {
        if (event.keyCode !== 27) {
            return;
        }

        event.stopPropagation();
        this.props.onRequestClose(event);
    }

    onOutsideClick = (event) => {
        if (!this.state.active || this.state.closing) {
            return;
        }
        if (!this.modal) {
            return;
        }
        if (isNodeInRoot(event.target, ReactDOM.findDOMNode(this.modal))) {
            return;
        }
        event.stopPropagation();
        this.props.onRequestClose(event);
    }

    /**
     * Modal dimensions was changed
     * @param dimensions
     */
    onModalMeasure = (dimensions) => {
        if (dimensions && dimensions.height && dimensions.height !== this.state.modalHeight) {
            this.setState({ modalHeight: dimensions.height });
        }
    }

    /**
     * Animation completed
     */
    onAnimationRest = () => {
        if (!this.state.active && this.state.closing) {
            this.setState({ closing: false });
        }
    }

    /**
     * Render modal element
     * @param interpolatedStyle Interpolated style
     * @returns {*}
     */
    renderModal(interpolatedStyle) {
        const {
            component, enterAnimation, leaveAnimation, children, dimmed, onOutsideClick, style, zIndex,
            onModalOpened, onModalClosed, ...other
        } = this.props;
        let positionTop = 0;
        let scrolling = false;
        // Modal is too big, set the scrolling state then
        if (this.state.modalHeight > window.innerHeight) {
            scrolling = true
        } else {
            positionTop = window.innerHeight / 2 - this.state.modalHeight / 2;
        }

        const modalStyle = { ...style, opacity: interpolatedStyle.opacity, transform: `scale(${interpolatedStyle.scale})`, top: positionTop, position: 'fixed' };

        return (
            <Measure accurate
                     whitelist={["height"]}
                     shouldMeasure
                     onMeasure={this.onModalMeasure}
            >
                <Modal.Components.ModalElement {...other}
                                               active={this.state.active || (!this.state.active && this.state.closing)}
                                               key="modal"
                                               ref={ref => this.modal = ref}
                                               scrolling={scrolling}
                                               style={modalStyle}
                >
                    {children}
                </Modal.Components.ModalElement>
            </Measure>
        );
    }

    render() {
        const {
            enterAnimation, leaveAnimation, zIndex, onModalOpened, onModalClosed
        } = this.props;

        // Apply layer to portal to prevent clicking outside
        const portalStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: zIndex
        };

        const startAnimationStyle = {
            scale: 0.5,
            opacity: 0.5
        };
        let animationStyle = {};
        if (this.state.active) {
            animationStyle = {
                scale: enterAnimation ? spring(1, enterAnimation) : 1,
                opacity: enterAnimation ? spring(1, enterAnimation) : 1
            }
        } else {
            animationStyle = {
                scale: leaveAnimation ? spring(0.5, leaveAnimation) : 0.5,
                opacity: leaveAnimation ? spring(0.5, leaveAnimation) : 0.5
            }
        }
        return (
            <Portal isOpened={this.state.active || (!this.state.active && this.state.closing)}
                    style={portalStyle}
                    onOpen={onModalOpened}
                    onClose={onModalClosed}
            >
                <Modal.Components.Dimmer active={this.state.active || (!this.state.active && this.state.closing)}
                                         page
                                         noWrapChildren
                                         className="modals"
                >
                    <EventListener target={document}
                                   onKeyDown={this.onPressEsc}
                                   onMouseDown={this.onOutsideClick}
                                   onTouchStart={this.onOutsideClick}/>
                    <Motion defaultStyle={startAnimationStyle}
                            style={animationStyle}
                            onRest={this.onAnimationRest}
                    >
                        {interpolatedStyle => this.renderModal(interpolatedStyle)}
                    </Motion>

                </Modal.Components.Dimmer>
            </Portal>
        );
    }
}
