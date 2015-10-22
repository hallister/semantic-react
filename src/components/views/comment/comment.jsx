import React from 'react';
import { Image, Content } from '../../elements';
import classNames from 'classnames';

function getClasses(props) {
    let classes = {
        comment: props.defaultClasses
    }

    return classes;
}

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

let comment = (props) => {
    let { children, className, component, defaultClasses, ...other } = props;

    other.className = classNames(className, getClasses(props));

    return React.createElement(
        component,
        other,
        renderChildren(children)
    );
};

comment.propTypes = {
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ]),
    defaultClasses: React.PropTypes.bool
}

comment.defaultProps = {
    component: 'div',
    defaultClasses: true
}

exports.Comment = comment;
