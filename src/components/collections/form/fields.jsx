import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { countChildren, Numbers } from '../../utilities';
import Field from './field';
import classNames from 'classnames';


export default class Fields extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.any,
        component: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        equalWidth: React.PropTypes.bool,
        fluid: React.PropTypes.bool,
        grouped: React.PropTypes.bool,
        inline: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
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
        let { children, className, component, ...other } = this.props;
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

