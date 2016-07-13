import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Image from './../image/image';
import { hasDescendant, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';

let validProps = {
    move: ['right', 'up', 'down'],
    rotate: ['left']
};

export default class Reveal extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * An active reveal displays its hidden content
         */
        active: React.PropTypes.bool,
        circular: React.PropTypes.bool,
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
        ...DefaultProps.defaultProps,
        image: false,
        move: false,
        rotate: false,
        size: 'small'
    };

    /* eslint-disable */
    static Components = {
        Image: Image
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, children, active, circular, disabled, fade,
              instant, image, move, rotate, size, type, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}>
                {children}
            </Component>
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
            image: this.props.image || hasDescendant(this.props.children, Reveal.Components.Image)
        };

        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
