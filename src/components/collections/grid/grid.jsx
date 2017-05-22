import React from 'react';
import PropTypes from 'prop-types';
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
export default class Grid extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Horizontal content alignment
         */
        aligned: PropTypes.oneOf(['right', 'left', 'center']),
        /**
         * Center columns
         */
        centered: PropTypes.bool,
        /**
         * Divide rows into cells
         */
        celled: PropTypes.oneOfType([
            PropTypes.oneOf(['internally']),
            PropTypes.bool
        ]),
        /**
         * Grid column count
         */
        columns: PropTypes.number,
        /**
         * Add container class, i.e. ui grid container
         */
        container: PropTypes.bool,
        /**
         * Add dividers between ros
         */
        divided: PropTypes.oneOfType([
            PropTypes.oneOf(['vertically', 'internally']),
            PropTypes.bool
        ]),
        /**
         * Double column width on tablet and mobile sizes
         */
        doubling: PropTypes.bool,
        /**
         * Automatically resize elements to split the available width evently
         */
        equal: PropTypes.bool,
        /**
         * Preserve gutters on first and las columns
         */
        padded: PropTypes.oneOfType([
            PropTypes.oneOf(['horizontally', 'vertically']),
            PropTypes.bool
        ]),
        /**
         * Increase size of gutters
         */
        relaxed: PropTypes.oneOfType([
            PropTypes.oneOf(['very']),
            PropTypes.bool
        ]),
        /**
         * Reverse the order of columns or rows by device
         */
        reversed: PropTypes.oneOfType([
            'mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'
        ]),
        /**
         * Automatically stack rows into single columns on mobile devices
         */
        stackable: PropTypes.bool,
        /**
         * Vertical content alignment
         */
        valigned: PropTypes.oneOf(['top', 'middle', 'bottom'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

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
