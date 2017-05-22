import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Value extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Text value
         */
        text: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        text: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let {
            children, className, component, defaultClasses, text,
            ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        let Component = component;

        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }

    getClasses() {
        return {
            text: this.props.text,

            // component
            value: this.props.defaultClasses
        };
    }
}
