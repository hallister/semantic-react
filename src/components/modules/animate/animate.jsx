import React, { Component } from 'react';
import { returnTag } from '../../utilities';
import Animator from '../../../lib/animate';

module.exports.Animate = Animator.extend(class Animate extends Component {
    constructor(props) {
        super(props);

        // make sure the object isn't displayed when initally 
        // rendered. 
        this.style = {
            opacity: 0,
            visibility: 'hidden',
            display: 'none'
        }

        this.state = {
            animationName: 'fadeIn',
            isAnimating: false,
            propState: null
        }
    }

    componentWillReceiveProps(props) {
        if (props.propState !== this.props.propState) {

            this.style = undefined;

            if (props.propState == true) {
                this[props.onTrue]();
                this.setState({
                    animationName: props.onTrue
                })
            } else {
                this[props.onFalse]();
                this.setState({
                    animationName: props.onFalse
                })
            }
        }
    }

    fadeIn() {
        Animator.animate.call(this, 
            'fadeIn',
            {opacity: 0}, 
            {opacity: 1}, 
            250,
            {easing: 'linear'}
        );
    }

    fadeOut() {
        Animator.animate.call(this, 
            'fadeOut',
            {opacity: 1}, 
            {opacity: 0}, 
            250,
            {easing: 'linear'}
        );
    }

    render() {
        return (
            <div className={this.props.className} 
                 style={this.style || Animator.getAnimatedStyle.call(this, this.state.animationName)}>
                 {this.props.children}
            </div>
        )
    }
});