import React from 'react';
import { Icon } from '../../elements';
import { hasChild } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Item is collection of elements. It could be menu/dropdown item or part ofr <Items /> collection
 */
export default class Item extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Make item clickable
         */
        link: React.PropTypes.bool,
        /**
         * Item click handler
         */
        onClick: React.PropTypes.func
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { component, link, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            component,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            // variations
            icon: hasChild(this.props.children, Icon),
            link: this.props.link || this.props.onClick,
            // component
            item: this.props.defaultClasses
        };
    }
}
