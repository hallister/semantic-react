import React from 'react';
import { Animations } from '../../modules';
import { PopupPlacer, PopupElement } from '../../modules';

export class Popup extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        endAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        position: React.PropTypes.string,
        startAnimation: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        })
    };

    static defaultProps = {
        startAnimation: {
            duration: 200,
            easing: 'ease in',
            from: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            },
            to: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            }
        },
        endAnimation: {
            duration: 200,
            easing: 'ease in',
            from: {
                opacity: 1,
                transform: 'scale(1,1)',
                WebkitTransform: 'scale(1,1)'
            },
            to: {
                opacity: 0,
                transform: 'scale(0,0)',
                WebkitTransform: 'scale(0,0)'
            }
        },
        position: 'top left'
    }

    constructor(props) {
        super(props);

        this.position = this.start = this.props.position;
        this.lastPosition = false;
        this.ready = false;
    }

    onPositioned(success, position, style, classes, nextPosition) {
        // if the position is good OR if we have tried every position unsuccessfully
        if (success || (this.position == this.start && this.lastPosition)) {
            this.ready = true;
            this.position = position;
            this.style = style;
            this.classes = classes;
            this.forceUpdate();
        } else {
            this.ready = false;
            this.lastPosition = position;
            this.position = nextPosition;
            this.forceUpdate();
        }
    }

    render() {
        let { active, children, position, startAnimation, endAnimation, ...other } = this.props;
        let popup;

        // popup is not placed, but is active
        if (!this.ready && this.props.active) {
            popup = (
                <PopupPlacer
                    active
                    autoPosition
                    key={this.position}
                    lastPosition={this.lastPosition}
                    onPositioned={this.onPositioned.bind(this)}
                    position={this.position}
                >
                    {this.props.children}
                </PopupPlacer>
            );
        // popup is inactive
        } else if (!this.props.active) {
            popup = <noscript/>;
        // popup is active and read (display calculated position)
        } else {
            let child = this.props.active ? this.props.children : null;
            popup = (
                <PopupElement
                    {...this.props}
                    classes={this.classes}
                    enter={this.props.startAnimation}
                    key="popupAnimation"
                    leave={this.props.endAnimation}
                    pStyle={this.style}
                    position={this.position}
                >
                    {child}
                </PopupElement>
            );
        }

        return (
            <Animations>
                {popup}
            </Animations>
        );
    }
}
