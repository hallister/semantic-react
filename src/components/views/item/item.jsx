import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import { hasChild } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Icon from './../../elements/icon/icon';


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

    /* eslint-disable */
    static Components = {
        Icon: Icon
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        const { component, defaultClasses, children, link, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(other.className, this.getClasses());

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        return {
            // variations
            icon: hasChild(this.props.children, Item.Components.Icon), // eslint-disable-line
            link: this.props.link || this.props.onClick,
            // component
            item: this.props.defaultClasses
        };
    }
}
