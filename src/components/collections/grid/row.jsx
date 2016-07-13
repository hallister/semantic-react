import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Numbers, validateClassProps } from '../../utilities';
import DefaultProps from '../../defaultProps';
import classNames from 'classnames';

const validProps = {
    aligned: ['right', 'left', 'center'],
    valigned: ['top', 'middle', 'bottom']
};

/**
 * Grid row
 */
export default class Row extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Horizontal content alignment
         */
        aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
        /**
         * Center columns in row
         */
        centered: React.PropTypes.bool,
        /**
         * Double column width on tablet and mobile sizes
         */
        doubling: React.PropTypes.bool,
        /**
         * Automatically resize elements to split the available width evently
         */
        equal: React.PropTypes.bool,
        /**
         * Only visible for types. Could be single type string or array, i.e. only={["mobile","tablet"]}
         */
        only: React.PropTypes.oneOfType([
            React.PropTypes.oneOf([
                'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
            ]),
            React.PropTypes.arrayOf(React.PropTypes.oneOf([
                'mobile', 'tablet', 'computer', 'large screen', 'widescreen'
            ]))
        ]),
        /**
         * Specify row columns count
         */
        columns: React.PropTypes.number,
        /**
         * Stretch content to take up the entire column height
         */
        stretched: React.PropTypes.bool,
        /**
         * Row color
         */
        color: React.PropTypes.string,
        /**
         * Justified content fits exactly inside the grid column, taking up the entire width from one side to the other
         */
        justified: React.PropTypes.bool,
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
        /* eslint-disable no-use-before-define */
        let {
            aligned, component, centered, children, columns, defaultClasses, doubling, equal,
            stretched, color, only, justified, valigned, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */

        let Component = component;
        other.className = classNames(other.className, this.getClasses());

        return (
            <Component {...other}>
                       {children}
            </Component>
        );
    }

    getClasses() {
        let classes = {
            row: this.props.defaultClasses,
            centered: this.props.centered,
            doubling: this.props.doubling,
            stretched: this.props.stretched,
            justified: this.props.justified
        };

        if (this.props.columns && this.props.columns > 0 && this.props.columns <= 16) {
            classes[`${Numbers[this.props.columns]} column`] = true;
        }

        classes[this.props.color] = !!this.props.color;

        if (this.props.equal) {
            classes['equal width'] = true;
        }

        if (this.props.only) {
            let device;
            if (Array.isArray(this.props.only)) {
                device = this.props.only.join(' ');
            } else {
                device = this.props.only;
            }
            if (device) {
                classes[`${device} only`] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps, { valigned: 'aligned' });
    }
}
