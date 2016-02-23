import React from 'react';
import classNames from 'classnames';
import { Icon, Button } from '../../elements';

class IconButton extends Button {
    static propTypes = {
        /**
         * The child nodes of the component.
         */
        children: React.PropTypes.node,

        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),

        /**
         * Adds a SemanticUI color class to the icon.
         */
        iconColor: React.PropTypes.string,

        /**
         * Adds a SemanticUI icon name class to the icon.
         */
        name: React.PropTypes.string.isRequired,

        /**
         * Renders as a social button if true (see SocialButton);
         */
        social: React.PropTypes.bool
    }

    static defaultProps = {
        icon: true
    };

    constructor(props) {
        super(props);
        this.props = { ...this.props, social: props.social ? props.name : '' };
    }

    renderChildren(children, iconColor, name, social) {
        let componentChildren = [];

        componentChildren.push(
            <Icon
                color={social ? null : iconColor}
                key="icon"
                name={name} />
        );

        React.Children.forEach(children, child => {
            componentChildren.push(child);
        });

        return componentChildren;
    }

    render() {
        let { children, iconColor, name, social, ...other } = this.props;

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            Button,
            other,
            this.renderChildren(children, iconColor, name, social)
        );
    }

    getClasses() {
        let classes = {
            // variations
        }

        return classes;
    }
}

export default IconButton;
