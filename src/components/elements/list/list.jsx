import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

export default class List extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        aligned: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
        animated: React.PropTypes.bool,
        celled: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['divided']),
            React.PropTypes.bool
        ]),
        floated: React.PropTypes.oneOf(['right', 'left']),
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        relaxed: React.PropTypes.bool,
        selection: React.PropTypes.bool,
        size: React.PropTypes.string,
        type: React.PropTypes.oneOf(['bulleted', 'ordered'])
    };

    static childContextTypes = {
        isListChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    getChildContext() {
        return {
            isListChild: true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { aligned, animated, celled, defaultClasses, horizontal,
              inverted, link, relaxed, selection, size, type,
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

            // types
            bulleted: this.props.type === 'bulleted',
            horizontal: this.props.horizontal,
            link: this.props.link,
            ordered: this.props.type === 'ordered',

            // variations
            animated: this.props.animated,
            celled: this.props.celled && this.props.celled !== 'divided',
            divided: this.props.celled === 'divided',
            inverted: this.props.inverted,
            relaxed: this.props.relaxed,
            selection: this.props.selection,
            aligned: this.props.aligned,

            // component
            list: this.props.defaultClasses
        };

        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
