import React from 'react';
import { Image, Images, Icon } from '../../elements';
import classNames from 'classnames';

function renderContent(children) {
    let contentChildren = [];

    React.Children.forEach(children, (child, index) => {
        if (child.type === Images) {
            contentChildren.push(
                React.cloneElement(
                    child,
                    {
                        defaultClasses: false,
                        className: 'extra images'
                    }
                )
            );
        } else if (child.type !== Image && child.type !== Icon) {
            contentChildren.push(child);
        } else if ((child.type === Image || child.type === Icon) && index > 0) {
            contentChildren.push(child);
        }
    });

    return (
        <div className="content">
            {contentChildren}
        </div>
    );
}

function renderLabel(children) {
    let labelChildren = [];

    React.Children.forEach(children, (child, index) => {
        // remove the Image default classes
        if ((child.type === Image || child.type === Icon) && index === 0) {
            if (child.type === Image) {
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

let Event = ({ children, className, component, ...other }) => {
    other.className = classNames(className, { event: true });

    return React.createElement(
        component,
        other,
        [
            renderLabel(children),
            renderContent(children)
        ]

    );
};

Event.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.any,
    component: React.PropTypes.oneOfType([
        React.PropTypes.element,
        React.PropTypes.string
    ])
}

Event.defaultProps = {
    component: 'div'
}

exports.Event = Event;
