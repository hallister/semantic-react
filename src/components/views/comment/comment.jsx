import React from 'react';
import classNames from 'classnames';
import Image from './../../elements/image/image';
import Content from './../../elements/simple/content';

function renderChildren(children) {
    let commentChildren = [];
    let contentChildren = [];

    React.Children.forEach(children, child => {
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

let Comment = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { comment: true });

    return React.createElement(
        component,
        other,
        renderChildren(children)
    );
};

Comment.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
}

Comment.defaultProps = {
    component: 'div'
}

Comment.Components = {
    Image: Image,
    Content: Content
};

export default Comment;
