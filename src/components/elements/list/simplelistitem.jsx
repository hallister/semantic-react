import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Item from '../../views/item/item';
import Icon from '../icon/icon';
import Content from '../simple/content';

/**
 * Simple list item for common cases. Provides item with content or/and icon
 */
export default class SimpleListItem extends React.Component {
    static propTypes = {
        ...Item.propTypes,
        /**
         * Icon name to render
         */
        icon: React.PropTypes.string
    };

    static defaultProps = {
        ...Item.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Item: Item,
        Icon: Icon,
        Content: Content
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { icon, children, ...other } = this.props;
        if (icon && typeof icon === "string") {
            return (
                <SimpleListItem.Components.Item {...other}>
                    <SimpleListItem.Components.Icon name={icon}/>
                    <SimpleListItem.Components.Content>
                        {children}
                    </SimpleListItem.Components.Content>
                </SimpleListItem.Components.Item>
            );
        } else {
            // Do not render content if just item with text
            return (
                <SimpleListItem.Components.Item>
                    {children}
                </SimpleListItem.Components.Item>
            )
        }
    }
}
