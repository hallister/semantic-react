import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

export class List extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.oneOf(validProps.aligned),
        animated: React.PropTypes.bool,
        bulleted: React.PropTypes.bool,
        celled: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        divided: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(validProps.floated),
        horizontal: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        link: React.PropTypes.bool,
        ordered: React.PropTypes.bool,
        relaxed: React.PropTypes.bool,
        selection: React.PropTypes.bool,
        size: React.PropTypes.string
    };

    static childContextTypes = {
        isListChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    getChildContext() {
        return {
            isListChild: true
        }
    }

    render() {
        let { aligned, animated, celled, bulleted, defaultClasses, divided, horizontal, 
              inverted, link, ordered, relaxed, selection, size, ...other } = this.props;

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
            bulleted: this.props.bulleted,
            horizontal: this.props.horizontal,
            link: this.props.link,
            ordered: this.props.ordered,

            // variations
            animated: this.props.animated,
            celled: this.props.celled,
            divided: this.props.divided,
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