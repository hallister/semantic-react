import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';
import { Sizes } from '../../utilities';

export default class Breadcrumb extends React.PureComponent {
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
