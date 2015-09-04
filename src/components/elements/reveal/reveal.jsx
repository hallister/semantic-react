import React, { Component } from 'react';
import { Image } from '../../elements';
import { hasDescendant, returnTag } from '../../utilities';
import classNames from 'classnames';

export class Reveal extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        circular: React.PropTypes.bool,
        className: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        fade: React.PropTypes.bool,
        image: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        instant: React.PropTypes.bool,
        move: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        rotate: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        size: React.PropTypes.string,
        type: React.PropTypes.string
    };

    static defaultProps = {
        defaultClasses: true,
        image: false,
        move: false,
        rotate: false
    };

    render() {
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

        classes[this.props.image] = typeof this.props.image == 'string' ? true : false;
        classes[this.props.move] = typeof this.props.move == 'string' ? true : false;
        classes[this.props.rotate] = typeof this.props.rotate == 'string' ? true : false;

        classes[this.props.size] = !!this.props.size;
        classes[this.props.type] = !!this.props.type;

        let Tag = returnTag(this.props.tag || React.DOM.div);

        let { active, circular, children, className, defaultClasses, disabled, fade,
              instant, image, move, rotate, size, type, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
        }, this.props.children);
    }
}