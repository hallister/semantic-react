import React, { Component } from 'react';
import { Icon } from '../../elements';
import classNames from 'classnames';

export class AccordionTitle extends Component {
    static propTypes = {
        active: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool,
        icon: React.PropTypes.bool,
        onClick: React.PropTypes.func

    };

    static defaultProps = {
        defaultClasses: true,
        icon: 'dropdown'
    };

    constructor(props) {
        super(props);
    }

    render() {
        let classes = {
            // default

            // positioning

            // types

            // variations
            active: this.props.active,

            // component
            title: this.props.defaultClasses
        };

        return (
            <div 
                className={classNames(this.props.className, classes)} 
                onClick={this.props.onClick}
            >
                <Icon name={this.props.icon} />
                {this.props.children}
            </div>
        )
    }
}