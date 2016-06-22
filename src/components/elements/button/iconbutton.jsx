import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Button from './button';
import Icon from '../icon/icon';

/**
 * Icon button es un button con icon, en serio
 */
export default class IconButton extends React.Component {
    static propTypes = {
        ...Button.propTypes,

        /**
         * Adds a SemanticUI color class to the icon.
         */
        iconColor: React.PropTypes.string,

        /**
         * Icon component
         */
        iconComponent: elementType,

        /**
         * Adds a SemanticUI name class to the icon.
         */
        name: React.PropTypes.string.isRequired
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

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

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
