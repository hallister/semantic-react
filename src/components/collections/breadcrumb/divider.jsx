import React from 'react';
import classNames from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';
import DefaultProps from '../../defaultProps';
import { hasFirstChild } from '../../utilities';
import Icon from '../../elements/icon/icon';

/**
 * Divider for breadcrumb
 */
export default class BreadcrumbDivider extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon
    };
    /* eslint-enable */

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        const { component, defaultClasses, children, ...other } = this.props;
        other.className = classNames(other.className, this.getClasses());
        let Component = component;

        // If divider has icon child return only icon
        if (hasFirstChild(children, BreadcrumbDivider.Components.Icon)) {
            const [ iconChild, ...otherChilds ] = React.Children.toArray(children);
            return React.cloneElement(iconChild, {
                className: classNames(iconChild.props.className, this.getClasses())
            });
        } else {
            return (
                <Component {...other}>
                    {children}
                </Component>
            );
        }
    }

    getClasses() {
        return {
            divider: this.props.defaultClasses
        }
    }
}
