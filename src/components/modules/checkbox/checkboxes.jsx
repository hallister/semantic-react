import React, { Component } from 'react';
import { Checkbox } from '../../modules';
import classNames from 'classnames';

export class Checkboxes extends Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.node
        ]),
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        grouped: React.PropTypes.bool,
        inline: React.PropTypes.bool,
        name: React.PropTypes.string,
        onClick: React.PropTypes.func,
        radio: React.PropTypes.bool,
        readOnly: React.PropTypes.bool
    };

    static childContextTypes = {
        isCheckboxesChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    constructor(props) {
        super(props);

        let active = this.props.radio ? '' : [];

        this.state = {
            active: active
        };
    }

    getChildContext() {
        return {
            isCheckboxesChild: true
        };
    }

    onClick(key)  {
        // don't remove radio buttons if you click them twice
        if (key === this.state.active && this.props.radio) {
            return;
        // but do remove for everything else
        } else {
            this.setActive(key);
        }
    }

    renderChildren() {
        let index = 0;
        let element = null;

        if (React.Children.count(this.props.children) === 1) {
            return this.cloneChild(index,
                React.Children.only(this.props.children)
            );
        } else {
            return React.Children.map(this.props.children, child => {
                if (child.type == Checkbox) {
                    element = this.cloneChild(index, child);

                    element = React.DOM.div({
                        key: index,
                        className: 'field'
                    }, element);

                    index++;
                } else {
                    element = child;
                }

                return element;
            });
        }
    }

    render() {
        let { component, defaultClasses, name, ...other } = this.props;
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    // clone a chid and update the props
    cloneChild(index, child) {
        let boundClick = this.onClick.bind(this, index);

        let { children, component, defaultClasses, grouped,
              inline, onClick, ...other } = this.props;

        return React.cloneElement(child, {
            key: index,
            active: this.getActive(index),
            onClick: boundClick,
            radio: this.props.radio,
            readOnly: this.props.readOnly || this.props.disabled,
            ...other
        });
    }

    getClasses() {
        return {
            // default
            checkboxes: true,

            // positioning

            // types

            // component

            // variations
            grouped: this.props.grouped,
            inline: this.props.inline,
            fields: React.Children.count(this.props.children) > 1
        };
    }

    getActive(index) {
        let state = this.state.active;
        let active = false;

        if (Array.isArray(state)) {
            active = state.indexOf(index) > -1 ? true : false;
        } else {
            active = state == index ? true : false;
        }

        return active;
    }

    setActive(index) {
        if (this.props.readOnly || this.props.disabled) return;

        let state = this.state.active;

        // should only be an array if it's checkbox, not radio
        // IE 9+ for indexOf
        if (Array.isArray(state)) {
            if (state.indexOf(index) > -1) {
                state.splice(index, 1);
            } else {
                state.push(index);
            }
        // it's a radio
        } else {
            state = index;
        }

        this.setState({
            active: state
        });
    }
}
