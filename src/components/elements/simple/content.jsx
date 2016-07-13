import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

export default class Content extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * True to be active content
         */
        active: React.PropTypes.bool,
        /**
         * Content alignment
         */
        aligned: React.PropTypes.string,
        /**
         * Extra content
         */
        extra: React.PropTypes.bool,
        /**
         * Content floating
         */
        floated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        /**
         * Hidden content
         */
        hidden: React.PropTypes.bool,
        /**
         * Meta content
         */
        meta: React.PropTypes.bool,
        /**
         * Visible content
         */
        visible: React.PropTypes.bool,
        /**
         * Image content
         */
        image: React.PropTypes.bool
    };

    static contextTypes = {
        isDimmerChild: React.PropTypes.bool,
        isModalChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        floated: false
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    renderDimmerChild() {
        return (<div className="center">{this.props.children}</div>);
    }

    render() {
        let children = this.context.isDimmerChild && !this.context.isModalChild ? this.renderDimmerChild() : this.props.children;

        /* eslint-disable no-use-before-define */
        let {  component, defaultClasses, active, aligned, extra, floated, hidden, meta,
              visible, image, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            children
        );
    }

    getClasses() {
        let classes = {
            // default
            content: this.props.defaultClasses,

            // variations
            active: this.props.active,
            aligned: this.props.aligned,
            extra: this.props.extra,
            floated: this.props.floated,
            hidden: this.props.hidden,
            meta: this.props.meta,
            visible: this.props.visible,
            image: this.props.image
        };

        return validateClassProps(classes, this.props, validProps);
    }
}
