'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Animate = Animate;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _curves = require('./curves');

var _easings = require('./easings');

var _easings2 = _interopRequireDefault(_easings);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

function Animate(ComposedComponent) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(animation, _React$Component);

        function animation(props) {
            _classCallCheck(this, animation);

            var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(animation).call(this, props));

            _this.animation = null;
            _this.animating = false;
            _this.callback = noop;
            _this.animatingDOM = false;

            _this.state = {
                animating: false,
                canceling: false,
                style: props.start ? _this.parseProperties(_this.props.start.from) : {}
            };
            return _this;
        }

        _createClass(animation, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(props) {
                // if the animate state has change OR this isn't a stateful animation (props.start && !props.end)
                if (!this.animating && props.animate !== this.props.animate || props.start && !props.end) {
                    // non-stateful animations (such as progress) current use this. It's not very clear on
                    // how this works. Probably need to handle this as a different use case.
                    if (props.animate && props.start !== false) {
                        this.start = this.parseProperties(props.start.from);
                        this.end = this.parseProperties(props.start.to);
                        this.duration = props.start.duration || this.props.duration;
                        this.ease = props.start.ease || props.ease;
                    } else if (!props.animate && props.end !== false) {
                        this.start = this.parseProperties(props.end.from);
                        this.end = this.parseProperties(props.end.to);
                        this.duration = props.end.duration || this.props.duration;
                        this.ease = props.end.ease || props.ease;
                    }

                    this.animate();
                }
            }
        }, {
            key: 'componentWillEnter',
            value: function componentWillEnter(callback) {
                if (this.props.enter !== false) {
                    var duration = undefined;

                    // duration can be a prop or a value in the animation object
                    if (typeof this.props.enter.duration === 'number') {
                        duration = this.props.enter.duration;
                    } else {
                        duration = this.props.duration;
                    }

                    this.start = this.parseProperties(this.props.enter.from);
                    this.end = this.parseProperties(this.props.enter.to);
                    this.duration = duration;
                    this.ease = this.props.enter.ease || this.props.ease;
                    this.callback = callback;
                    this.animatingDOM = true;

                    this.animate();
                }
            }
        }, {
            key: 'componentWillLeave',
            value: function componentWillLeave(callback) {
                if (this.props.leave !== false) {
                    this.start = this.parseProperties(this.props.leave.from);
                    this.end = this.parseProperties(this.props.leave.to);
                    this.duration = this.props.enter.duration || this.props.duration;
                    this.ease = this.props.enter.ease || this.props.ease;
                    this.callback = callback;
                    this.animatingDOM = true;

                    this.animate();
                }
            }
        }, {
            key: 'onComplete',
            value: function onComplete() {
                this.animating = false;

                this.animatingDOM = false;

                // this.callback handles onComplete for ReactTranssitionGroup, onComplete() is the user defined callback
                this.props.onComplete();
                this.callback();
            }
        }, {
            key: 'render',
            value: function render() {
                /* eslint-disable no-use-before-define */
                var _props = this.props;
                var animate = _props.animate;
                var cancel = _props.cancel;
                var cancelDuration = _props.cancelDuration;
                var duration = _props.duration;
                var enter = _props.enter;
                var end = _props.end;
                var leave = _props.leave;
                var onComplete = _props.onComplete;
                var start = _props.start;
                var ease = _props.ease;

                var other = _objectWithoutProperties(_props, ['animate', 'cancel', 'cancelDuration', 'duration', 'enter', 'end', 'leave', 'onComplete', 'start', 'ease']);
                /* eslint-enable no-use-before-define */


                var style = Object.assign({}, this.state.style, this.props.style);

                return _react2.default.createElement(ComposedComponent, _extends({}, other, {
                    style: style }));
            }
        }, {
            key: 'stringifyProperties',
            value: function stringifyProperties(anim) {
                var _this2 = this;

                Object.keys(anim).forEach(function (prop) {
                    // handle function properties: translateX(3)
                    if (_typeof(anim[prop]) === 'object' && _this2.start[prop].type == 'function') {
                        anim[prop] = anim[prop].name + '(' + anim[prop].params.join(',') + ')';
                        // handle units: { value: 0, units: '%'}
                    } else if (_typeof(anim[prop]) === 'object' && _this2.start[prop].type == 'unit') {
                            anim[prop] = anim[prop].value + anim[prop].units;
                        }
                });

                return anim;
            }
        }, {
            key: 'parseProperties',
            value: function parseProperties(anim) {
                var re = /([\w|\d]*)\((\d*.*)?\)/;

                Object.keys(anim).forEach(function (prop) {
                    var value = anim[prop];
                    var func = re.exec(value);

                    /*
                        handles use-cases where units aren't standard
                        {
                            value: 0,
                            units: %
                        }
                    */
                    if (_typeof(anim[prop]) === 'object' && anim[prop].units) {
                        anim[prop].type = 'unit';
                        /*
                            handles case where the value is a CSS function
                            {
                                width: transformX(3)
                            }
                        */
                    } else if (func) {
                            var name = func[1];
                            var params = func[2].split(',');

                            params = params.map(function (item) {
                                return parseInt(item.trim());
                            });

                            anim[prop] = {
                                name: name,
                                params: params,
                                type: 'function'
                            };
                        }
                });

                return anim;
            }
        }, {
            key: 'animate',
            value: function animate() {
                this.animating = true;

                if (this.duration === 0) {
                    this.onComplete();
                }

                this.startTime = new Date().getTime();
                this.animation = (0, _raf2.default)(this.animator.bind(this));
            }
        }, {
            key: 'animator',
            value: function animator() {
                var _this3 = this;

                var ease = undefined;
                var time = new Date().getTime();
                var delta = (time - this.startTime) / (this.duration || this.props.duration);
                var deltaState = {};

                // linear, swing and spring are seperate functions
                if (this.ease == 'linear' || this.ease == 'swing' || this.ease == 'spring') {
                    ease = _easings2.default[this.ease];
                    // otherwise use the curve generator
                } else {
                        ease = _curves.bezier.apply(this, _easings2.default[this.ease]);
                    }

                delta = delta > 1 ? 1 : delta;

                Object.keys(this.start).forEach(function (prop) {

                    // handle function values: translateX(3)
                    if (_typeof(_this3.start[prop]) === 'object' && _this3.start[prop].type == 'function') {
                        deltaState[prop] = Object.assign({}, _this3.start[prop]);

                        deltaState[prop].params = _this3.start[prop].params.map(function (item, index) {
                            return item + (_this3.end[prop].params[index] - item) * ease(delta);
                        });

                        // handles unit values: width: { value: 0, units: '%' }
                    } else if (_typeof(_this3.start[prop]) === 'object' && _this3.start[prop].type == 'unit') {
                            deltaState[prop] = Object.assign({}, _this3.start[prop]);
                            deltaState[prop].value = _this3.start[prop].value + (_this3.end[prop].value - _this3.start[prop].value) * ease(delta);

                            // handles numeric values { width: 0 }
                        } else if (typeof _this3.start[prop] !== 'string') {
                                deltaState[prop] = _this3.start[prop] + (_this3.end[prop] - _this3.start[prop]) * ease(delta);

                                // anything else we just leave alone
                            } else {
                                    deltaState[prop] = _this3.start[prop];
                                }
                });

                this.setState({
                    style: this.stringifyProperties(deltaState)
                });

                // we can only cancel if we aren't already
                if (this.props.cancel && !this.state.canceling && !this.animatingDOM) {
                    _raf2.default.cancel(this.animation);

                    // animate from the state we canceled at, back to the start
                    this.end = this.start;
                    this.start = deltaState;
                    this.duration = this.props.cancelDuration;

                    // prevent canceling from doing anything
                    this.setState({
                        canceling: true
                    });

                    this.animate();
                } else if (delta >= 1) {
                    _raf2.default.cancel(this.animation);

                    this.onComplete();
                } else {
                    this.animation = (0, _raf2.default)(this.animator.bind(this));
                }
            }
        }]);

        return animation;
    }(_react2.default.Component), _class.animatable = true, _class.displayName = ComposedComponent.displayName || ComposedComponent.name, _class.propTypes = {
        animate: _react2.default.PropTypes.bool,
        cancel: _react2.default.PropTypes.bool,
        cancelDuration: _react2.default.PropTypes.number,
        component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.string]),
        duration: _react2.default.PropTypes.number,
        ease: _react2.default.PropTypes.string,
        end: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
            ease: _react2.default.PropTypes.string,
            duration: _react2.default.PropTypes.number,
            from: _react2.default.PropTypes.object,
            to: _react2.default.PropTypes.object
        })]),
        enter: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
            ease: _react2.default.PropTypes.string,
            duration: _react2.default.PropTypes.number,
            from: _react2.default.PropTypes.object,
            to: _react2.default.PropTypes.object
        })]),
        leave: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
            ease: _react2.default.PropTypes.string,
            duration: _react2.default.PropTypes.number,
            from: _react2.default.PropTypes.object,
            to: _react2.default.PropTypes.object
        })]),
        onComplete: _react2.default.PropTypes.func,
        start: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.shape({
            ease: _react2.default.PropTypes.string,
            duration: _react2.default.PropTypes.number,
            from: _react2.default.PropTypes.object,
            to: _react2.default.PropTypes.object
        })]),
        style: _react2.default.PropTypes.object
    }, _class.defaultProps = {
        cancelDuration: 200,
        duration: 500,
        ease: 'ease',
        end: false,
        enter: false,
        leave: false,
        onComplete: noop,
        start: false
    }, _temp;
}
//# sourceMappingURL=animate.js.map