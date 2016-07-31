import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';
import { Sizes } from '../../utilities';

export default class Breadcrumb extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A breadcrumb can vary in size
         */
        size: React.PropTypes.oneOf(Sizes)
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, defaultClasses, size, ...other } = this.props;
        const Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (
            <Component {...other}/>
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,
            [this.props.size]: !!this.props.size,
            breadcrumb: this.props.defaultClasses
        };
    }
}
