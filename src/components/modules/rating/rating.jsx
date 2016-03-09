import React from 'react';
import classNames from 'classnames';
import { Icon } from '../../elements';

export default class Rating extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        heart: React.PropTypes.bool,
        max: React.PropTypes.number,
        onChange: React.PropTypes.func,
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
        star: React.PropTypes.bool,
        value: React.PropTypes.number
    };

    static defaultProps = {
        children: null,
        component: 'div',
        defaultClasses: true,
        max: 5,
        value: 0
    };

    handleChange(index) {
        if (index === this.props.active) {
            this.props.onChange(0);
            return;
        }

        this.props.onChange(index);
    }

    renderChildren() {
        let children = [];
        let classes = {
            icon: true
        }

        for (let i = 1; i <= this.props.max; i++) {
            classes.active = this.props.value >= i;

            if (this.props.onChange) {
                children.push(
                    <Icon
                        className={classNames(classes)}
                        key={i}
                        onClick={this.handleChange.bind(this, i)} />
                )
            } else {
                children.push(
                    <Icon
                        className={classNames(classes)}
                        key={i} />
                )
            }

        }

        return children;
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, heart, max, size, star, value, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            // variations
            star: this.props.star,
            heart: this.props.heart,
            rating: this.props.defaultClasses
        }

        // string types
        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
