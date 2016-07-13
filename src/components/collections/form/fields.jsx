import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { countChildren, Numbers } from '../../utilities';
import Field from './field';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';


export default class Fields extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Fields can automatically divide fields to be equal width
         */
        equalWidth: React.PropTypes.bool,
        /**
         * Fields can have their widths divided evenly
         */
        fluid: React.PropTypes.bool,
        /**
         * Fields can show related choices
         */
        grouped: React.PropTypes.bool,
        /**
         * Multiple fields may be inline in a row
         */
        inline: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Field: Field
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { children, className, component, defaultClasses, equalWidth, fluid, grouped, inline, ...other } = this.props;
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
            grouped: this.props.grouped,
            inline: this.props.inline
        };

        if (this.props.fluid) {
            let childCount = countChildren(this.props.children, Fields.Components.Field); // eslint-disable-line

            if (childCount > 0  && childCount <= 12) {
                classes[Numbers[childCount]] = true;
            }
        }

        if (this.props.equalWidth) {
            classes['equal width'] = true;
        }

        classes.fields = this.props.defaultClasses;

        return classes;
    }
}

