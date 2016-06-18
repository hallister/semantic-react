import React from 'react';
import classNames from 'classnames';
import { hasChild } from '../../utilities';
import DefaultProps from '../../defaultProps';
import Icon from './../../elements/icon/icon';


function getClasses(props) {
    return {
        // variations
        icon: hasChild(props.children, Item.Components.Icon), // eslint-disable-line
        link: props.link || props.onClick,
        // component
        item: props.defaultClasses
    };
}

/**
 * Item is collection of elements. It could be menu/dropdown item or part ofr <Items /> collection
 */
const Item = (props) => {
    /* eslint-disable no-use-before-define */
    const { component, children, link, ...other } = props;
    /* eslint-enable no-use-before-define */

    other.className = classNames(props.className, getClasses(props));

    return React.createElement(
        component,
        other,
        children
    );
};

Item.propTypes = {
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

Item.defaultProps = {
    ...DefaultProps.defaultProps
};

Item.Components = {
    Icon: Icon
};

export default Item;
