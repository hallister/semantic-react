import React from 'react';
import PropTypes from 'prop-types';
import elementType from 'react-prop-types/lib/elementType';
import classNames from 'classnames';
import Icon from '../icon/icon';
import Image from '../image/image';
import Content from '../simple/content';
import List from './list';
import DefaultProps from '../../defaultProps';
import { hasChild } from '../../utilities';

export default class ListItem extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Mark item as active. Valid only for link list
         */
        active: PropTypes.bool,
        /**
         * Content alignment
         */
        contentAligned: PropTypes.oneOf(['top', 'middle', 'bottom']),
        /**
         * Image/Icon name
         */
        image: PropTypes.string,
        /**
         * Type of image/icon
         */
        imageType: PropTypes.oneOf(['image', 'icon']),
        /**
         * Image/Icon component. Override to tune
         */
        imageComponent: elementType,
        /**
         * Right floated content component. If not provided, then right floated content will not be rendered
         */
        rightFloatedComponent: elementType
    };

    static contextTypes = {
        isLinkList: PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        imageType: 'icon'
    };

    /* eslint-disable */
    static Components = {
        Content: Content,
        Icon: Icon,
        Image: Image,
        List: List
    };
    /* eslint-enable */

    renderImageComponent() {
        const { image, imageType, imageComponent } = this.props;
        if (!image) {
            return null;
        }
        const ImageComponent = imageComponent ? imageComponent :
            imageType === 'icon' ? ListItem.Components.Icon : ListItem.Components.Image;
        // Looks like avatar image is most common used in list case
        const imageProps = imageType === 'icon' ? { name: image } : { avatar: true, src: image };
        return (
            <ImageComponent {...imageProps}/>
        );
    }

    renderRightFloatedComponent() {
        const { rightFloatedComponent } = this.props;
        if (!rightFloatedComponent) {
            return null;
        }
        const RightFloatedComponent = rightFloatedComponent;
        return (
            <ListItem.Components.Content floated="right">
                <RightFloatedComponent/>
            </ListItem.Components.Content>
        );
    }

    renderContent() {
        const { children, contentAligned } = this.props;
        // Do not render content if has another sublist
        if (hasChild(children, ListItem.Components.List)) {
            return children;
        } else {
            return (
                <ListItem.Components.Content aligned={contentAligned}>
                    {children}
                </ListItem.Components.Content>
            );
        }
    }

    render() {
        const { component, children, defaultClasses, active, contentAligned, image, imageType, imageComponent, rightFloatedComponent, ...other } = this.props;
        // List items should use <a>
        const Component = this.context.isLinkList ? 'a' : component;

        other.className = classNames(other.className, this.getClasses());
        return (
            <Component {...other}>
                {this.renderRightFloatedComponent()}
                {this.renderImageComponent()}
                {this.renderContent()}
            </Component>
        );
    }

    getClasses() {
        return {
            active: this.props.active && this.context.isLinkList,
            link: this.context.isLinkList,
            item: this.props.defaultClasses
        };
    }
}
