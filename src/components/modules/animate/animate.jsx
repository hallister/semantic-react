import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { returnTag } from '../../utilities';
import Animator from '../../../lib/animate';

module.exports.Animate = Animator.extend(class Animate extends Component {
    static propTypes = {
        children: React.PropTypes.node
    };

    static defaultProps = {

    };

    constructor(props) {
        super(props);

        // avoid flicker on firefox
        this.state = {
            style: {
                visibility: 'hidden'
            }
        }
 
    }

    componentWillReceiveProps(props) {
        let animation = {}

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
                this[animation.name](animation.duration, animation.easing);  
            }      

            // animation will run, unset our styling from componentDidMount
            this.setState({
                animation: animation.name,
                style: null
            });

        }
    }

    componentDidMount() {
        // we check if this component is ever going to do a slideUp or slideDown animation
        // we need these values if it does
        if ((this.props.animation.enterState.name == 'slideUp' || this.props.animation.enterState.name == 'slideUp') ||
            (this.props.animation.enterState.name == 'slideDown' || this.props.animation.enterState.name == 'slideDown')) {
            this.style = {
                height: this.getPropertyValue('height'),
                paddingTop:  this.getPropertyValue('padding-top'),
                paddingBottom:  this.getPropertyValue('padding-bottom'),
                marginTop:  this.getPropertyValue('margin-top'),
                marginBottom:  this.getPropertyValue('margin-bottom'),
                overflow: 'hidden'
            };
        }

        // this is to fight off Semantic's use of !important on display and visibility properties
        // dimmable's active state set's display to !important, so we use opacity instead. The 
        // visibility is to fix an issue with flickering on accordion in Firefox
        this.setState({
            style: {
                display: 'none',
                visibility: 'hidden',
                opacity: 0
            }
        });      

    }

    render() {

        return (
            <div className={this.props.className} 
                 style={this.state.style || Animator.getAnimatedStyle.call(this, this.state.animation)}>
                {this.props.children}
            </div>
        )
    }

    /* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
    getIEVersion() {
        if (document.documentMode) {
            return document.documentMode;
        } else {
            for (var i = 7; i > 4; i--) {
                var div = document.createElement("div");

                div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

                if (div.getElementsByTagName("span").length) {
                    div = null;

                    return i;
                }
            }
        }

        return undefined;
    }

    /* Velocity.js */
    getPosition(property) {
        /* jQuery */
        function getOffsetParent() {
            let offsetParent = this.offsetParent || document;

            while (offsetParent && (!offsetParent.nodeType.toLowerCase === "html" && offsetParent.style.position === "static")) {
                offsetParent = offsetParent.offsetParent;
            }

            return offsetParent || document;
        }

        /* Zepto */
        let elem = this.component,
            offsetParent = getOffsetParent.apply(elem),
            offset = this.offset(),
            parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? { top: 0, left: 0 } : $(offsetParent).offset()

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

        /* as of right now there is zero use case for this
        if (property == 'height' && 
            this.getPropertyValue('boxSizing').toString().toLowerCase() !== 'border-box') 
        {
            return parseFloat(this.component.offsetHeight - 
                   (parseFloat(this.getPropertyValue('borderBottomWidth')) || 0) - 
                   (parseFloat(this.getPropertyValue('paddingTop')) || 0) -
                   (parseFloat(this.getPropertyValue('paddingBottom')) || 0));
        }
        */

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
            computedValue = element.style[property];
        }

        // fixing auto return values
        if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
            let position = this.getPropertyValue(element, "position"); 

            if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
                /* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
                computedValue = this.getPosition(property); /* GET */
            }
        }

        return  parseFloat(computedValue);
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

    fadeIn(duration, easing) {
        Animator.animate.call(this, 
            'fadeIn',
            {
                opacity: 0
            },{
                opacity: 1
            }, 
            duration,
            {
                easing: easing
            }
        );
    }

    fadeOut(duration, easing) {
        Animator.animate.call(this, 
            'fadeOut',
            {
                opacity: 1
            },{
                opacity: 0
            }, 
            duration,
            {
                easing: easing
            }
        );
    }

    slideDown(duration, easing) {
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
            {
                easing: easing
            }
        );
    }

    slideUp(duration, easing) {
        Animator.animate.call(this, 
            'slideUp',
            this.style,
            {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                marginTop: 0,
                marginBottom: 0,
                overflow: 'hidden'
            },
            duration,
            {
                easing: easing
            }
        );
    }
});