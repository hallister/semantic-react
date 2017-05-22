import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Numbers, Colors, Sizes, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Statistic from './statistic'

let validProps = {
    color: Colors,
    size: Sizes
};

export default class Statistics extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        even: PropTypes.bool,
        color: PropTypes.string,
        size: PropTypes.string
    };

    static childContextTypes = {
        isStatisticsChild: PropTypes.bool
    }

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Statistic: Statistic
    };
    /* eslint-enable */

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            isStatisticsChild: true
        }
    }

    render() {
        /* eslint-disable no-use-before-define */
        let {
            children, className, component, defaultClasses,
            even, color, size,
                ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        let Component = component;
        other.className = classNames(this.props.className, this.getClasses());

        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }

    getClasses() {
        let childCount = React.Children.count(this.props.children);

        let classes = {
            // default
            ui: this.props.defaultClasses,

            color: this.props.color,
            size: this.props.size,

            // component
            statistics: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        if (this.props.even && childCount > 0) {
            if (childCount > 0 && childCount <= 12) {
                classes[Numbers[childCount]] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps);
    }
}
