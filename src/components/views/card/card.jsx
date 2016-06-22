import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Card extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        centered: React.PropTypes.bool,
        col: React.PropTypes.string,
        color: React.PropTypes.string,
        doubling: React.PropTypes.string,
        fluid: React.PropTypes.bool,
        link: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static contextTypes = {
        isCardChild: React.PropTypes.bool
    };

    static childContextTypes = {
        isCardChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            isCardChild: true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        /* eslint-disable no-use-before-define */
        let { centered, col, color, doubling, defaultClasses, fluid, ...other } = this.props;
        /* eslint-enable no-use-before-define */

        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.props.children
        );
    }

    getClasses() {
        let classes = {
            // default
            ui: this.props.defaultClasses  && !this.context.isChildCard,


            // component
            card: this.props.defaultClasses,

            // variations
            centered: this.props.centered,
            doubling: this.props.doubling,
            color: this.props.color,
            fluid: this.props.fluid,
            link: this.props.link || this.props.onClick
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.col] = !!this.props.col;
        classes[this.props.doubling] = !!this.props.doubling;

        return classes;
    }
}
