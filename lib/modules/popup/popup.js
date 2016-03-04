'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Popup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactMotionUiPack = require('react-motion-ui-pack');

var _reactMotionUiPack2 = _interopRequireDefault(_reactMotionUiPack);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _reactEventListener = require('react-event-listener');

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _lodash = require('lodash.throttle');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _popupelement = require('./popupelement');

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const shallowCompare = require('react-addons-shallow-compare');

/**
 * Popup with animations
 */
var Popup = exports.Popup = (_temp = _class = function (_React$Component) {
    _inherits(Popup, _React$Component);

    function Popup(props) {
        _classCallCheck(this, Popup);

        // Handle resize / scrolls handler

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, props));

        _this.handleResize = (0, _lodash2.default)(_this.setPlacement.bind(_this), 100);
        _this.handleScroll = (0, _lodash2.default)(_this.setPlacement.bind(_this, true), 100);

        /**
         * Array of current tried positions
         * @type {Array}
         */
        _this.positionsTried = [];

        _this.state = {
            active: _this.props.active,
            closing: false,
            // Need to save position to state, since it could be changed by autoPosition
            position: props.position, // eslint-disable-line
            positionStyleTop: '0px',
            positionStyleLeft: '0px'
        };
        return _this;
    }

    _createClass(Popup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.active) {
                // Set initial position for popup
                this.setPlacement();
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

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
                    setTimeout(function () {
                        // Hide popup
                        _this2.setState({
                            active: false,
                            closing: false
                        });
                    }, 500);
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            // since we're changing state immediately after componentDidUpdate we need to prevent re-rendering loop
            return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // Set popup position after update
            this.setPlacement();
        }
    }, {
        key: 'onOutsideClick',
        value: function onOutsideClick(event) {
            if (!this.state.active || this.state.closing) {
                return;
            }
            if (!this.refs.popup || !this.refs.popup.refs.popup) {
                return;
            }
            if ((0, _utilities.isNodeInRoot)(event.target, this.refs.popup.refs.popup)) {
                return;
            }
            event.stopPropagation();
            this.props.onRequestClose(event);
        }
    }, {
        key: 'render',
        value: function render() {
            // consuming position from props here since it's passing it from state
            /* eslint-disable no-use-before-define, react/prop-types */
            var _props = this.props;
            var active = _props.active;
            var autoPosition = _props.autoPosition;
            var distanceAway = _props.distanceAway;
            var lastResortPosition = _props.lastResortPosition;
            var offset = _props.offset;
            var startAnimation = _props.startAnimation;
            var endAnimation = _props.endAnimation;
            var onRequestClose = _props.onRequestClose;
            var prefer = _props.prefer;
            var position = _props.position;
            var preventElementClicks = _props.preventElementClicks;
            var requestCloseWhenOffScreen = _props.requestCloseWhenOffScreen;
            var target = _props.target;
            var style = _props.style;

            var other = _objectWithoutProperties(_props, ['active', 'autoPosition', 'distanceAway', 'lastResortPosition', 'offset', 'startAnimation', 'endAnimation', 'onRequestClose', 'prefer', 'position', 'preventElementClicks', 'requestCloseWhenOffScreen', 'target', 'style']);
            /* eslint-enable no-use-before-define, react/prop-types */

            // Apply invisible layer to portal if preventElementClicks is true


            var portalStyle = {
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            };

            // Create style for popup
            var positionStyle = {
                left: this.state.positionStyleLeft,
                top: this.state.positionStyleTop,
                bottom: 'auto',
                right: 'auto',
                display: 'block',
                position: 'fixed' // need it to be fixed to avoid it with bloating code with many checks
            };

            var popupStyle = style ? [style, positionStyle] : positionStyle;

            return _react2.default.createElement(
                _reactPortal2.default,
                { isOpened: this.state.active || !this.state.active && this.state.closing,
                    style: this.props.preventElementClicks ? portalStyle : {}
                },
                _react2.default.createElement(
                    'noscript',
                    null,
                    _react2.default.createElement(_reactEventListener2.default, { elementName: 'document',
                        onMouseDown: this.onOutsideClick.bind(this),
                        onTouchStart: this.onOutsideClick.bind(this) }),
                    _react2.default.createElement(_reactEventListener2.default, { elementName: 'window',
                        onResize: this.handleResize,
                        onScroll: this.handleScroll }),
                    _react2.default.createElement(
                        _reactMotionUiPack2.default,
                        {
                            component: false,
                            enter: startAnimation,
                            leave: endAnimation
                        },
                        this.state.active && !this.state.closing && _react2.default.createElement(_popupelement.PopupElement, _extends({}, other, {
                            key: 'popup',
                            position: this.state.position,
                            style: popupStyle,
                            ref: 'popup' }))
                    )
                )
            );
        }

        /**
         * Return target element boundaries
         * @param element {HTMLElement}
         */

    }, {
        key: 'getTargetPosition',
        value: function getTargetPosition(element) {
            var rect = element.getBoundingClientRect();
            var left = rect.left;
            var top = rect.top;

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

    }, {
        key: 'getPopupDimensions',
        value: function getPopupDimensions(element) {
            return {
                width: element.offsetWidth,
                height: element.offsetHeight,
                center: element.offsetWidth / 2,
                middle: element.offsetHeight / 2
            };
        }

        /**
         * Set popup position
         */

    }, {
        key: 'setPlacement',
        value: function setPlacement() {
            var scrolling = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            if (!this.state.active || this.state.closing) {
                return;
            }
            if (!this.refs.popup || !this.refs.popup.refs || !this.refs.popup.refs.popup) {
                return;
            }
            var popupHTMLElement = this.refs.popup.refs.popup;

            // If target wasn't provided, then assuming that popup used as child of element, we can obtain target then
            var targetEl = this.props.target || _reactDom2.default.findDOMNode(this);
            if (!targetEl) {
                return;
            }

            // mark current position as tried
            this.positionsTried.push(this.state.position);

            var targetElementPosition = this.getTargetPosition(targetEl);
            var popupDimensions = this.getPopupDimensions(popupHTMLElement);

            if (scrolling && this.props.requestCloseWhenOffScreen) {
                this.requestCloseWhenOffScreen(targetElementPosition);
            }

            // need to know margins
            var computedStyle = window.getComputedStyle(popupHTMLElement);
            var margins = {
                top: parseFloat(computedStyle.marginTop),
                bottom: parseFloat(computedStyle.marginBottom),
                left: parseFloat(computedStyle.marginLeft),
                right: parseFloat(computedStyle.marginRight)
            };
            // assuming that all margins should be equal, using it because if popup will be autopositioned to opposite direction, then
            // getComputedStyle will not return correct margin, since it could be not-rerendered yet
            var margin = margins.bottom || margins.right || margins.left || margins.top || 0;
            // calculate popup position
            var finalPosition = this.calculatePopupPosition(this.state.position, targetElementPosition, popupDimensions, margin);
            // Recalculate position if needed
            var nextPosition = null;
            if (this.props.autoPosition && this.positionsTried.length <= _popupelement.POSITIONS.length) {
                nextPosition = this.autoPosition(finalPosition, popupDimensions);
                if (nextPosition) {
                    finalPosition = this.calculatePopupPosition(nextPosition, targetElementPosition, popupDimensions, margin);
                }
            }

            this.setState({
                position: nextPosition ? nextPosition : this.state.position, // eslint-disable-line
                positionStyleTop: finalPosition.top + 'px',
                positionStyleLeft: finalPosition.left + 'px'
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

    }, {
        key: 'autoPosition',
        value: function autoPosition(finalPosition, popupDimensions) {
            if (finalPosition.top < 0 || finalPosition.top + popupDimensions.height > window.innerHeight || finalPosition.left < 0 || finalPosition.left + popupDimensions.width > window.innerWidth) {
                // obtain next position
                var nextPosition = this.getNextPosition();
                // if every position tried set to lastResortPosition if given
                if (!nextPosition) {
                    // in case of prefer=opposite fill positionsTried array manually
                    this.positionsTried = [].concat(_toConsumableArray(_popupelement.POSITIONS));
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

    }, {
        key: 'getNextPosition',
        value: function getNextPosition() {
            if (this.positionsTried.length >= _popupelement.POSITIONS.length) {
                return null;
            }
            var currentPositionIndex = _popupelement.POSITIONS.indexOf(this.state.position);
            if (currentPositionIndex === -1) {
                return null;
            }

            switch (this.props.prefer) {
                case 'adjacent':
                default:
                    var nextPosition = null;
                    // We know now that at least one untried position should be available here
                    /* eslint-disable */
                    while (true) {
                        // Reset index if we're off from array
                        if (currentPositionIndex + 1 > _popupelement.POSITIONS.length) {
                            currentPositionIndex = 0;
                        }
                        nextPosition = _popupelement.POSITIONS[currentPositionIndex];
                        if (this.positionsTried.indexOf(nextPosition) === -1) {
                            break;
                        }
                        currentPositionIndex++;
                    }
                    /* eslint-enable */
                    return nextPosition;
                case 'opposite':
                    // just return opposite direction
                    switch (this.state.position) {
                        case 'left center':
                            return this.positionsTried.indexOf('right center') === -1 ? 'right center' : null;
                        case 'right center':
                            return this.positionsTried.indexOf('left center') === -1 ? 'left center' : null;
                        case 'top left':
                            return this.positionsTried.indexOf('bottom left') === -1 ? 'bottom left' : null;
                        case 'top center':
                            return this.positionsTried.indexOf('bottom center') === -1 ? 'bottom center' : null;
                        case 'top right':
                            return this.positionsTried.indexOf('bottom right') === -1 ? 'bottom right' : null;
                        case 'bottom left':
                            return this.positionsTried.indexOf('top left') === -1 ? 'top left' : null;
                        case 'bottom center':
                            return this.positionsTried.indexOf('top center') === -1 ? 'top center' : null;
                        case 'bottom right':
                            return this.positionsTried.indexOf('top right') === -1 ? 'top right' : null;
                        default:
                            return null;
                    }
            }
        }

        /**
         * Return true if element is off screen
         * @param targetPosition
         */

    }, {
        key: 'requestCloseWhenOffScreen',
        value: function requestCloseWhenOffScreen(targetPosition) {
            if (targetPosition.top < 0 || targetPosition.top > window.innerHeight || targetPosition.left < 0 || targetPosition.left > window.innerWidth) {
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

    }, {
        key: 'calculatePopupPosition',
        value: function calculatePopupPosition(position, targetPosition, popupDimensions, margin) {
            var offset = this.props.offset;
            var distanceAway = this.props.distanceAway;

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
    }]);

    return Popup;
}(_react2.default.Component), _class.propTypes = _extends({}, _popupelement.PopupElement.propTypes, {
    /**
     * True to display the popup. If false will be hidden
     */
    active: _react2.default.PropTypes.bool,
    /**
     * Auto position popup when needed
     */
    autoPosition: _react2.default.PropTypes.bool,
    /**
     * Offset for distance of popup from element
     */
    distanceAway: _react2.default.PropTypes.number,
    /**
     * End animation
     */
    endAnimation: _react2.default.PropTypes.object,
    /**
     * Use this position when element fails to fit on screen in all tried positions
     * If omitted, the last tried position will be used instead
     */
    lastResortPosition: _react2.default.PropTypes.string,
    /**
     * Offset in pixels from calculated position
     */
    offset: _react2.default.PropTypes.number,
    /**
     * Callback when popup wants to be closed (i.e. when offscreen or clicked outside)
     */
    onRequestClose: _react2.default.PropTypes.func,
    /**
     * When auto-positioning popup use opposite direction or adjacent as next position
     */
    prefer: _react2.default.PropTypes.oneOf(['adjacent', 'opposite']),
    /**
     * If true will prevent clicking on the other elements
     */
    preventElementClicks: _react2.default.PropTypes.bool,
    /**
     * Hide popup when target element scrolls off the screen
     */
    requestCloseWhenOffScreen: _react2.default.PropTypes.bool,
    /**
     * Start animation
     */
    startAnimation: _react2.default.PropTypes.object,
    /**
     * Target element to apply popup
     */
    target: _react2.default.PropTypes.object
}), _class.defaultProps = _extends({}, _popupelement.PopupElement.defaultProps, {
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
    onRequestClose: function onRequestClose() {},
    preventElementClicks: true,
    prefer: 'adjacent'
}), _temp);
//# sourceMappingURL=popup.js.map