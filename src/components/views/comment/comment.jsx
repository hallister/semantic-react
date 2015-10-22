import React from 'react';
import { Image, Content } from '../../elements';
import classNames from 'classnames';

function renderChildren(children) {
    let commentChildren = [];
    let contentChildren = [];

    React.Children.forEach(children, child => {
        // remove the Image default classes
        if (child.type === Image) {
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
        <Content key="commentContent">
            {contentChildren}
        </Content>
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

exports.Comment = Comment;
