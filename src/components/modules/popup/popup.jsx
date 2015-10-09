import React from 'react';
import logger from 'js-logger';
import { Animations } from '../../modules';
import { PopupPlacer, PopupElement } from '../../modules';

logger.useDefaults();
let ctx = 'Popup';
let log = logger.get(ctx);

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
        log.debug('Creating component');

        this.position = this.start = this.props.position;
        this.ready = false;
    }

    onPositioned(success, position, style, classes) {
        log.debug('Checking position');
        if (success) {
            log.debug(' ' + position + ' position successful')
            this.ready = true;
            this.position = position;
            this.style = style;
            this.classes = classes;
            if (this.incrementer !== 10) {
                this.forceUpdate();
                this.incrementer = this.incrementer + 1 || 1;
            }
        } else {
            log.debug(' position failed, checking ' + position);
            this.ready = false;
            this.lastPosition = this.position;
            this.position = position;

            if (this.incrementer !== 10) {
                this.forceUpdate();
                this.incrementer = this.incrementer + 1 || 1;
            }
        }
    }

    render() {
        log.debug('Rendering component');
        let popup;

        let { active, position, startAnimation, endAnimation, ...other } = this.props;

        if (!this.ready && this.props.active) {
            log.debug(' attempting to render at position ' + this.position);
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
        } else if (!this.props.active) {
            popup = <noscript/>;
        } else {
            let children = this.props.active ? this.props.children : null;
            popup = (
                <PopupElement
                    {...this.props}
                    classes={this.classes}
                    enter={this.props.startAnimation}
                    key="pelementAnimation"
                    leave={this.props.endAnimation}
                    pStyle={this.style}
                    position={this.position}
                >
                    {children}
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
