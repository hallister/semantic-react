import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import Image from './../../elements/image/image';
import Images from './../../elements/image/images';
import Icon from './../../elements/icon/icon';
import DefaultProps from '../../defaultProps';

export default class Event extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Image: Image,
        Images: Images,
        Icon: Icon
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    renderLabel() {
        let labelChildren = [];

        React.Children.forEach(this.children, (child, index) => {
            // remove the Image default classes
            if ((child.type === Event.Components.Image || child.type === Event.Components.Icon) && index === 0) { // eslint-disable-line
                if (child.type === Event.Components.Image) { // eslint-disable-line
                    labelChildren.push(
                        React.cloneElement(
                            child,
                            {
                                key: 'eventLabel',
                                image: false,
                                defaultClasses: false
                            },
                            child.children
                        )
                    );
                } else {
                    labelChildren.push(child);
                }
            }
        });

        return (
            <div className="label">
                 {labelChildren}
            </div>
        )
    }

    renderContent() {
        let contentChildren = [];

        React.Children.forEach(this.children, (child, index) => {
            if (child.type === Event.Components.Images) { // eslint-disable-line
                contentChildren.push(
                    React.cloneElement(
                        child,
                        {
                            defaultClasses: false,
                            className: 'extra images'
                        }
                    )
                );
            } else if (child.type !== Event.Components.Image && child.type !== Event.Components.Icon) { // eslint-disable-line
                contentChildren.push(child);
            } else if ((child.type === Event.Components.Image || child.type === Event.Components.Icon) && index > 0) { // eslint-disable-line
                contentChildren.push(child);
            }
        });

        return (
            <div className="content">
                 {contentChildren}
            </div>
        );
    }

    render() {
        const { children, className, component, ...other } = this.props;
        other.className = classNames(className, { event: true });

        return React.createElement(
            component,
            other,
            [
                this.renderLabel(children),
                this.renderContent(children)
            ]
        );
    }
}

