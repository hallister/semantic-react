import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import classNames from 'classnames';

let validProps = {
    aligned: ['right', 'left', 'justified', 'center'],
    valigned: ['top', 'middle', 'bottom'],
    visible: ['large screen', 'wide screen', 'computer', 'mobile', 'tablet']
};

export class Row extends React.Component {
    static propTypes = {
        aligned: React.PropTypes.oneOf(validProps.aligned),
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        color: React.PropTypes.string,
        columns: React.PropTypes.number,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        stretched: React.PropTypes.bool,
        valigned: React.PropTypes.oneOf(validProps.valigned),
        visible: React.PropTypes.oneOf(validProps.visible)
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    render() {
        // consume props
        let { aligned, className, component, children, color, columns,
            defaultClasses, stretched, valigned, visible,
            ...other } = this.props;

        // add classnames
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let columns = Numbers.reduce((obj, num) => {
            obj[num + ' column'] = false;
            return obj;
        }, {});

        let classes = {
            ...columns,

            aligned: this.props.aligned && this.props.aligned !== 'justified',

            only: this.props.visible,

            stretched: this.props.stretched,

            row: this.props.defaultClasses
        }

        if (this.props.columns !== false) {
            if (this.props.columns > 0  && this.props.columns <= 16) {
                classes[Numbers[this.props.columns] + ' column'] = true;
            }
        }

        classes[this.props.color] = !!this.props.color;

        return validateClassProps(classes, this.props, validProps, { visible: 'only' });
    }
}
