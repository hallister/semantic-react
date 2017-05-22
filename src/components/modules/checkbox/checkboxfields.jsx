import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from './checkbox';
import DefaultProps  from '../../defaultProps';

export default class CheckboxFields extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        disabled: PropTypes.bool,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        radio: PropTypes.bool,
        readOnly: PropTypes.bool,
        type: PropTypes.oneOf([
            'grouped',
            'inline'
        ]).isRequired
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Checkbox: Checkbox
    };
    /* eslint-enable */

    constructor(props) {
        super(props);

        let active = this.props.radio ? -1 : [];

        this.state = {
            active: active
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
                if (child.type == CheckboxFields.Components.Checkbox) {
                    element = this.cloneChild(index, child);

                    element = React.DOM.div({
                        key: index,
                        className: 'field'
                    }, element);

                    index++;
                } else if (typeof child === 'string') {
                    return (
                        <label htmlFor={this.props.name}>{child}</label>
                    );
                } else {
                    element = child;
                }

                return element;
            });
        }
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { component, defaultClasses, name, disabled, onClick, radio, readOnly, type, ...other } = this.props;
        /* eslint-enable no-use-before-define */
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

        /* eslint-disable no-use-before-define */
        let { children, component, defaultClasses, onClick, type,
              ...other } = this.props;
        /* eslint-enable no-use-before-define */

        return React.cloneElement(child, {
            key: index,
            checked: this.getActive(index),
            onClick: boundClick,
            radio: this.props.radio,
            readOnly: this.props.readOnly || this.props.disabled,
            ...other
        });
    }

    getClasses() {
        let classes = {
            // default

            // positioning

            // types

            // component

            // variations
            fields: React.Children.count(this.props.children) > 1
        };

        classes[this.props.type] = !!this.props.type;

        return classes;
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
            let position = state.indexOf(index);

            if (position > -1) {
                state.splice(position, 1);
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
