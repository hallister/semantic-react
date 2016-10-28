import React from 'react';
import classNames from 'classnames';
import Image from './../../elements/image/image';
import Content from './../../elements/simple/content';
import DefaultProps from '../../defaultProps';

export default class Comment extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Image: Image,
        Content: Content
    };
    /* eslint-enable */

    renderChildren() {
        let commentChildren = [];
        let contentChildren = [];

        React.Children.forEach(this.children, child => {
            // remove the Image default classes
            if (child.type === Comment.Components.Image) { // eslint-disable-line
                commentChildren.push(
                    React.cloneElement(
                        child,
                        {
                            component: 'a',
                            avatar: true,
                            key: 'commentAvatar',
                            defaultClasses: false
                        },
                        child.children
                    )
                );
            } else {
                return contentChildren.push(child);
            }
        });

        commentChildren.push(
            <Comment.Components.Content key="commentContent">
                                        {contentChildren}
            </Comment.Components.Content>
        );

        return commentChildren;
    }

    render() {
        const { children, className, component, defaultClasses, ...other } = this.props;
        other.className = classNames(className, { comment: true });

        return React.createElement(
            component,
            other,
            this.renderChildren()
        );
    }
}
