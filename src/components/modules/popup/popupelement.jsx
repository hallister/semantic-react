import React from 'react';
import { Animate } from '../../modules';
import classNames from 'classnames';

@Animate
export class PopupElement extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        classes: React.PropTypes.object,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        pStyle: React.PropTypes.object,
        style: React.PropTypes.object
    };

    static defaultProps = {
        component: 'div'
    };

    render() {
        let { className, classes, style, pStyle, ...other } = this.props;
        other.style = Object.assign({}, style, pStyle);

        other.className = classNames(className, classes);

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }
}
