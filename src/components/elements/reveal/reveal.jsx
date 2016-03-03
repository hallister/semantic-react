import React from 'react';
import { Image } from '../../elements';
import { hasDescendant, validateClassProps } from '../../utilities';
import classNames from 'classnames';
import Radium from 'radium';

let validProps = {
    move: ['right', 'up', 'down'],
    rotate: ['left']
};

@Radium
export default class Reveal extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fade: React.PropTypes.bool,
        image: React.PropTypes.bool,
        instant: React.PropTypes.bool,
        move: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['right', 'up', 'down']),
            React.PropTypes.bool
        ]),
        rotate: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['left']),
            React.PropTypes.bool
        ]),
        // required?
        size: React.PropTypes.string,
        type: React.PropTypes.string
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        image: false,
        move: false,
        rotate: false,
        size: 'small'
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { active, circular, children, className, defaultClasses, disabled, fade,
              instant, image, move, rotate, size, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            active: this.props.active,
            circular: this.props.circular,
            instant: this.props.instant,

            // states
            disabled: this.props.disabled,

            // transitions
            fade: this.props.fade,
            move: this.props.move,
            rotate: this.props.rotate,

            // sub-defaults (order can matter?)
            reveal: this.props.defaultClasses,
            image: this.props.image || hasDescendant(this.props.children, Image)
        };

        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
