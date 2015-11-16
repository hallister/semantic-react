import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Animator from '../../../lib/animate';

module.exports.Animate = Animator.extend(class Animate extends Component {
    static propTypes = {
        children: React.PropTypes.node
    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);

        this.state = {
            hideComponent: true
        }
 
    }

    componentWillReceiveProps(props) {
        let animation = {};

        if (props.animation.state !== this.props.animation.state) {

            if (props.animation.state == true) {
                animation = props.animation.enterState;
            } else {
                animation = props.animation.exitState;
            }

            if (animation.handler && typeof animation.handler == 'function') {
                this.customAnimation(animation.handler.call(this), animation.name, 
                                     animation.duration, animation.options);

            } else {

                this[animation.name](animation.duration, animation.options);  
            }      

            // animation will run, unset our styling from componentDidMount
            this.setState({
                animation: animation.name,
                hideComponent: false
            });

        }
    }

    componentDidMount() {
        // we check if this component is ever going to do a slideUp or slideDown animation
        // it would be vastly better to simply not have a value in here if it is already 
        // zero.
        if ((this.props.animation.enterState.name == 'slideUp' || this.props.animation.enterState.name == 'slideUp') ||
            (this.props.animation.enterState.name == 'slideDown' || this.props.animation.enterState.name == 'slideDown')) {
            this.style = {
                height: this.getPropertyValue('height'),
                paddingTop: this.getPropertyValue('padding-top'),
                paddingBottom: this.getPropertyValue('padding-bottom'),
                marginTop: this.getPropertyValue('margin-top'),
                marginBottom: this.getPropertyValue('margin-bottom'),
                overflow: 'hidden',
                visibility: 'visible'
            };
        }
    }

    render() {
        return (
            <div 
                className={this.props.className} 
                style={Animator.getAnimatedStyle.call(this, this.state.animation)}
            >
                {this.state.hideComponent ? '' : this.props.children}
            </div>
        )
    }

    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
    getIEVersion() {
        if (document.documentMode) {
            return document.documentMode;
        } else {
            for (let i = 7; i > 4; i--) {
                let div = document.createElement('div');

                div.innerHTML = '<!--[if IE ' + i + ']><span></span><![endif]-->';

                if (div.getElementsByTagName('span').length) {
                    div = null;

                    return i;
                }
            }
        }

        return null;
    }

    /* Velocity.js */
    getPosition() {
        /* jQuery */
        function getOffsetParent() {
            let offsetParent = this.offsetParent || document;

            while (offsetParent && (!offsetParent.nodeType.toLowerCase === 'html' && offsetParent.style.position === 'static')) {
                offsetParent = offsetParent.offsetParent;
            }

            return offsetParent || document;
        }

        /* Zepto */
        let elem = this.component,
            offsetParent = getOffsetParent.apply(elem),
            offset = this.offset(),
            parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : ReactDOM.findDOMNode(offsetParent).offset()

        offset.top -= parseFloat(elem.style.marginTop) || 0;
        offset.left -= parseFloat(elem.style.marginLeft) || 0;

        if (offsetParent.style) {
            parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0
            parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0
        }

        return {
            top: offset.top - parentOffset.top,
            left: offset.left - parentOffset.left
        };
    }

    /* Velocity.js */
    getPropertyValue(property) {
        if (!this.component) {
            this.component = ReactDOM.findDOMNode(this);

            // IE8 doesn't support this
            this.computedStyle = window.getComputedStyle(this.component, null);
        }
       
        /*
        if (property == 'height' && 
            this.getPropertyValue('boxSizing').toString().toLowerCase() !== 'border-box') 
        {
            return parseFloat(this.component.offsetHeight - 
                   (parseFloat(this.getPropertyValue('borderBottomWidth')) || 0) - 
                   (parseFloat(this.getPropertyValue('paddingTop')) || 0) -
                   (parseFloat(this.getPropertyValue('paddingBottom')) || 0));
        } */

        let computedValue;

        if (property === 'borderColor') {
            property = 'borderTopColor';
        }

        if (this.getIEVersion() === 9 && property === 'filter') {
            computedValue = this.computedStyle.getPropertyValue(property);
        } else {
            computedValue = this.computedStyle[property];
        }

        // fallback to style
        if (computedValue === '' || computedValue === null) {
            computedValue = this.component.style[property];
        }

        // fixing auto return values
        if (computedValue === 'auto' && /^(top|right|bottom|left)$/i.test(property)) {
            let position = this.getPropertyValue(this.component, 'position'); 

            if (position === 'fixed' || (position === 'absolute' && /top|left/i.test(property))) {
                /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
                computedValue = this.getPosition(property); /* GET */
            }
        }

        return  computedValue;
    }

    customAnimation(config, name, duration, options) {
        Animator.animate.call(this, 
            name, 
            config[0], 
            config[1], 
            duration,
            options
        );
    }

    fadeIn(duration, options) {
        Animator.animate.call(this, 
            'fadeIn',
            {
                opacity: 0
            }, {
                opacity: 1
            }, 
            duration,
            options
        );
    }

    fadeOut(duration, options) {
        let self = this;

        Animator.animate.call(this, 
            'fadeOut',
            {
                opacity: 1
            }, {
                opacity: 0
            }, 
            duration,
            {
                easing: options.easing,
                onComplete: function() {
                    self.setState({
                        hideComponent: true
                    });
                }
            }
        );
    }

    slideDown(duration, options) {
        Animator.animate.call(this, 
            'slideDown',
            {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0
            },
            this.style, 
            duration,
            options
        );
    }

    slideUp(duration, options) {
        let self = this;

        Animator.animate.call(this, 
            'slideUp',
            this.style,
            {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                overflow: 'hidden',
                visibility: 'visibile'
            },
            duration,
            {
                easing: options.easing,
                onComplete: function() {
                    self.setState({
                        hideComponent: true
                    });
                }
            }
        );
    }

    slideIn(duration, options) {   
        Animator.animate.call(this, 
            'slideIn',
            {
                opacity: 0,
                transform: 'scaleY(0)',
                transformOrigin: 'top center',
                WebkitTransform: 'scaleY(0)',
                WebkitTransformOrigin: 'top center'
            },
            {
                opacity: 1,
                transform: 'scaleY(1)'
            },
            duration,
            options
        );
    }

    slideOut(duration, options) {
        let self = this;

        options = options ? options : {};

        let onComplete = options.onComplete;

        options.onComplete = function(e) {
            self.setState({
                hideComponent: true
            });

            if (onComplete) {
                onComplete(e);
            }
        } 

        Animator.animate.call(this, 
            'slideOut',
            {
                opacity: 1,
                transform: 'scaleY(1)',
                transformOrigin: 'top center',
                WebkitTransform: 'scaleY(1)',
                WebkitTransformOrigin: 'top center'
            },
            {
                opacity: 0,
                transform: 'scaleY(0)',
                transformOrigin: 'top center',
                WebkitTransform: 'scaleY(0)',
                WebkitTransformOrigin: 'top center'
            },
            duration,
            options
        );
    }

    slideRightIn(duration, options) {
        Animator.animate.call(this, 
            'slideRightIn',
            {
                opacity: 0,
                transform: 'scale(0, 0)',
                transformOrigin: 'left top',
                WebkitTransform: 'scale(0, 0)',
                WebkitTransformOrigin: 'left top'
            },
            {
                opacity: 1,
                transform: 'scale(1, 1)',
                transformOrigin: 'left top',
                WebkitTransform: 'scale(1, 1)',
                WebkitTransformOrigin: 'left top'
            },
            duration,
            options
        );
    }

    slideLeftOut(duration, options) {
        let self = this;

        Animator.animate.call(this, 
            'slideLeftOut',
            {
                opacity: 1,
                transform: 'scale(1, 1)',
                transformOrigin: 'left top',
                WebkitTransform: 'scale(1, 1)',
                WebkitTransformOrigin: 'left top'
            },
            {
                opacity: 0,
                transform: 'scale(0, 0)',
                transformOrigin: 'left top',
                WebkitTransform: 'scale(0, 0)',
                WebkitTransformOrigin: 'left top'
            },
            duration,
            {
                easing: options.easing,
                onComplete: function() {
                    self.setState({
                        hideComponent: true
                    });
                }
            }
        );
    }
});