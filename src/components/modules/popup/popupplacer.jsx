import React from 'react';
import logger from 'js-logger';
import { $ } from '../../modules';
import classNames from 'classnames';

logger.useDefaults();
let ctx = 'PopupPlacer';
let log = logger.get(ctx);

let validProps = {
    position: ['top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center']
};

export class PopupPlacer extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        distanceAway: React.PropTypes.number,
        jitter: React.PropTypes.number,
        offset: React.PropTypes.number,
        onPositioned: React.PropTypes.func,
        position: React.PropTypes.oneOf(validProps.position),
        target: React.PropTypes.array
    };

    static defaultProps = {
        active: false,
        component: 'div',
        defaultClasses: true,
        distanceAway: 0,
        jitter: 1.5,
        offset: 0,
        position: 'top left'
    };

    constructor(props) {
        super(props);
        log.debug('Creating component');

        this.initialRender = true;
        this.failed = [];

        if (props.autoPosition) {
            this.positionIndex = validProps.position.indexOf(props.startPosition);
        } else {
            this.positionIndex = validProps.position.indexOf(props.position);
        }
    }

    componentDidMount() {
        log.debug('Component mounted');
        log.debug(' setting calculations.');
        this.setCalculations();
        log.debug(' forcing update for new calculations.');
        this.forceUpdate();
    }

    componentWillReceiveProps(props) {
        log.debug('Component will receive props');
        log.debug(' new position is', props.position);
        log.debug(' old position is', this.props.position);

        if (!this.initialRender) {
            log.debug(' calculations already set.');
            this.setCalculations();
        } else {
            log.debug(' setting calculations.');
        }
    }

    shouldComponentUpdate(props) {
        log.debug('Determining if component will update');
        if (props.active === true && props.position !== this.props.position) {
            log.debug(' updating');
            return true;
        } else if (props.position == this.props.position) {
            log.debug(' this position has already failed');
            return false;
        }

        log.debug(' update not required.');
        return false;
    }

    componentWillUpdate(props) {
        log.debug('Component will update');

        if (props.active == false) {
            log.debug(' component is inactive, unset style.')
            this.style = {}
        } else {
            log.debug(' component is active, set style');
            this.style = this.generateStyle();
            log.debug(' top:' + this.style.top, 'left:' + this.style.left, 'right:' + this.style.right, 'bottom:' + this.style.bottom);
        }
    }

    componentDidUpdate() {
        log.debug('Component updated')
        let distance = this.getBoundaryDistance();
        let postioned = false;

        log.debug(' top:' + distance.top, 'left:' + distance.left, 'right:' + distance.right, 'bottom:' + distance.bottom);

        log.debug(' checking component distance from boundary.')
        postioned = Object.keys(distance).some(dist => {
            if (distance[dist] < -this.props.jitter) {
                log.debug(' component is too far from boundary');
                return true;
            }
        });

        this.failed.push(this.props.position);

        !postioned ?
            this.props.onPositioned(true, this.props.position, this.style, this.getClasses()) :
            this.props.onPositioned(false, this.getNextPosition());
    }

    render() {
        log.debug('Rendering ' + this.props.position);
        if (this.initialRender) log.debug(' this is the first render');
        let { component, defaultClasses, offset, ...other } = this.props;
        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.style || {};
        // other.style.opacity = 0;
        this.initialRender = false;

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getBoundaryDistance() {
        let component = $(this);
        let offset = component.offset();
        let boundary = this.calculations.boundary;

        if (offset) {
            return {
                top: offset.top - boundary.top,
                left: offset.left - boundary.left,
                right: boundary.right - (offset.left + component.width()),
                bottom: boundary.bottom - (offset.top + component.height())
            }
        }
    }

    generateStyle() {
        let positioning = {};
        let position = this.props.position;
        let parent = this.calculations.parent;
        let target = this.calculations.target;
        let popup = this.calculations.popup;
        let distanceAway = this.props.distanceAway;
        let offset = this.props.offset;

        switch (position) {
        case 'top left':
            positioning = {
                top: 'auto',
                bottom: parent.height - target.top + distanceAway,
                left: target.left + offset,
                right: 'auto'
            }
            break;
        case 'top center':
            positioning = {
                bottom: parent.height - target.top + distanceAway,
                left: target.left + (target.width / 2) - (popup.width / 2) + offset,
                top: 'auto',
                right: 'auto'
            }
            break;
        case 'top right':
            positioning = {
                bottom: parent.height - target.top + distanceAway,
                right: parent.width - target.left - target.width - offset,
                top: 'auto',
                left: 'auto'
            }
            break;
        case 'left center':
            positioning = {
                top: target.top + (target.height / 2) - (popup.height / 2) + offset,
                right: parent.width - target.left + distanceAway,
                left: 'auto',
                bottom: 'auto'
            }
            break;
        case 'right center':
            positioning = {
                top: target.top + (target.height / 2) - (popup.height / 2) + offset,
                left: target.left + target.width + distanceAway,
                bottom: 'auto',
                right: 'auto'
            }
            break;
        case 'bottom left':
            positioning = {
                top: target.top + target.height + distanceAway,
                left: target.left + offset,
                bottom: 'auto',
                right: 'auto'
            }
            break;
        case 'bottom center':
            positioning = {
                top: target.top + target.height + distanceAway,
                left: target.left + (target.width / 2) - (popup.width / 2) + offset,
                bottom: 'auto',
                right: 'auto'
            }
            break;
        case 'bottom right':
            positioning = {
                top: target.top + target.height + distanceAway,
                right: parent.width - target.left  - target.width - offset,
                left: 'auto',
                bottom: 'auto'
            }
            break;
        }

        positioning.display = 'block';
        return positioning;
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            // component
            popup: this.props.defaultClasses,

            // visbility
            visible: true
        }

        let position = this.props.position.split(' ');

        position.forEach(pos => {
            classes[pos] = true;
        });

        return classes;
    }

    getNextPosition() {
        let last = validProps.position.length - 1;
        let current = validProps.position.indexOf(this.props.position);
        let start = this.positionIndex;

        if (current == last) {
            return validProps.position[0];
        } else if ((current == start && !this.reposition) || (current !== start)) {
            return validProps.position[current + 1]
        }
    }

    setCalculations() {
        let component = $(this);
        let parent = $(component.parent()).parent();
        let position = $(parent).offset();
        let win = $(window);
        let offsetParent = $(component.offsetParent());

        let calculations = {
            target: {
                element: parent,
                width: parent.width(),
                height: parent.height(),
                top: position.top,
                left: position.left
            },
            popup: {
                width: component.width(),
                height: component.height()
            },
            parent: {
                width: offsetParent.width(),
                height: offsetParent.height()
            },
            margins: {
                top: parent.css('margin-top'),
                left: parent.css('margin-left')
            }
        }

        calculations.screen = {
            scroll: {
                top: win.scrollTop(),
                left: win.scrollLeft()
            },
            width: win.width(),
            height: win.height()
        }

        calculations.boundary = {
            top: calculations.screen.scroll.top,
            bottom: calculations.screen.scroll.top + calculations.screen.height,
            left: calculations.screen.scroll.left,
            right: calculations.screen.scroll.left + calculations.screen.width
        }

        this.calculations = calculations;
    }
}
