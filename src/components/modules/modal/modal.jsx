import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';
import Measure from 'react-measure';
import Portal from 'react-portal';
import EventListener from 'react-event-listener';
import { isNodeInRoot } from '../../utilities';
import Dimmer from '../dimmer/dimmer';
import ModalElement from './modalelement';
import AnimationProps, { getMotionStyle } from '../../animationUtils';
import SemanticCSSTransition from '../../animation/animation';

/**
 * Modal is modal
 */
export default class Modal extends React.PureComponent {
    static propTypes = {
        ...ModalElement.propTypes,
        ...SemanticCSSTransition.propTypes,
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
        ...SemanticCSSTransition.defaultProps,
        onRequestClose: () => {},
        onModalOpened: () => {},
        onModalClosed: () => {},

        enter: 'scale in',
        leave: 'scale out',
        enterDuration: 500,
        leaveDuration: 500,
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
            closing: false
        };

        this.modal = null;
        this.measureWhitelist = ['height', 'width'];
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

    onPressEsc = (event) => {
        if (event.keyCode !== 27) {
            return;
        }

        event.stopPropagation();
        this.props.onRequestClose(event);
    };

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
    };

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
    };

    /**
     * Animation completed
     */
    onAnimationRest = () => {
        if (!this.state.active && this.state.closing) {
            setTimeout(() => this.setState({ closing: false }));
        }
    };

    /**
     * Render modal element
     * @returns {*}
     */
    renderModal() {
        const {
            component, defaultClasses, enter, leave, enterDuration, leaveDuration, onEnter, onLeave, children, dimmed, onOutsideClick, style, zIndex,
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

        const modalStyle = {
            ...style,
            position: 'fixed',
            top: positionTop
        };

        return (
            <SemanticCSSTransition
                enterDuration={enterDuration}
                leaveDuration={leaveDuration}
                enter={enter}
                leave={leave}
                onLeave={this.onAnimationRest}
                runOnMount
            >
                {this.state.active &&
                <Measure
                    accurate
                    whitelist={this.measureWhitelist}
                    shouldMeasure
                    onMeasure={this.onModalMeasure}
                    key="modal-measure"
                >
                    <Modal.Components.ModalElement
                        {...other}
                        active={this.state.active || (!this.state.active && this.state.closing)}
                        key="modal"
                        ref={ref => this.modal = ref}
                        scrolling={scrolling}
                        style={modalStyle}
                    >
                        <EventListener
                            target={document}
                            onKeyDown={this.onPressEsc}
                            onMouseDown={this.onOutsideClick}
                            onTouchStart={this.onOutsideClick}/>
                        {children}
                    </Modal.Components.ModalElement>
                </Measure>
                }
            </SemanticCSSTransition>
        );
    }

    render() {
        const { onModalOpened, onModalClosed, enterDuration, leaveDuration, zIndex } = this.props;

        // Apply layer to portal to prevent clicking outside
        const portalStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: zIndex
        };

        return (
            <Portal
                isOpened={this.state.active || (!this.state.active && this.state.closing)}
                style={portalStyle}
                onOpen={onModalOpened}
                onClose={onModalClosed}
            >
                {/* We don't want to have another transition inside Dimmer, since dimmer leave transition will block modal leave transition */}
                <div style={portalStyle}>
                    <Modal.Components.Dimmer
                        active={this.state.active}
                        page
                        noWrapChildren
                        className="modals"
                        enterDuration={enterDuration}
                        leaveDuration={leaveDuration}/>
                    {this.renderModal()}
                </div>
            </Portal>
        );
    }
}
