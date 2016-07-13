import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Icon from './../../elements/icon/icon';
import DefaultProps from '../../defaultProps';

export default class Rating extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        heart: React.PropTypes.bool,
        /*
         * The initial rating.
         * @see https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html
         */
        initialValue: React.PropTypes.number,
        max: React.PropTypes.number,
        /*
         * The callback to call when the user clicks an Icon. The icons' active classes are updated unless this function returns false.
         */
        onChange: React.PropTypes.func,
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
        star: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        initialValue: 0,
        max: 5
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon
    };
    /* eslint-enable */

    constructor(props) {
        super(props);
        this.state = { value: props.initialValue };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    renderChildren() {
        let children = [];
        let classes = {
            icon: true
        };

        for (let i = 1; i <= this.props.max; i++) {
            classes.active = this.state.value >= i;

            if (this.props.onChange) {
                children.push(
                    <Rating.Components.Icon
                        className={classNames(classes)}
                        key={i}
                        onClick={this.handleChange.bind(this, i)} />
                )
            } else {
                children.push(
                    <Rating.Components.Icon
                        className={classNames(classes)}
                        key={i} />
                )
            }

        }

        return children;
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, heart, max, size, star, initialValue, onChange, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    handleChange(index) {
        if (index === this.state.value) {
            this.props.onChange(0);
            return;
        }

        if (this.props.onChange(index) !== false) {
            this.setState({ value: index });
        }
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
