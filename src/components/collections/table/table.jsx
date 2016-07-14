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
        /**
         * A table header, row, or cell can adjust its text alignment
         */
        aligned: React.PropTypes.oneOf(['top', 'bottom']),
        /**
         * A table can reduce its complexity to increase readability.
         */
        basic: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        /**
         * A table may be divided each row into separate cells
         */
        celled: React.PropTypes.bool,
        /**
         * A cell can be collapsing so that it only uses as much space as required
         */
        collapsing: React.PropTypes.bool,
        /**
         * A table can be given a color to distinguish it from other tables.
         */
        color: React.PropTypes.string,
        /**
         * A table can specify its column count to divide its content evenly
         */
        columns: React.PropTypes.number,
        /**
         * A table may sometimes need to be more compact to make more rows visible at a time
         */
        compact: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        definition: React.PropTypes.bool,
        /**
         * A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content.
         */
        fixed: React.PropTypes.bool,
        /**
         * A table's colors can be inverted
         */
        inverted: React.PropTypes.bool,
        /**
         * A table may sometimes need to be more padded for legibility
         */
        padded: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        /**
         * A table can have its rows appear selectable
         */
        selectable: React.PropTypes.bool,
        /**
         * A table can specify that its cell contents should remain on a single line, and not wrap.
         */
        singleLine: React.PropTypes.bool,
        /**
         * A table can also be small or large
         */
        size: React.PropTypes.string,
        /**
         * A table may allow a user to sort contents by clicking on a table header.
         * NOTE: You need to set "sorted descending"/"sorted ascending" class names for corresponding <th> element
         */
        sortable: React.PropTypes.bool,
        /**
         * A table can specify how it stacks table content responsively
         */
        stackable: React.PropTypes.shape({
            computer: React.PropTypes.bool,
            mobile: React.PropTypes.bool,
            tablet: React.PropTypes.bool
        }),
        /**
         * A table can stripe alternate rows of content with a darker color to increase contrast
         */
        striped: React.PropTypes.bool,
        /**
         * A table can be formatted to display complex structured data
         */
        structured: React.PropTypes.bool,
        /**
         * Reverse of stackable
         */
        unstackable: React.PropTypes.shape({
            computer: React.PropTypes.bool,
            mobile: React.PropTypes.bool,
            tablet: React.PropTypes.bool
        }),
        /**
         * A table header, row, or cell can adjust its vertical alignment
         */
        valigned: React.PropTypes.oneOf(['center', 'right']),
        /**
         * Table width in grid columns
         */
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
        let { aligned, basic, celled, children, className, collapsing, compact, color, component,
            defaultClasses, columns, definition, fixed, inverted, padded, selectable, singleLine,
            size, sortable, stackable, striped, structured, unstackable, valigned, width,
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
            sortable: this.props.sortable,
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
