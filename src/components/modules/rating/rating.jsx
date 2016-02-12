import React from 'react';
import classNames from 'classnames';

export class Rating extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        max: React.PropTypes.number,
        size: React.PropTypes.string,
        heart: React.PropTypes.bool,
        star: React.PropTypes.bool,
        value: React.PropTypes.number,
        onChange: React.PropTypes.func
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
                    <i
                        className={classNames(classes)}
                        key={i}
                        onClick={this.handleChange.bind(this, i)} />
                )
            } else {
                children.push(
                    <i
                        className={classNames(classes)}
                        key={i} />
                )
            }

        }

        return children;
    }

    render() {
        let { defaultClasses, heart, max, size, star, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,
            [this.props.size]: !!this.props.size,
            star: this.props.star,
            heart: this.props.heart,
            rating: this.props.defaultClasses
        }
    }
}
