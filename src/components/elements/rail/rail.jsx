import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Rail extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * A rail can appear attached to the main viewport
         */
        attached: PropTypes.bool,
        /**
         * A rail can appear closer to the main viewport
         */
        close: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.oneOf(['very'])
        ]),
        /**
         * A rail can create a division between itself and a container
         */
        dividing: PropTypes.bool,
        /**
         * A rail can be presented on the left or right side of a container
         */
        floated: PropTypes.oneOf(['right', 'left']).isRequired,
        /**
         * A rail can attach itself to the inside of a container
         */
        internal: PropTypes.bool,
        /**
         * A rail can have different sizes
         */
        size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        close: false
    };

    render() {
        /* eslint-disable no-use-before-define */
        const { component, defaultClasses, attached, close,
              dividing, floated, internal, size, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        const Component = component;
        return (
            <Component {...other}/>
        );

    }

    getClasses() {
        const classes = {
            // default
            ui: this.props.defaultClasses,

            right: this.props.floated === 'right',
            left: this.props.floated === 'left',

            // types
            attached: this.props.attached,
            very: this.props.close === 'very',
            close: !!this.props.close || this.props.closer,
            dividing: this.props.dividing,
            internal: this.props.internal,

            // component
            rail: this.props.defaultClasses
        };
        classes[this.props.size] = !!this.props.size;
        return classes;
    }
}
