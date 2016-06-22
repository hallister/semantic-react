import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Numbers, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';
import classNames from 'classnames';

const validProps = {
    aligned: ['right', 'left', 'center'],
    celled: ['internally'],
    divided: ['vertically', 'internally'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    reversed: ['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'],
    valigned: ['top', 'middle', 'bottom']
};

/**
 * Semantic Grid
 */
export default class Grid extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Horizontal content alignment
         */
        aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
        /**
         * Center columns
         */
        centered: React.PropTypes.bool,
        /**
         * Divide rows into cells
         */
        celled: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['internally']),
            React.PropTypes.bool
        ]),
        /**
         * Grid column count
         */
        columns: React.PropTypes.number,
        /**
         * Add container class, i.e. ui grid container
         */
        container: React.PropTypes.bool,
        /**
         * Add dividers between ros
         */
        divided: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['vertically', 'internally']),
            React.PropTypes.bool
        ]),
        /**
         * Double column width on tablet and mobile sizes
         */
        doubling: React.PropTypes.bool,
        /**
         * Automatically resize elements to split the available width evently
         */
        equal: React.PropTypes.bool,
        /**
         * Preserve gutters on first and las columns
         */
        padded: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['horizontally', 'vertically']),
            React.PropTypes.bool
        ]),
        /**
         * Increase size of gutters
         */
        relaxed: React.PropTypes.oneOfType([
            React.PropTypes.oneOf(['very']),
            React.PropTypes.bool
        ]),
        /**
         * Reverse the order of columns or rows by device
         */
        reversed: React.PropTypes.oneOfType([
            'mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'
        ]),
        /**
         * Automatically stack rows into single columns on mobile devices
         */
        stackable: React.PropTypes.bool,
        /**
         * Vertical content alignment
         */
        valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        // consume props
        /* eslint-disable no-use-before-define */
        let {
            aligned, defaultClasses, centered, celled, columns, container, component, children,
            divided, doubling, equal, padded, relaxed, reversed, stackable, valigned,
            ...other
        } = this.props;
        /* eslint-enable no-use-before-define */
        const Component = component;
        other.className = classNames(other.className, this.getClassNames());
        return (
            <Component
                {...other}
            >
                {children}
            </Component>
        );
    }

    getClassNames() {
        let classes = {
            // Default
            ui: this.props.defaultClasses,
            grid: this.props.defaultClasses,

            // variations
            container: this.props.container,
            relaxed: this.props.relaxed,
            centered: this.props.centered,
            stackable: this.props.stackable,
            doubling: this.props.doubling
        };

        if (this.props.columns && this.props.columns > 0 && this.props.columns <= 16) {
            classes[`${Numbers[this.props.columns]} column`] = true;
        }

        if (this.props.equal) {
            classes['equal width'] = true;
        }

        return validateClassProps(classes, this.props, validProps, { valigned: 'aligned' });
    }
}
