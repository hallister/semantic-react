import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    flipped: ['horizontally', 'vertically'],
    rotated: ['clockwise', 'counterclockwise']
};

export default class Icon extends React.Component {
    static propTypes = {
        bordered: React.PropTypes.bool,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        corner: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fitted: React.PropTypes.bool,
        flipped: React.PropTypes.oneOf(['horizontally', 'vertically']),
        inverted: React.PropTypes.bool,
        left: React.PropTypes.bool,
        link: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        name: React.PropTypes.string, // Unnamed icons allowed when subcomponent (see Rating)
        onClick: React.PropTypes.func,
        right: React.PropTypes.bool,
        rotated: React.PropTypes.oneOf(['clockwise', 'counterclockwise']),
        size: React.PropTypes.string
    };

    static defaultProps = {
        component: 'i',
        defaultClasses: true
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { bordered, circular, color, component, corner, defaultClasses,
              disabled, fitted, flipped, inverted, left, link, loading, name, right, rotated,
              size, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other
        );
    }

    getClasses() {
        let classes = {
            // default

            // variations
            bordered: this.props.bordered,
            circular: this.props.circular,
            corner: this.props.corner,
            disabled: this.props.disabled,
            fitted: this.props.fitted,
            left: this.props.left,
            link: this.props.link || this.props.onClick,
            inverted: this.props.inverted,
            loading: this.props.loading,
            right: this.props.right,

            // component
            icon: this.props.defaultClasses
        };

        // handle all string or mixed string/bool props

        // classes[this.props.aligned] = !!this.props.aligned;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.color] = !!this.props.color;
        classes[this.props.name] = !!this.props.name;

        return validateClassProps(classes, this.props, validProps);
    }
}
