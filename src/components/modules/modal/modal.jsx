import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-motion-ui-pack';
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
         * Start animation
         */
        enterAnimation: React.PropTypes.object,
        /**
         * Leave animation
         */
        leaveAnimation: React.PropTypes.object,
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
        enterAnimation: {
            scale: 1,
            opacity: 1
        },
        leaveAnimation: {
            scale: 0.5,
            opacity: 0.5
        },
        onRequestClose: () => { },
        onModalOpened: () => { },
        onModalClosed: () => { },
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
            positionTop: 0,
            scrolling: false
        };

        this.modal = null;
    }

    getChildContext() {
        return {
            isModalChild: true
        };
    }

    componentDidMount() {
        if (this.props.active) {
            // Set initial position for modal
            this.setPlacement();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.state.active) {
            if (nextProps.active) {
                this.setState({
                    active: true,
                    closing: false
                });
            } else {
                // need to wait some time to play animation, otherwise it will kill portal
                this.setState({
                    closing: true
                });
                setTimeout(() => {
                    this.setState({
                        closing: false,
                        active: false
                    })
                }, 500);
            }
        }
    }
    
    
    shouldComponentUpdate(nextProps, nextState) {
        // since we're changing state immediately after componentDidUpdate we need to prevent re-rendering loop
        return shallowCompare(this, nextProps, nextState);
    }

    componentDidUpdate() {
        // Set modal position after update
        this.setPlacement();
    }

    onPressEsc(event) {
        if (event.keyCode !== 27) {
            return;
        }

        event.stopPropagation();
        this.props.onRequestClose(event);
    }
    
    onOutsideClick(event) {
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

    onModalOpened = () => {
        document.body.classList.add('dimmable', 'dimmed');

        this.props.onModalOpened();
    }

    onModalClosed = () => {
        document.body.classList.remove('dimmable', 'dimmed');

        this.props.onModalClosed();
    }

    render() {

        const { 
            component, enterAnimation, leaveAnimation, children, dimmed, onOutsideClick, style, zIndex, 
            onModalOpened, onModalClosed, ...other 
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

        const modalPosition = {
            top: this.state.positionTop,
            position: 'fixed'
        };

        const modalStyle = style ? { ...style, ...modalPosition } : modalPosition;
        
        return (
            <Portal isOpened={this.state.active || (!this.state.active && this.state.closing)}
                    style={portalStyle}
                    onOpen={this.onModalOpened}
                    onClose={this.onModalClosed}
            >
                    <Modal.Components.Dimmer active={this.state.active}
                        page
                        noWrapChildren
                        className="modals"
                    >
                    <EventListener target={document}
                                   onKeyDown={this.onPressEsc.bind(this)}
                                   onMouseDown={this.onOutsideClick.bind(this)}
                                   onTouchStart={this.onOutsideClick.bind(this)}/>
                        <Transition component={false}
                            enter={enterAnimation}
                            leave={leaveAnimation}
                        >
                            {(this.state.active && !this.state.closing) &&
                                <Modal.Components.ModalElement {...other}
                                    ref={ref => this.modal = ref}
                                    key="modal"
                                    scrolling={this.state.scrolling}
                                    style={modalStyle}
                                >
                                    {children}
                                </Modal.Components.ModalElement>
                            }
                        </Transition>    
                    </Modal.Components.Dimmer>
            </Portal>
        );
    }

    /**
     * Calculate modal position to center on the screen
     */
    setPlacement() {
        if (!this.state.active || this.state.closing) {
            return;
        }
        if (!this.modal) {
            return;
        }

        const htmlElement = ReactDOM.findDOMNode(this.modal);
        // get element height
        if (htmlElement) {
            const height = htmlElement.offsetHeight;

            // Modal is too big, set the scrolling state then
            if (height > window.innerHeight) {
                // semantic sets top margin for scrolling modal, 
                // so no need to bother with position 
                this.setState({
                    positionTop: 0,
                    scrolling: true
                });
            } else {
                const top = window.innerHeight / 2 - height / 2;
                this.setState({
                    positionTop: top,
                    scrolling: false
                });
            }
        }

    }
}
