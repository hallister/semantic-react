import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Flag extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * The country code, name or alias of the flag
         */
        name: React.PropTypes.string.isRequired
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'i'
    };

    render() {
        const { component, defaultClasses, name, ...other } = this.props;
        other.className = classNames(other.className, { flag: defaultClasses }, name);

        let Component = component;

        return (<Component {...other}/>);
    }
}
