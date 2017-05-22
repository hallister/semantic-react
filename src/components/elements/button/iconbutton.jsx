import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Button from './button';
import Icon from '../icon/icon';

/**
 * Icon button es un button con icon, en serio
 */
export default class IconButton extends React.PureComponent {
    static propTypes = {
        ...Button.propTypes,

        /**
         * Adds a SemanticUI color class to the icon.
         */
        iconColor: PropTypes.string,

        /**
         * Icon component
         */
        iconComponent: elementType,

        /**
         * Adds a SemanticUI name class to the icon.
         */
        name: PropTypes.string.isRequired
    };

    static defaultProps = {
        ...Button.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Button: Button,
        Icon: Icon
    };
    /* eslint-enable */

    render() {
        const { children, iconColor, iconComponent, name, ...other } = this.props;
        other.className = classNames(other.className, this.getClasses());
        const IconComponent = iconComponent || IconButton.Components.Icon;

        return (
            <IconButton.Components.Button
                {...other}
            >
                <IconComponent color={iconColor}
                               name={name}/>
                {children}
            </IconButton.Components.Button>
        );
    }

    getClasses() {
        let classes = {
            icon: true
        };
        return classes;
    }
}
