import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Text extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        extra: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, extra,
            ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,

            extra: this.props.extra,

            text: this.props.defaultClasses
        };
    }
}
