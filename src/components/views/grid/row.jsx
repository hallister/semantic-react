import React, { Component } from 'react';
import classNames from 'classnames';

export class Row extends Component {
    static defaultProps = {
        defaultClasses: true
    };

    static propTypes = {

    };

    renderColumn() {
        return (
            <Column {...this.props} row>
                {this.props.children}
            </Column>
        );
    }

    render() {
        if (this.props.column) {
            return this.renderColumn();
        }

        let classes = {
            // positions
            equal: this.props.even,
            width: this.props.even,

            // variations

            // component
            row: this.props.defaultClasses
        };

        let Tag = returnTag(this.props.tag || React.DOM.div);   

        let { defaultClasses, even, ...other } = this.props;

        return Tag({
            className: classNames(this.props.className, classes),
            ...other
            }, 
            this.props.children
        );

    }
}