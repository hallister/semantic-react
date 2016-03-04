import React from 'react';
import classNames from 'classnames';
import Radium from 'radium';

@Radium
export default class Cards extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        defaultClasses: React.PropTypes.bool,
        link: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static childContextTypes = {
        isCardsChild: React.PropTypes.bool
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true
    };

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            isCardsChild: true
        }
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
