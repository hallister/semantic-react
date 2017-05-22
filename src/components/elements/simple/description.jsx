import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Description extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        hidden: PropTypes.bool,
        visible: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { defaultClasses, component, visible, hidden, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            // default
            description: this.props.defaultClasses,

            // animation
            visible: this.props.visible,
            hidden: this.props.hidden
        };
    }
}
