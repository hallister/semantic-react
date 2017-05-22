import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from './../image/image';
import { hasDescendant, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';

let validProps = {
    move: ['right', 'up', 'down'],
    rotate: ['left']
};

export default class Reveal extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * An active reveal displays its hidden content
         */
        active: PropTypes.bool,
        circular: PropTypes.bool,
        disabled: PropTypes.bool,
        fade: PropTypes.bool,
        image: PropTypes.bool,
        instant: PropTypes.bool,
        move: PropTypes.oneOfType([
            PropTypes.oneOf(['right', 'up', 'down']),
            PropTypes.bool
        ]),
        rotate: PropTypes.oneOfType([
            PropTypes.oneOf(['left']),
            PropTypes.bool
        ]),
        // required?
        size: PropTypes.string,
        type: PropTypes.string
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
