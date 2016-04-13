import React from 'react';
import classNames from 'classnames';
import Image from './../../elements/image/image';
import Images from './../../elements/image/images';
import Icon from './../../elements/icon/icon';

function renderContent(children) {
    let contentChildren = [];

    React.Children.forEach(children, (child, index) => {
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

function renderLabel(children) {
    let labelChildren = [];

    React.Children.forEach(children, (child, index) => {
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

Event.Components = {
    Image: Image,
    Images: Images,
    Icon: Icon
};

export default Event;

