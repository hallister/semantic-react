import React from 'react';
import { $ } from '../../modules';
import classNames from 'classnames';

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
        jitter: 2,
        offset: 0,
        position: 'top left'
    };

    constructor(props) {
        super(props);

        this.initialRender = true;
    }

    componentDidMount() {
        // calculate various positions on the screen
        this.setCalculations();

        // if we don't force an update, the position won't change
        this.forceUpdate();
    }

    componentWillReceiveProps() {
        // no need to recalculate on the initial render
        if (!this.initialRender) {
            this.setCalculations();
        }
    }

    shouldComponentUpdate(props) {
        // only update of it's active AND the position has changed
        if (props.active === true && props.position !== this.props.position) {
            return true;
        }

        return false;
    }

    componentWillUpdate(props) {

        // popup is inactive, make the style object empty
        if (props.active == false) {
            this.style = {}
        // active popup, generate the styles
        } else {
            this.style = this.generateStyle();
        }
    }

    // verify if the position is valid (doesn't hit a boundary)
    componentDidUpdate() {
        let distance = this.getBoundaryDistance();
        let intersects = false;

        // test if the boundary intersects with the popup, allowing for this.props.jitter
        intersects = Object.keys(distance).some(dist => {
            if (distance[dist] < -this.props.jitter) {
                return true;
            }
        });

        !intersects ?
            this.props.onPositioned(true, this.props.position, this.style, this.getClasses()) :
            this.props.onPositioned(false, this.props.position, this.style, this.getClasses(), this.getNextPosition());
    }

    render() {
        let { component, defaultClasses, offset, ...other } = this.props;
        other.className = classNames(this.props.className, this.getClasses());
        other.style = this.style || {};

        // as soon as we render once, we start doing calculations at every position change
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

    // the popup didn't fit so we get the next position
    // this can cycle forever, it's the responsibility of the parent
    // to know when to stop
    getNextPosition() {
        let last = validProps.position.length - 1;
        let current = validProps.position.indexOf(this.props.position);

        if (current == last) {
            return validProps.position[0];
        } else {
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
