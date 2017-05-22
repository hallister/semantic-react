import React from 'react';
import PropTypes from 'prop-types';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['top', 'middle', 'bottom'],
    floated: ['right', 'left']
};

export default class Content extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * True to be active content
         */
        active: PropTypes.bool,
        /**
         * Content vertical alignment. Useful when child of other elements:
         * Item
         */
        aligned: PropTypes.string,
        /**
         * Extra content
         */
        extra: PropTypes.bool,
        /**
         * Content floating. Useful when child of other elements:
         * Item
         */
        floated: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        /**
         * Hidden content
         */
        hidden: PropTypes.bool,
        /**
         * Meta content
         */
        meta: PropTypes.bool,
        /**
         * Visible content
         */
        visible: PropTypes.bool,
        /**
         * Image content
         */
        image: PropTypes.bool
    };

    static contextTypes = {
        isDimmerChild: PropTypes.bool,
        isModalChild: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        floated: false
    };

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
