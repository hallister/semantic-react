import React from 'react';
import PropTypes from 'prop-types';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

let validProps = {
    aligned: ['right', 'left', 'center'],
    valigned: ['top', 'bottom', 'middle']
};

export default class Td extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Cell text alignment
         */
        aligned: PropTypes.oneOf(['right', 'left', 'center']),
        /**
         * A cell can be collapsing so that it only uses as much space as required
         */
        collapsing: PropTypes.bool,
        /**
         * A table cell can be selectable
         */
        selectable: PropTypes.bool,
        /**
         * Content should remain on a single line, and not wrap.
         */
        singleLine: PropTypes.bool,
        /**
         * Cell emphasis
         */
        emphasis: PropTypes.oneOf(['negative', 'positive', 'error', 'warning']),
        /**
         * Vertical cell alignment
         */
        valigned: PropTypes.oneOf(['top', 'bottom', 'middle'])
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'td'
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { aligned, children, className, defaultClasses, collapsing, component, singleLine, selectable, emphasis,
            valigned, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(className, this.getClasses());

        return React.createElement(
            component,
            other,
            children
        );
    }

    getClasses() {
        let classes = {
            collapsing: this.props.collapsing,
            selectable: this.props.selectable,
            'single line': this.props.singleLine
        };
        classes[this.props.emphasis] = !!this.props.emphasis;

        classes[this.props.type] = !!this.props.type;

        return validateClassProps(classes, this.props, validProps, { valigned: 'aligned' });
    }
}
