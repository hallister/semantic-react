import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';
import { defaultPropTypes, defaultPropValues } from '../../defaultProps';

/**
 * Item is collection of elements. It could be menu/dropdown item or part ofr <Items /> collection
 */
@Radium
export class Item extends React.Component {
    static propTypes = {
        ...defaultPropTypes,
        /**
         * Make item clickable
         */
        link: React.PropTypes.bool,
        /**
         * Item click handler
         */
        onClick: React.PropTypes.func
    };
    
    static defaultProps = {
        ...defaultPropValues
    };

    render() {
        /* eslint-disable no-use-before-define */
        let { component, link, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());
        
        return React.createElement(
            component,
            other,
            this.props.children
        );
    }

    getClasses() {
        return {
            link: this.props.link || this.props.onClick,
            // component
            item: this.props.defaultClasses
        };
    }
}
