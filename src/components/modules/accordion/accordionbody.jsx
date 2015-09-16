import React, { Component } from 'react';
import { Animate } from '../../modules';
import classNames from 'classnames';

// TODO: image and horizontal list examples

export class AccordionBody extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    constructor(props) {
        super(props);
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning

            // types

            // states

            // variations

            // component
            content: true,
            active: true
        };

        /*
        let didMount = function() {
            this.setScrollHeight();
            let computedStyle = window.getComputedStyle(ReactDOM.findDOMNode(this), null);

            this.state.paddingTop = parseFloat(computedStyle.getPropertyValue('padding-top'));
            this.state.paddingBottom = parseFloat(computedStyle.getPropertyValue('padding-bottom'));
        };
        */

        //
        let animation = {
            state: this.props.active,
            enterState: {
                name: 'slideDown',
                ease: 'cubic-out',
                duration: 250,
                options: {
                    easing: 'cubic-out'
                }
            },
            exitState: {
                name: 'slideUp',
                duration: 300,
                options: {
                    easing: 'cubic-out'
                }
            }
        };

        let childAnimation = {
            state: this.props.active,
            enterState: {
                name: 'fadeIn',
                duration: 300,
                options: {
                    easing: 'cubic-in'
                }
            },
            exitState: {
                name: 'fadeOut',
                duration: 200,
                options: {
                    easing: 'cubic-out'
                }
            }
        }


        // handle all string or mixed string/bool props
        return (
                <Animate 
                    animation={animation}
                    className={classNames(classes)}
                    key="animate"
                > 
                    <Animate animation={childAnimation}>
                        {this.props.children}
                    </Animate>
                </Animate>
        );
    }
}