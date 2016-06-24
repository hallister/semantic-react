import React from 'react';
import ReactDOM from 'react-dom';
import Transition from 'react-motion-ui-pack';
import Portal from 'react-portal';
import EventListener from 'react-event-listener';
import throttle from 'lodash.throttle';
import shallowCompare from 'react-addons-shallow-compare';
import PopupElement, { POSITIONS } from './popupelement';
import { isNodeInRoot } from '../../utilities';

/**
 * Popup with animations
 */
export default class Popup extends React.Component {
    static propTypes = {
        ...PopupElement.propTypes,
        /**
         * True to display the popup. If false will be hidden
         */
        active: React.PropTypes.bool,
        /**
         * Auto position popup when needed
         */
        autoPosition: React.PropTypes.bool,
        /**
         * Offset for distance of popup from element
         */
        distanceAway: React.PropTypes.number,
        /**
         * End animation
         */
        endAnimation: React.PropTypes.object,
        /**
         * Use this position when element fails to fit on screen in all tried positions
         * If omitted, the last tried position will be used instead
         */
        lastResortPosition: React.PropTypes.string,
        /**
         * Offset in pixels from calculated position
         */
        offset: React.PropTypes.number,
        /**
         * Callback when popup wants to be closed (i.e. when offscreen or clicked outside)
         */
        onRequestClose: React.PropTypes.func,
        /**
         * When auto-positioning popup use opposite direction or adjacent as next position
         */
        prefer: React.PropTypes.oneOf(['adjacent', 'opposite']),
        /**
         * If true will prevent clicking on the other elements
         */
        preventElementClicks: React.PropTypes.bool,
        /**
         * Hide popup when target element scrolls off the screen
         */
        requestCloseWhenOffScreen: React.PropTypes.bool,
        /**
         * Start animation
         */
        startAnimation: React.PropTypes.object,
        /**
         * Target element to apply popup
         */
        target: React.PropTypes.object,
        /**
         * Overlay zIndex
         */
        zIndex: React.PropTypes.number
    };

    static defaultProps = {
        ...PopupElement.defaultProps,
        requestCloseWhenOffScreen: true,
        autoPosition: true,
        active: false,
        distanceAway: 0,
        offset: 0,
        startAnimation: {
            scale: 1
        },
        endAnimation: {
            scale: 0
        },
        onRequestClose: () => {},
        preventElementClicks: true,
        prefer: 'adjacent',
        zIndex: 1000
    };

    /* eslint-disable */
    static Components = {
        PopupElement: PopupElement
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        // Handle resize / scrolls handler
        this.handleResize = throttle(this.setPlacement.bind(this), 100);
        this.handleScroll = throttle(this.setPlacement.bind(this, true), 100);

        /**
         * Array of current tried positions
         * @type {Array}
         */
        this.positionsTried = [];
        
        this.state = {
            active: this.props.active,
            closing: false,
            // Need to save position to state, since it could be changed by autoPosition
            position: props.position, // eslint-disable-line
            positionStyleTop: '0px',
            positionStyleLeft: '0px'
        };
    }
    
    componentDidMount() {
        if (this.props.active) {
            // Set initial position for popup
            this.setPlacement();
        }
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.active !== this.state.active) {
            if (nextProps.active) {
                // Display popup, set active state
                this.setState({
                    active: true,
                    position: nextProps.position
                });
            } else {
                // need to wait to play animation and keep portal active
                this.positionsTried = [];
                this.setState({
                    closing: true
                });
                setTimeout(() => {
                    // Hide popup
                    this.setState({
                        active: false,
                        closing: false
                    });
                }, 500);
            }
        }
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // since we're changing state immediately after componentDidUpdate we need to prevent re-rendering loop
        return shallowCompare(this, nextProps, nextState);
    }

    componentDidUpdate() {
        // Set popup position after update
        this.setPlacement();
    }
    
    onOutsideClick(event) {
        if (!this.state.active || this.state.closing) {
            return;
        }
        if (!this.refs.popup || !this.refs.popup.refs.popup) {
            return;
        }
        if (isNodeInRoot(event.target, this.refs.popup.refs.popup)) {
            return;
        }
        event.stopPropagation();
        this.props.onRequestClose(event);
    }

    render() {
        // consuming position from props here since it's passing it from state
        /* eslint-disable no-use-before-define, react/prop-types */
        let { active, autoPosition, distanceAway, lastResortPosition, offset, startAnimation, endAnimation,
            onRequestClose, prefer, position, preventElementClicks, requestCloseWhenOffScreen, target,
            style, zIndex, ...other } = this.props;
        /* eslint-enable no-use-before-define, react/prop-types */
        
        // Apply invisible layer to portal if preventElementClicks is true
        const portalStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: zIndex
        };
        
        // Create style for popup
        const positionStyle = {
            left: this.state.positionStyleLeft,
            top: this.state.positionStyleTop,
            bottom: 'auto',
            right: 'auto',
            display: 'block',
            position: 'fixed' // need it to be fixed to avoid it with bloating code with many checks
        };
        
        const popupStyle = style ? { ...style, ...positionStyle } : positionStyle;
        
        return (
            <Portal isOpened={this.state.active || (!this.state.active && this.state.closing)}
                    style={this.props.preventElementClicks ? portalStyle : {}}
            >
                <EventListener target="window"
                               onResize={this.handleResize}
                               onScroll={this.handleScroll}
                >
                    <EventListener target={document}
                                   onMouseDown={this.onOutsideClick.bind(this)}
                                   onTouchStart={this.onOutsideClick.bind(this)}
                    >
                        <Transition
                            component={false}
                            enter={startAnimation}
                            leave={endAnimation}
                        >
                            {(this.state.active && !this.state.closing) &&
                            <Popup.Components.PopupElement
                                {...other}
                                key="popup"
                                position={this.state.position}
                                ref="popup"
                                style={popupStyle}/>
                            }
                        </Transition>
                    </EventListener>
                </EventListener>
            </Portal>
        );
    }

    /**
     * Return target element boundaries
     * @param element {HTMLElement}
     */
    getTargetPosition(element) {
        const rect = element.getBoundingClientRect();
        let left = rect.left;
        let top = rect.top;

        return {
            top: top,
            left: left,
            right: left + element.offsetWidth,
            bottom: top + element.offsetHeight,
            width: element.offsetWidth,
            height: element.offsetHeight,
            center: left + element.offsetWidth / 2,
            middle: top + element.offsetHeight / 2
        };
    }

    /**
     * Return popup element boundaries
     * @param element {HTMLElement}
     */
    getPopupDimensions(element) {
        return {
            width: element.offsetWidth,
            height: element.offsetHeight,
            center: element.offsetWidth / 2,
            middle: element.offsetHeight / 2
        }
    }

    /**
     * Set popup position
     */
    setPlacement(scrolling = false) {
        if (!this.state.active || this.state.closing) {
            return;
        }
        if (!this.refs.popup || !this.refs.popup.refs || !this.refs.popup.refs.popup) {
            return;
        }
        let popupHTMLElement = this.refs.popup.refs.popup;

        // If target wasn't provided, then assuming that popup used as child of element, we can obtain target then
        let targetEl = this.props.target || ReactDOM.findDOMNode(this);
        if (!targetEl) {
            return;
        }
        
        // mark current position as tried
        this.positionsTried.push(this.state.position);

        const targetElementPosition = this.getTargetPosition(targetEl);
        const popupDimensions = this.getPopupDimensions(popupHTMLElement);
        
        if (scrolling && this.props.requestCloseWhenOffScreen) {
            this.requestCloseWhenOffScreen(targetElementPosition);
        }
        
        // need to know margins
        const computedStyle = window.getComputedStyle(popupHTMLElement);
        const margins = {
            top: parseFloat(computedStyle.marginTop),
            bottom: parseFloat(computedStyle.marginBottom),
            left: parseFloat(computedStyle.marginLeft),
            right: parseFloat(computedStyle.marginRight)
        };
        // assuming that all margins should be equal, using it because if popup will be autopositioned to opposite direction, then
        // getComputedStyle will not return correct margin, since it could be not-rerendered yet
        let margin = margins.bottom || margins.right || margins.left || margins.top || 0;
        // calculate popup position
        let finalPosition = this.calculatePopupPosition(this.state.position, targetElementPosition, popupDimensions, margin);
        // Recalculate position if needed
        let nextPosition = null;
        if (this.props.autoPosition && this.positionsTried.length <= POSITIONS.length) {
            nextPosition = this.autoPosition(finalPosition, popupDimensions);
            if (nextPosition) {
                finalPosition = this.calculatePopupPosition(nextPosition, targetElementPosition, popupDimensions, margin);
            }
        }
        
        this.setState({
            position: nextPosition ? nextPosition : this.state.position, // eslint-disable-line
            positionStyleTop: `${finalPosition.top}px`,
            positionStyleLeft: `${finalPosition.left}px`
        });
        
        // apply position to popup
/*        popupHTMLElement.style.left = `${finalPosition.left}px`;
        popupHTMLElement.style.top = `${finalPosition.top}px`;
        popupHTMLElement.style.bottom = 'auto';
        popupHTMLElement.style.right = 'auto';
        popupHTMLElement.style.display = 'block';*/
        
        
    }

    /**
     * Attempt to auto-position popup
     */
    autoPosition(finalPosition, popupDimensions) {
        if (finalPosition.top < 0 || finalPosition.top + popupDimensions.height > window.innerHeight 
            || finalPosition.left < 0 || finalPosition.left + popupDimensions.width > window.innerWidth) {
            // obtain next position
            let nextPosition = this.getNextPosition();
            // if every position tried set to lastResortPosition if given
            if (!nextPosition) {
                // in case of prefer=opposite fill positionsTried array manually
                this.positionsTried = [...POSITIONS];
                if (this.props.lastResortPosition) {
                    nextPosition = this.props.lastResortPosition;
                } else {
                    nextPosition = this.state.position;
                }
            }
            return nextPosition;
        } else {
            // looks like we found a good position reset lastPositions list
            this.positionsTried = [];
        }
        return null;
    }

    /**
     * Return next popup position to try depending of current prefer style, or null if every position was tried
     */
    getNextPosition() {
        if (this.positionsTried.length >= POSITIONS.length) {
            return null;
        }
        let currentPositionIndex = POSITIONS.indexOf(this.state.position);
        if (currentPositionIndex === -1) {
            return null;
        }

        switch (this.props.prefer) {
        case 'adjacent':
        default:
            let nextPosition = null;
            // We know now that at least one untried position should be available here
            /* eslint-disable no-constant-condition */
            while (true) {
                // Reset index if we're off from array
                if (currentPositionIndex + 1 > POSITIONS.length) {
                    currentPositionIndex = 0;
                }
                nextPosition = POSITIONS[currentPositionIndex];
                if (this.positionsTried.indexOf(nextPosition) === -1) {
                    break;
                }
                currentPositionIndex++;
            }
            /* eslint-enable no-constant-condition */
            return nextPosition;
        case 'opposite':
            // just return opposite direction
            switch (this.state.position) {
            case 'left center':
                return (this.positionsTried.indexOf('right center') === -1) ? 'right center' : null;
            case 'right center':
                return (this.positionsTried.indexOf('left center') === -1) ? 'left center' : null;
            case 'top left':
                return (this.positionsTried.indexOf('bottom left') === -1) ? 'bottom left' : null;
            case 'top center':
                return (this.positionsTried.indexOf('bottom center') === -1) ? 'bottom center' : null;
            case 'top right':
                return (this.positionsTried.indexOf('bottom right') === -1) ? 'bottom right' : null;
            case 'bottom left':
                return (this.positionsTried.indexOf('top left') === -1) ? 'top left' : null;
            case 'bottom center':
                return (this.positionsTried.indexOf('top center') === -1) ? 'top center' : null;
            case 'bottom right':
                return (this.positionsTried.indexOf('top right') === -1) ? 'top right' : null;
            default:
                return null;
            }
        }
    }

    /**
     * Return true if element is off screen
     * @param targetPosition
     */
    requestCloseWhenOffScreen(targetPosition) {
        if (targetPosition.top < 0 || targetPosition.top > window.innerHeight
        || targetPosition.left < 0 || targetPosition.left > window.innerWidth) {
            this.props.onRequestClose();
        }
    }
    
    
    /**
     * Return popup position by taking account of elements boundaries and current this.state.position
     * @param position
     * @param targetPosition
     * @param popupDimensions
     * @param margin {number}
     */
    calculatePopupPosition(position, targetPosition, popupDimensions, margin) {
        let offset = this.props.offset;
        let distanceAway = this.props.distanceAway;

        switch (position) {
        case 'top left':
            return {
                left: targetPosition.left + offset,
                top: targetPosition.top - popupDimensions.height - margin - distanceAway
            };
        case 'top center':
            return {
                left: targetPosition.center - popupDimensions.center + offset,
                top: targetPosition.top - popupDimensions.height - margin - distanceAway
            };
        case 'top right':
            return {
                left: targetPosition.right - popupDimensions.width - offset,
                top: targetPosition.top - popupDimensions.height - margin - distanceAway
            };
        case 'left center':
            return {
                left: targetPosition.left - popupDimensions.width - margin - distanceAway,
                top: targetPosition.middle - popupDimensions.middle + offset
            };
        case 'right center':
            // not needed here to take margins into account
            return {
                left: targetPosition.right + distanceAway,
                top: targetPosition.middle - popupDimensions.middle + offset
            };
        case 'bottom left':
            return {
                left: targetPosition.left + offset,
                top: targetPosition.bottom + distanceAway
            };
        case 'bottom center':
            return {
                left: targetPosition.center - popupDimensions.center + offset,
                top: targetPosition.bottom + distanceAway
            };
        case 'bottom right':
            return {
                left: targetPosition.right - popupDimensions.width - offset,
                top: targetPosition.bottom + distanceAway
            };
        }
    }

}
