import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Items extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        divided: React.PropTypes.bool,
        link: React.PropTypes.bool,
        relaxed: React.PropTypes.relaxed
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, divided,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // positioning

            // types
            divided: this.props.divided,
            relaxed: this.props.relaxed,
            link: this.props.link,

            // content

            // variations

            // component
            items: this.props.defaultClasses
        };

        return classes;
    }
}
