import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Numbers, validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['top', 'bottom'],
    basic: ['very'],
    padded: ['very'],
    valigned: ['center', 'right']
};

export default class Table extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        aligned: React.PropTypes.oneOf(['top', 'bottom']),
        basic: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        celled: React.PropTypes.bool,
        collapsing: React.PropTypes.bool,
        color: React.PropTypes.string,
        columns: React.PropTypes.number,
        compact: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        definition: React.PropTypes.bool,
        fixed: React.PropTypes.bool,
        inverted: React.PropTypes.bool,
        padded: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        selectable: React.PropTypes.bool,
        singleLine: React.PropTypes.bool,
        size: React.PropTypes.string,
        stackable: React.PropTypes.shape({
            computer: React.PropTypes.bool,
            mobile: React.PropTypes.bool,
            tablet: React.PropTypes.bool
        }),
        striped: React.PropTypes.bool,
        structured: React.PropTypes.bool,
        unstackable: React.PropTypes.shape({
            computer: React.PropTypes.bool,
            mobile: React.PropTypes.bool,
            tablet: React.PropTypes.bool
        }),
        valigned: React.PropTypes.oneOf(['center', 'right']),
        width: React.PropTypes.number
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'table',
        stackable: {
            computer: false,
            mobile: false,
            tablet: false
        },
        unstackable: {
            computer: false,
            mobile: false,
            tablet: false
        }
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { basic, celled, children, className, collapsing, compact, component,
            defaultClasses, definition, fixed, inverted, selectable, singleLine,
            stackable, striped, structured, unstackable, valigned,
            ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(
            className,
            this.getClasses(),
            this.mobileFormat('stackable', stackable),
            this.mobileFormat('unstackable', unstackable)
        );

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            basic: this.props.basic,
            collapsing: this.props.collapsing,
            compact: this.props.compact,
            celled: this.props.celled,
            definition: this.props.definition,
            fixed: this.props.fixed,
            inverted: this.props.inverted,
            selectable: this.props.selectable,
            'single line': this.props.singleLine,
            striped: this.props.striped,
            structured: this.props.structured,

            table: this.props.defaultClasses
        }

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;

        if (this.props.columns !== false) {
            if (this.props.columns > 0 && this.props.columns <= 16) {
                classes[Numbers[this.props.columns] + ' column'] = true;
            }
        }

        if (this.props.width !== false) {
            if (this.props.width > 0 && this.props.width <= 16) {
                classes[Numbers[this.props.width] + ' wide'] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps, { valigned: 'aligned' });
    }

    mobileFormat(name, options) {
        let classes = {};

        Object.keys(options).forEach(value => {
            if (options[value])
                classes[value + ' ' + name] = true;
        });

        // all of the options are true?
        return classes;
    }
}
