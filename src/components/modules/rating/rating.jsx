import React from 'react';
import classNames from 'classnames';

export class Rating extends React.Component {
    static propTypes = {
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        heart: React.PropTypes.bool,
        max: React.PropTypes.number,
        size: React.PropTypes.string,
        star: React.PropTypes.bool
    };

    static defaultProps = {
        children: null,
        component: 'div',
        defaultClasses: true,
        max: 5
    };

    constructor(props) {
        super(props);

        this.state = {
            active: null
        };
    }

    onIconClick(index) {
        // no need to reset it when it hasn't changed
        if (index === this.state.active) return;
        this.setState({
            active: index
        })
    }

    renderChildren() {
        let children = [];
        let classes = {
            icon: true,
            active: false
        }

        for (let i = 0; i < this.props.max; i++) {
            if (this.state.active !== null && this.state.active >= i) {
                classes.active = true;
            } else {
                classes.active = false;
            }

            children.push(
                <i
                    className={classNames(classes)}
                    key={i}
                    onClick={this.onIconClick.bind(this, i)}
                />
            )
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
        let classes = {
            ui: this.props.defaultClasses,

            size: React.PropTypes.string,

            // variations
            star: this.props.star,
            heart: this.props.heart,

            rating: this.props.defaultClasses
        }

        classes[this.props.size] = !!this.props.size;
        return classes;
    }
}
