import React, { Component } from 'react';
import { Checkbox } from '../../modules';
import classNames from 'classnames';

export class Checkboxes extends Component {
    static propTypes = {
        defaultClasses: React.PropTypes.bool,
        grouped: React.PropTypes.bool,
        inline: React.PropTypes.bool,
        tag: React.PropTypes.func
    };
    
    static defaultProps = {
        defaultClasses: true,
        tag: React.DOM.div
    };

    static childContextTypes = {
        isCheckboxesChild: React.PropTypes.bool
    };

    constructor(props) {
        super(props);

        let active = this.props.radio ? '' : [];

        this.state = {
            currentActive: active
        };
    }

    getChildContext() {
        return {
            isCheckboxesChild: true
        };
    }

    onClick(key)  {
        // don't remove radio buttons if you click them twice
        if (key === this.state.currentActive && this.props.radio) {
            return;
        // but do remove for everything else
        } else {
            this.setCurrentActive(key);
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
            return React.Children.map(this.props.children, function(child) {
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
            }.bind(this));  
        }
    }

    render() {
        let classes = {
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

        return this.props.tag({
            className: classNames(this.props.className, classes)
        }, this.renderChildren());
    }

    // clone a chid and update the props
    cloneChild(index, child) {
        let boundClick = this.onClick.bind(this, index);

        let { children, defaultClasses, tag, grouped, 
              inline, onClick, ...other } = this.props;

        return React.cloneElement(child, {
            key: index,
            active: this.getCurrentActive(index),
            onClick: boundClick,
            radio: this.props.radio,
            readOnly: this.props.readOnly || this.props.disabled,
            ...other
        });
    }

    getCurrentActive(index) {
        let state = this.state.currentActive;
        let active = false;

        if (Array.isArray(state)) {
            active = state.indexOf(index) > -1 ? true : false;
        } else {
            active = state == index ? true : false;
        }

        return active;
    }

    setCurrentActive(index) {
        let state = this.state.currentActive;

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
            currentActive: state
        });
    }
}