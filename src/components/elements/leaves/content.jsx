import React from 'react';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

export class Content extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        aligned: React.PropTypes.string,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        extra: React.PropTypes.bool,
        floated: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.bool
        ]),
        hidden: React.PropTypes.bool,
        meta: React.PropTypes.bool,
        visible: React.PropTypes.bool
    };

    static contextTypes = {
        isDimmerChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        floated: false
    };

    renderDimmerChild() {
        return (<div className="center">{this.props.children}</div>);
    }

    render() {
        let children = this.context.isDimmerChild ? this.renderDimmerChild() : this.props.children;

        let { aligned, component, defaultClasses, extra, floated, hidden, meta,
              visible, ...other } = this.props;

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
            visible: this.props.visible
        };

        return validateClassProps(classes, this.props, validProps);
    }
}
