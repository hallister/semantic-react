import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import { Device, Computer, Tablet, Mobile } from '../../collections';
import classNames from 'classnames';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    celled: ['internally'],
    divided: ['vertically'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    valigned: ['top', 'middle', 'bottom']
};

export class Grid extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        celled: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['internally']),
            React.PropTypes.bool
        ]),
        centered: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        columns: React.PropTypes.number,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        container: React.PropTypes.bool,
        defaultClasses: React.PropTypes.bool,
        divided: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['vertically']),
            React.PropTypes.bool
        ]),
        doubling: React.PropTypes.bool,
        equal: React.PropTypes.bool,
        padded: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['horizontally', 'vertically']),
            React.PropTypes.bool
        ]),
        relaxed: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        stackable: React.PropTypes.bool,
        valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
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
        let { aligned, celled, centered, children, columns, component,
              container, className, defaultClasses, divided, doubling, equal,
              padded, relaxed, stackable, valigned, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        // add classnames
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    getClasses() {
        let columns = Numbers.reduce((obj, num) => {
            obj[num + ' column'] = false;
            return obj;
        }, {});

        let classes = {
            ui: this.props.defaultClasses,
            ...this.style.computer,
            ...this.style.tablet,
            ...this.style.mobile,
            ...columns,

            aligned: this.props.aligned && this.props.aligned !== 'justified',
            container: this.props.container,
            centered: this.props.centered,
            celled: this.props.celled,
            doubling: this.props.doubling,
            divided: this.props.divided,
            padded: this.props.padded,
            relaxed: this.props.relaxed,
            stackable: this.props.stackable,

            grid: this.props.defaultClasses
        }

        if (this.props.equal) {
            classes['equal width'] = true;
        }

        if (this.props.columns !== false) {
            if (this.props.columns > 0  && this.props.columns <= 16) {
                classes[Numbers[this.props.columns] + ' column'] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps, { valigned: 'aligned' });
    }
}
