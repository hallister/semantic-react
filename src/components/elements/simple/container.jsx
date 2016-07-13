import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import { validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center']
};

export default class Container extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        aligned: React.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        fluid: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
