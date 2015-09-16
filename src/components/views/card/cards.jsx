import React, { Component } from 'react';
import classNames from 'classnames';

export class Cards extends Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool,
        link: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static childContextTypes = {
        DisableUIClass: React.PropTypes.bool
    };

    static defaultProps = {
        defaultClasses: true
    };

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            DisableUIClass: true
        }
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            link: this.props.link || this.props.onClick,

            // component
            cards: this.props.defaultClasses
        };

        return (
            <div className={classNames(this.props.className, classes)}>
                {this.props.children}
            </div>
        );
    }
}
