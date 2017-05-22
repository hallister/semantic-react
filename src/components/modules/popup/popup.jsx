import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';
import EventListener from 'react-event-listener';
import throttle from 'lodash.throttle';
import PopupElement, { POSITIONS } from './popupelement';
import { isNodeInRoot } from '../../utilities';
import SemanticCSSTransition from '../../animation/animation';
import AnimationProps from '../../animation/animationProps';

/**
 * Popup with animations
 */
export default class Popup extends React.PureComponent {
    static propTypes = {
        ...PopupElement.propTypes,
        ...AnimationProps.propTypes,
        /**
         * True to display the popup. If false will be hidden
         */
        active: PropTypes.bool,
        /**
         * Auto position popup when needed
         */
        autoPosition: PropTypes.bool,
        /**
         * Offset for distance of popup from element
         */
        distanceAway: PropTypes.number,
        /**
         * Use this position when element fails to fit on screen in all tried positions
         * If omitted, the last tried position will be used instead
         */
        lastResortPosition: PropTypes.string,
        /**
         * Offset in pixels from calculated position
         */
        offset: PropTypes.number,
        /**
         * Callback when popup wants to be closed (i.e. when offscreen or clicked outside)
         */
        onRequestClose: PropTypes.func,
        /**
         * When auto-positioning popup use opposite direction or adjacent as next position
         */
        prefer: PropTypes.oneOf(['adjacent', 'opposite']),
        /**
         * If true will prevent clicking on the other elements
         */
        preventElementClicks: PropTypes.bool,
        /**
         * Hide popup when target element scrolls off the screen
         */
        requestCloseWhenOffScreen: PropTypes.bool,
        /**
         * Target element to apply popup
         */
        target: PropTypes.object.isRequired,
        /**
         * Overlay zIndex
         */
        zIndex: PropTypes.number
    };

    static defaultProps = {
        ...PopupElement.defaultProps,
        ...AnimationProps.defaultProps,
        requestCloseWhenOffScreen: true,
        autoPosition: true,
        active: false,
        distanceAway: 0,
        offset: 0,
        enter: 'scale in',
        leave: 'scale out',
        enterDuration: 200,
        leaveDuration: 200,
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

        this.popupRef = null;
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
                this.positionsTried = [];
                this.setState({
                    active: false,
                    closing: true
                });
            }
        }
    }

    componentDidUpdate() {
        // Set popup position after update
        this.setPlacement();
    }

    onOutsideClick = (event) => {
        if (!this.state.active || this.state.closing) {
            return;
        }
        if (!this.popupRef || !this.popupRef.popupEl) {
            return;
        }
        if (isNodeInRoot(event.target, this.popupRef.popupEl)) {
            return;
        }
        event.stopPropagation();
        this.props.onRequestClose(event);
    }

    onAnimationRest = () => {
        if (!this.state.active && this.state.closing) {
            // delay to the next tick otherwise react will throw a warning
            setTimeout(() => {
                this.setState({ closing: false })
            }, 0);
        }
    }

    /**
     * Renders popup
     */
    renderPopup() {
        // consuming position from props here since it's passing it from state
        /* eslint-disable no-use-before-define, react/prop-types */
        const {
            active, autoPosition, distanceAway, lastResortPosition, offset, enter, leave, enterDuration, leaveDuration,
            onRequestClose, prefer, position, preventElementClicks, requestCloseWhenOffScreen, target, style, zIndex, ...other
        } = this.props;
        /* eslint-enable no-use-before-define, react/prop-types */

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
            <Popup.Components.PopupElement
                {...other}
                key="popup"
                position={this.state.position}
                ref={ref => this.popupRef = ref}
                style={popupStyle} />
        );
    }

    render() {
        // consuming position from props here since it's passing it from state
        /* eslint-disable no-use-before-define, react/prop-types */
        const { enter, leave, enterDuration, leaveDuration, preventElementClicks, zIndex } = this.props;
        /* eslint-enable no-use-before-define, react/prop-types */

        // Apply invisible layer to portal if preventElementClicks is true
        const portalStyle = preventElementClicks ? {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: zIndex
        } : {};

        return (
            <Portal
                isOpened={this.state.active || this.state.closing}
            >
                <div style={portalStyle}>
                    <EventListener
                        target="window"
                        onResize={this.handleResize}
                        onScroll={this.handleScroll}/>
                    <EventListener
                        target={document}
                        onMouseDown={this.onOutsideClick}
                        onTouchStart={this.onOutsideClick}/>
                    <SemanticCSSTransition
                        enter={enter}
                        leave={leave}
                        enterDuration={enterDuration}
                        leaveDuration={leaveDuration}
                        runOnMount
                        onLeave={this.onAnimationRest}
                    >
                        {this.state.active && this.renderPopup()}
                    </SemanticCSSTransition>
                </div>
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
        if (!this.popupRef || !this.popupRef.popupEl) {
            return;
        }
        let popupHTMLElement = this.popupRef.popupEl;

        const target = this.props.target;

        // Obtain target DOM element if provided react element instead
        let targetEl = target instanceof Element ? target : ReactDOM.findDOMNode(target);
        if (!targetEl) {
            return;
        }
        
        // Help to folks who're using inline-to-style libraries for styling
        setTimeout(() => {
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
                positionStyleTop: `${Math.round(finalPosition.top)}px`,
                positionStyleLeft: `${Math.round(finalPosition.left)}px`
            }, 0);
        });
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
