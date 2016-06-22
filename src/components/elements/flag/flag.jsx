import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Flag extends React.Component {
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

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, defaultClasses, name, ...other } = this.props;
        other.className = classNames(other.className, { flag: defaultClasses }, name);

        let Component = component;

        return (<Component {...other}/>);
    }
}
