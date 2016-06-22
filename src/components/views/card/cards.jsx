import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Cards extends React.Component {
    static propTypes = {
        ...DefaultProps.propTypes,
        link: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static childContextTypes = {
        isCardsChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            isCardsChild: true
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            link: this.props.link || this.props.onClick,

            // component
            cards: this.props.defaultClasses
        };
        
        /* eslint-disable no-use-before-define */
        let {
            component, defaultClasses, children, link, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */
        
        let Component = component;
        other.className = classNames(other.className, classes);

        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }
}
