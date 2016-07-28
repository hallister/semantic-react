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
import AnimationProps, { getMotionStyle } from '../../animationUtils';

/**
 * Modal is modal
 */
export default class Modal extends React.Component {
    static propTypes = {
        ...ModalElement.propTypes,
        ...AnimationProps.propTypes,
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
        initialAnimation: {
            opacity: 0.5,
            scale: 0.5
        },
        enterAnimation: {
            opacity: spring(1, { stiffness: 300, damping: 40, precision: 1 }),
            scale: spring(1, { stiffness: 300, damping: 25, precision: 1 })
        },
        leaveAnimation: {
            opacity: spring(0, { stiffness: 700, damping: 40, precision: 1 }),
            scale: spring(0.5, { stiffness: 700, damping: 40, precision: 1 })
        },
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
            modalWidth: 1,
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
        if (dimensions &&
            ((dimensions.height && dimensions.height !== this.state.modalHeight) ||
            (dimensions.width && dimensions.width !== this.state.modalWidth))) {
            this.setState({
                modalHeight: dimensions.height,
                modalWidth: dimensions.width
            });
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

    getAnimationStyle(interpolatedStyle, dimensions) {
        const { onAnimationStyle } = this.props;
        if (onAnimationStyle && typeof onAnimationStyle === "function") {
            return onAnimationStyle(interpolatedStyle, dimensions, this.state.active);
        }
        return {
            opacity: interpolatedStyle.opacity,
            transform: `scale(${interpolatedStyle.scale})`
        };
    }

    /**
     * Render modal element
     * @param interpolatedStyle Interpolated style
     * @returns {*}
     */
    renderModal(interpolatedStyle) {
        const {
            component, defaultClasses, initialAnimation, enterAnimation, leaveAnimation, children, dimmed, onOutsideClick, style, zIndex,
            onModalOpened, onModalClosed, onRequestClose, onAnimationStyle, ...other
        } = this.props;
        let positionTop = 0;
        let scrolling = false;
        // Modal is too big, set the scrolling state then
        if (this.state.modalHeight > window.innerHeight) {
            scrolling = true
        } else {
            positionTop = window.innerHeight / 2 - this.state.modalHeight / 2;
        }

        const animationStyle = this.getAnimationStyle(interpolatedStyle, {
            height: this.state.modalHeight,
            width: this.state.modalWidth
        });
        const modalStyle = {
            ...style,
            position: 'fixed',
            top: positionTop,
            ...animationStyle
        };

        return (
            <Measure accurate
                     whitelist={["height", "width"]}
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
            initialAnimation, enterAnimation, leaveAnimation, zIndex, onModalOpened, onModalClosed
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

        const springAnimationStyle = getMotionStyle(initialAnimation, enterAnimation, leaveAnimation, this.state.active);
        return (
            <Portal isOpened={this.state.active || (!this.state.active && this.state.closing)}
                    style={portalStyle}
                    onOpen={onModalOpened}
                    onClose={onModalClosed}
            >
                <Modal.Components.Dimmer active={this.state.active}
                                         page
                                         noWrapChildren
                                         className="modals"
                >
                    <EventListener target={document}
                                   onKeyDown={this.onPressEsc}
                                   onMouseDown={this.onOutsideClick}
                                   onTouchStart={this.onOutsideClick}/>
                    <Motion defaultStyle={initialAnimation}
                            style={springAnimationStyle}
                            onRest={this.onAnimationRest}
                    >
                        {interpolatedStyle => this.renderModal(interpolatedStyle)}
                    </Motion>

                </Modal.Components.Dimmer>
            </Portal>
        );
    }
}
