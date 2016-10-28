import React from 'react';
import classNames from 'classnames';
import { hasChild, Sizes, Colors } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Value from './value';
import Label from '../../elements/label/label';

let validProps = {
    floated: ['right', 'left'],
    size: ['mini', 'tiny', 'small', 'large', 'huge']
};
/**
 * Statistic is view of elements. It could be statistic view or part of <Statistics /> view
 */
export default class Statistic extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A string or number that represents the value of statistic
         */
        value: React.PropTypes.oneTypeOf([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        /**
         * A string or number that represents the label of a statistic
         */
        label: React.PropTypes.oneTypeOf([
            React.PropTypes.string,
            React.PropTypes.number
        ]),
        /**
         * A statistic can present its measurement horizontally
         */
        horizontal: React.PropTypes.bool,
        /**
         * A SemanticUI color class.
         */
        color: React.PropTypes.oneOf(Colors),
        /**
         * Styles the component for a dark background.
         */
        inverted: React.PropTypes.bool,
        /**
         * Forces to component to float left or right.
         */
        floated: React.PropTypes.oneOf(['right', 'left']),
        /**
         * Adds a SemanticUI size class.
         */
        size: React.PropTypes.oneOf(Sizes)
    };

    static contextTypes = {
        isStatisticsChild: React.PropTypes.bool
    };

    static childContextTypes = {
        isStatisticChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        inverted: false,
        horizontal: false
    };

    /* eslint-disable */
    static Components = {
        Value: Value,
        Label: Label
    };
    /* eslint-enable */

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            isStatisticChild: true
        }
    }

    render() {
        /* eslint-disable no-use-before-define */
        let {
            component, defaultClasses, children,              // default props
            value, label,
            horizontal, color, inverted, floated, size,       // custom props
            ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        let Component = component;
        other.className = classNames(other.className, this.getClasses());

        children = children ? children : [];

        let typeOfValue = typeof value;
        let typeOfLabel = typeof label;
        if (typeOfValue === 'string' || typeOfValue === 'number') {
            children.push(React.createElement(Value, null, value));
        }
        if (typeOfLabel === 'string' || typeOfLabel === 'number') {
            children.push(React.createElement(Label, null, label));
        }
        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses && !this.context.isStatisticsChild,

            // position,
            left: false,
            right: false,

            // variations
            horizontal: this.props.horizontal,
            inverted: this.props.inverted,
            floated: this.props.floated,

            // component
            statistic: this.props.defaultClasses
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.floated] = !!this.props.floated;

        return classes;
    }
}
