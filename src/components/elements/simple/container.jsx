import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center']
};

export default class Container extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        aligned: PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        fluid: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        const { children, className, component, defaultClasses, aligned, fluid, ...other } = this.props;
        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        let classes = {
            ui: true,
            container: true,
            fluid: this.props.fluid,

            aligned: this.props.aligned && this.props.aligned !== 'justified'
        };

        return validateClassProps(classes, this.props, validProps);
    }
}
