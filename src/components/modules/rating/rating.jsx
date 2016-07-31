import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';
import RatingIcon from './icon';

/**
 * Rating
 */
export default class Rating extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Rating type
         */
        type: React.PropTypes.oneOf(['default', 'star', 'heart']),
        /**
         * Rating size
         */
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
        /**
         * Rating max value
         */
        max: React.PropTypes.number,
        /**
         * Rating value
         */
        value: React.PropTypes.number,
        /*
         * Rating change value callback
         */
        onChange: React.PropTypes.func
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        type: 'default',
        value: 0,
        max: 5
    };

    constructor(props) {
        super(props);
        this.state = {
            hovered: 0
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    /**
     * Rating click handler
     * @param index
     */
    onRatingIconClick = (index) => {
        const { onChange, value } = this.props;
        if (index !== value) {
            onChange(index);
        }
    };

    /**
     * Mouse enter hover handler
     * @param index
     */
    onRatingIconMouseEnter = (index) => {
        this.setState({ hovered: index });
    };

    /**
     * Mouse leave hover handler
     * @param index
     */
    onRatingIconMouseLeave = (index) => {
        this.setState({ hovered: 0 });
    };

    renderIcons() {
        const icons = [];
        const { max, value } = this.props;
        const { hovered } = this.state;

        // Indexes are from 1
        for (let i = 1; i <= max; i++) {
            icons.push(
                <RatingIcon key={i}
                            index={i}
                            active={(i <= value)}
                            selected={(i <= hovered)}
                            onClick={this.onRatingIconClick}
                            onMouseEnter={this.onRatingIconMouseEnter}
                            onMouseLeave={this.onRatingIconMouseLeave}
                />
            );
        }
        return icons;
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, type, max, size, value, onChange, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}>
                {this.renderIcons()}
            </Component>
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,
            [this.props.size]: !!this.props.size,
            star: this.props.type === 'star',
            heart: this.props.type === 'heart',
            rating: this.props.defaultClasses
        }
    }
}
