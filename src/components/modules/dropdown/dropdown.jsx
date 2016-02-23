import React from 'react';
import classNames from 'classnames';

export class Dropdown extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        compact: React.PropTypes.bool,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string,
            React.PropTypes.func
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        error: React.PropTypes.bool,
        floating: React.PropTypes.bool,
        fluid: React.PropTypes.bool,
        inline: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        labeled: React.PropTypes.bool,
        multiple: React.PropTypes.bool,
        scrolling: React.PropTypes.bool,
        search: React.PropTypes.bool,
        selection: React.PropTypes.bool,
        visible: React.PropTypes.bool
    };

    static childContextTypes = {
        isDropdownChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            isDropdownChild: true
        };
    }

    render() {
        let { active, component, defaultClasses, disabled, inverted,
              multiple, ...other } = this.props;
        other.className = classNames(this.props.className, this.getClasses());

        if (this.props.component == Dropdown) {
            component = 'div';
        } else {
            component = this.props.component;
        }

        return React.createElement(
            component,
            other,
            [
                this.props.children
            ]
        );
    }

    getClasses() {
        return {
            // default
            ui: this.props.defaultClasses,

            // positioning

            // types
            inline: this.props.inline,
            compact: this.props.compact,
            scrolling: this.props.scrolling,
            selection: this.props.selection,
            floating: this.props.floating,
            fluid: this.props.fluid,
            labeled: this.props.labeled,
            search: this.props.search,
            multiple: this.props.multiple,

            // state
            active: this.props.active,
            visible: this.props.visible,
            error: this.props.error,
            disabled: this.props.disabled,

            // component
            dropdown: this.props.defaultClasses

            // variations
        };
    }
}
