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
        active: React.PropTypes.bool,
        aligned: React.PropTypes.string,
        extra: React.PropTypes.bool,
        floated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        hidden: React.PropTypes.bool,
        meta: React.PropTypes.bool,
        visible: React.PropTypes.bool,
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
        let { aligned, component, defaultClasses, extra, floated, hidden, meta,
              visible, ...other } = this.props;
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
