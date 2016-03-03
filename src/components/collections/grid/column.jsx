import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import { Device, Computer, Tablet, Mobile } from '../../collections';
import classNames from 'classnames';
import Radium from 'radium';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    floated: ['right', 'left'],
    visible: ['large screen', 'wide screen', 'computer', 'mobile', 'tablet'],
    valigned: ['top', 'middle', 'bottom']

};

@Radium
export class Column extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        color: React.PropTypes.string,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        floated: React.PropTypes.oneOf(['right', 'left']),
        style: React.PropTypes.any,
        valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
        visible: React.PropTypes.oneOf(['large screen', 'wide screen', 'computer', 'mobile', 'tablet']),
        width: React.PropTypes.number
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    constructor(props) {
        super(props);

        this.style = {
            mobile: {},
            computer: {},
            tablet: {}
        }
    }

    componentDidMount() {
        this.forceUpdate();
    }

    onFoundDevice(style, type) {
        this.style[type] = style;
    }

    renderChildren() {
        let children = [Device, Computer, Tablet, Mobile];
        return React.Children.map(this.props.children, (child, index) => {
            if (children.indexOf(child.type) > -1) {
                return React.cloneElement(
                    child,
                    {
                        callback: this.onFoundDevice.bind(this),
                        key: index
                    },
                    child.children
                )
            } else {
                return child;
            }
        });
    }

    render() {
        // consume props
        /* eslint-disable no-use-before-define */
        let { aligned, color, component, className, children, defaultClasses,
            floated, valigned, width, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        // add classnames
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            React.Children.count(this.props.children) !== 0 ? this.renderChildren() : []
        );
    }

    getClasses() {
        let classes = {
            ...this.style.computer,
            ...this.style.tablet,
            ...this.style.mobile,
            column: this.props.defaultClasses,

            aligned: this.props.aligned && this.props.aligned !== 'justified'
        }

        classes[this.props.color] = !!this.props.color;

        if (this.props.width) {
            if (this.props.width > 0  && this.props.width <= 16) {
                classes[Numbers[this.props.width] + ' wide'] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps, { visible: 'only', valigned: 'aligned' });
    }
}
