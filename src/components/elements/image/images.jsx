import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';


/**
 * Group of images
 */
export default class Images extends React.Component {
    // It does support only size and state, but omitting state here, since nobody wants row of disabled images?
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Images size
         */
        size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, children, defaultClasses, size, ...other } = this.props;
        const Component = component;
        other.className = classNames(other.className, this.getClasses());

        return (<Component {...other}>{children}</Component>);
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            images: this.props.defaultClasses
        };
        classes[this.props.size] = !!this.props.size;
        return classes;
    }
}
