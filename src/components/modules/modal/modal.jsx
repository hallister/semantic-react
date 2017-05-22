import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';
import throttle from 'lodash.throttle';
import EventListener from 'react-event-listener';
import { isNodeInRoot } from '../../utilities';
import Dimmer from '../dimmer/dimmer';
import ModalElement from './modalelement';
import SemanticCSSTransition from '../../animation/animation';
import AnimationProps from '../../animation/animationProps';

const MIN_MODAL_TOP_POSITION = 35;

/**
 * Modal is modal
 */
export default class Modal extends React.PureComponent {
    static propTypes = {
        ...ModalElement.propTypes,
        ...AnimationProps.propTypes,
        /**
         * Dimmer variations
         */
        dimmed: PropTypes.oneOf(['blurring', 'inverted', 'blurring inverted']),
        /**
         * Callback from outside modal click
         */
        onRequestClose: PropTypes.func,
        /**
         * Callback for modal opening
         */
        onModalOpened: PropTypes.func,
        /**
         * Callback for modal closing
         */
        onModalClosed: PropTypes.func,
        /**
         * Overlay zIndex
         */
        zIndex: PropTypes.number
    };


    static childContextTypes = {
        isModalChild: PropTypes.bool
    };

    static defaultProps = {
        ...ModalElement.defaultProps,
        ...AnimationProps.defaultProps,
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
            active: props.active,
            closing: false,
            marginTop: 0,
            scrolling: false
        };

        this.modal = null;
        this.portalRef = null;
        this.handleResize = throttle(this.setPlacement.bind(this), 100);
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
     * Animation completed
     */
    onAnimationRest = () => {
        if (!this.state.active && this.state.closing) {
            setTimeout(() => this.setState({ closing: false }));
        }
    };
    
    onPortalOpened = () => {
        const { onModalOpened } = this.props;
        onModalOpened();
        this.setPlacement();
    }
    
    setPlacement = () => {
        const modalElement = ReactDOM.findDOMNode(this.modal);
        if (modalElement) {
            // Help to folks who're using inline-to-style libraries for styling
            setTimeout(() => {
                const height = modalElement.offsetHeight;
                const scrolling = height >= window.innerHeight;
                const marginTop = -Math.round(height / 2);
                this.setState({ marginTop: marginTop, scrolling: scrolling });
            }, 0);
        }
    }

    /**
     * Render modal element
     * @returns {*}
     */
    renderModal() {
        const {
            component, defaultClasses, enter, leave, enterDuration, leaveDuration, onEnter, onLeave, children, dimmed, onOutsideClick, style, zIndex,
            onModalOpened, onModalClosed, onRequestClose, onAnimationStyle, ...other
        } = this.props;
        
        const { scrolling, marginTop } = this.state;

        const modalStyle = {
            ...style
            // position: 'fixed',
        };
        if (scrolling) {
            modalStyle.top = 0
        } else {
            modalStyle.marginTop = `${marginTop}px`;
        }

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
                    <Modal.Components.ModalElement
                        {...other}
                        active={this.state.active || (!this.state.active && this.state.closing)}
                        key="modal"
                        ref={ref => this.modal = ref}
                        style={modalStyle}
                        scrolling={scrolling}
                    >
                        <EventListener
                            target="window"
                            onResize={this.handleResize}/>
                        <EventListener
                            target={document}
                            onKeyDown={this.onPressEsc}
                            onMouseDown={this.onOutsideClick}
                            onTouchStart={this.onOutsideClick}/>
                        {children}
                    </Modal.Components.ModalElement>
                }
            </SemanticCSSTransition>
        );
    }

    render() {
        const { onModalOpened, onModalClosed, enterDuration, leaveDuration, zIndex } = this.props;
        const { scrolling } = this.state;

        // Apply layer to portal to prevent clicking outside
        const portalStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: zIndex
        };
        if (scrolling) {
            portalStyle.overflow = 'auto';
        }

        return (
            <Portal
                isOpened={this.state.active || (!this.state.active && this.state.closing)}
                onOpen={this.onPortalOpened}
                onClose={onModalClosed}
            >
                {/* We don't want to have another transition inside Dimmer, since dimmer leave transition will block modal leave transition */}
                <div style={portalStyle} className="dimmer modals">
                    <Modal.Components.Dimmer
                        active={this.state.active}
                        page
                        noWrapChildren
                        style={{ zIndex: 0 }} // Should be ok
                        enterDuration={enterDuration}
                        leaveDuration={leaveDuration}/>
                    {this.renderModal()}
                </div>
            </Portal>
        );
    }
}
