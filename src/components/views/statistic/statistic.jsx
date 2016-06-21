import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import { hasChild } from '../../utilities';
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
export default class Statistic extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        value: React.PropTypes.oneTypeOf([
            React.PropTypes.string,
            React.PropTypes.node
        ]),
        label: React.PropTypes.oneTypeOf([
            React.PropTypes.string,
            React.PropTypes.node
        ]),
        horizontal: React.PropTypes.bool,
        color: React.PropTypes.string,
        inverted: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(['right', 'left']),
        size: React.PropTypes.string,
        onClick: React.PropTypes.func
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

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
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

        if (typeof value === 'string') {
            console.log("value as string: ", value);
        } else if (typeof value === Value) {
            console.log("value as Value node: %j", value);
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

            // component
            statistic: this.props.defaultClasses,

            // variations
            horizontal: this.props.horizontal,
            color: this.props.color,
            inverted: this.props.inverted,
            floated: this.props.floated,
            size: this.props.size,
            link: this.props.link || this.props.onClick
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        classes[this.props.floated] = !!this.props.floated;

        return classes;
    }
}
