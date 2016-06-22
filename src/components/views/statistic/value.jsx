import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Value extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Text value
         */
        text: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        text: false
    };

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let {
            children, className, component, text,
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
