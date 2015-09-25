import React, { Component } from 'react';
import { Animate } from '../../modules';
import classNames from 'classnames';

@Animate
export class Dimmable extends Component {
    static propTypes = {
        children: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        page: React.PropTypes.bool,
        style: React.PropTypes.object
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.page) {
            document.body.classList.add('dimmed');
        }
    }

    componentWillUnmount() {
        if (this.props.page) {
            document.body.classList.remove('dimmed');
        }
    }

    render() {
        return React.createElement(
            this.props.component,
            {
                className: classNames(this.getClasses()),
                style: this.props.style
            },
            this.props.children
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClasses,
            active: this.props.defaultClasses,
            dimmer: this.props.defaultClasses,
            page: this.props.page
        };
    }
}