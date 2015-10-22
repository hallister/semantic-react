import React from 'react';
import { bezier } from './curves';
import easings from './easings';
import raf from 'raf';

let noop = function() {};

export function Animate(ComposedComponent) {
    return class animation extends React.Component {
        static animatable = true;

        static displayName = ComposedComponent.displayName || ComposedComponent.name;

        static proptypes = {
            animate: React.PropTypes.bool,
            cancel: React.PropTypes.bool,
            cancelDuration: React.PropTypes.number,
            component: React.PropTypes.oneOfType([
                React.PropTypes.element,
                React.PropTypes.string
            ]),
            ease: React.PropTypes.string,
            end: React.PropTypes.oneOfType([
                React.PropTypes.bool,
                React.PropTypes.shape({
                    ease: React.PropTypes.string,
                    duration: React.PropTypes.number,
                    from: React.PropTypes.object,
                    to: React.PropTypes.object
                })
            ]),
            enter: React.PropTypes.oneOfType([
                React.PropTypes.bool,
                React.PropTypes.shape({
                    ease: React.PropTypes.string,
                    duration: React.PropTypes.number,
                    from: React.PropTypes.object,
                    to: React.PropTypes.object
                })
            ]),
            leave: React.PropTypes.oneOfType([
                React.PropTypes.bool,
                React.PropTypes.shape({
                    ease: React.PropTypes.string,
                    duration: React.PropTypes.number,
                    from: React.PropTypes.object,
                    to: React.PropTypes.object
                })
            ]),
            onComplete: React.PropTypes.func,
            start: React.PropTypes.oneOfType([
                React.PropTypes.bool,
                React.PropTypes.shape({
                    ease: React.PropTypes.string,
                    duration: React.PropTypes.number,
                    from: React.PropTypes.object,
                    to: React.PropTypes.object
                })
            ])
        };

        static defaultProps = {
            cancelDuration: 200,
            duration: 500,
            ease: 'ease',
            end: false,
            enter: false,
            leave: false,
            onComplete: noop,
            start: false
        };

        constructor(props) {
            super(props);

            this.animation = null;
            this.animating = false;
            this.callback = noop;
            this.animatingDOM = false;

            this.state = {
                animating: false,
                canceling: false,
                style: props.start ? this.parseProperties(this.props.start.from) : {}
            };
        }

        componentWillReceiveProps(props) {
            // if the animate state has change OR this isn't a stateful animation (props.start && !props.end)
            if (!this.animating && (props.animate !== this.props.animate) || (props.start && !props.end)) {
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

        componentWillEnter(callback) {
            if (this.props.enter !== false) {
                let duration;

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

        componentWillLeave(callback) {
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

        onComplete() {
            this.animating = false;

            this.animatingDOM = false;

            // this.callback handles onComplete for ReactTranssitionGroup, onComplete() is the user defined callback
            this.props.onComplete();
            this.callback();
        }

        render() {
            let { animate, cancel, cancelDuration, duration, endState, enter, leave, onComplete, startState, ease,
                  ...other } = this.props;
            let style = this.state.style;

            return (
                <ComposedComponent
                    {...other}
                    style={style}
                />
            );
        }

        stringifyProperties(anim) {
            Object.keys(anim).forEach(prop => {
                // handle function properties: translateX(3)
                if (typeof anim[prop] === 'object' && this.start[prop].type == 'function') {
                    anim[prop] = anim[prop].name + '(' + anim[prop].params.join(',') + ')';
                // handle units: { value: 0, units: '%'}
                } else if  (typeof anim[prop] === 'object' && this.start[prop].type == 'unit') {
                    anim[prop] = anim[prop].value + anim[prop].units;
                }
            });

            return anim;
        }

        parseProperties(anim) {
            let re = /([\w|\d]*)\((\d*.*)?\)/;

            Object.keys(anim).forEach(prop => {
                let value = anim[prop];
                let func = re.exec(value);

                /*
                    handles use-cases where units aren't standard
                    {
                        value: 0,
                        units: %
                    }
                */
                if (typeof anim[prop] === 'object' && anim[prop].units) {
                    anim[prop].type = 'unit'
                /*
                    handles case where the value is a CSS function
                    {
                        width: transformX(3)
                    }
                */
                } else if (func) {
                    let name = func[1];
                    let params = func[2].split(',');

                    params = params.map(item => {
                        return parseInt(item.trim());
                    });

                    anim[prop] = {
                        name: name,
                        params: params,
                        type: 'function'
                    }
                }
            });

            return anim;
        }

        animate() {
            this.animating = true;

            if (this.duration === 0) {
                this.onComplete();
            }

            this.startTime = (new Date).getTime();
            this.animation = raf(this.animator.bind(this));
        }

        animator() {
            let ease;
            let time = (new Date).getTime();
            let delta = (time - this.startTime) / (this.duration || this.props.duration);
            let deltaState = {};

            // linear, swing and spring are seperate functions
            if (this.ease == 'linear' || this.ease == 'swing' || this.ease == 'spring') {
                ease = easings[this.ease];
            // otherwise use the curve generator
            } else {
                ease = bezier.apply(this, easings[this.ease]);
            }

            delta = delta > 1 ? 1 : delta;

            Object.keys(this.start).forEach(prop => {

                // handle function values: translateX(3)
                if (typeof this.start[prop] === 'object' && this.start[prop].type == 'function') {
                    deltaState[prop] = Object.assign({}, this.start[prop]);

                    deltaState[prop].params = this.start[prop].params.map((item, index) => {
                        return item + (this.end[prop].params[index] - item) * ease(delta);
                    });

                // handles unit values: width: { value: 0, units: '%' }
                } else if (typeof this.start[prop] === 'object' && this.start[prop].type == 'unit') {
                    deltaState[prop] = Object.assign({}, this.start[prop]);
                    deltaState[prop].value =  this.start[prop].value + (this.end[prop].value - this.start[prop].value) * ease(delta);

                // handles numeric values { width: 0 }
                } else if (typeof this.start[prop] !== 'string') {
                    deltaState[prop] = this.start[prop] + (this.end[prop] - this.start[prop]) * ease(delta);

                // anything else we just leave alone
                } else {
                    deltaState[prop] = this.start[prop];
                }

            });

            this.setState(
                {
                    style: this.stringifyProperties(deltaState)
                }
            );

            // we can only cancel if we aren't already
            if (this.props.cancel && !this.state.canceling && !this.animatingDOM) {
                raf.cancel(this.animation);

                // animate from the state we canceled at, back to the start
                this.end = this.start;
                this.start = deltaState;
                this.duration = this.props.cancelDuration;

                // prevent canceling from doing anything
                this.setState(
                    {
                        canceling: true
                    }
                );

                this.animate();
            } else if (delta >= 1) {
                raf.cancel(this.animation);

                this.onComplete();
            } else {
                this.animation = raf(this.animator.bind(this));
            }
        }
    };
}
