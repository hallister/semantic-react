import React from 'react';
import Transition from 'react-addons-transition-group';

export class Animations extends React.Component {
    static propTypes = {
        children: React.PropTypes.node,
        enter: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.shape({
                ease: React.PropTypes.string,
                duration: React.PropTypes.number,
                from: React.PropTypes.object,
                to: React.PropTypes.object
            })
        ]),
        leave: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.shape({
                ease: React.PropTypes.string,
                duration: React.PropTypes.number,
                from: React.PropTypes.object,
                to: React.PropTypes.object
            })
        ])
    };

    static defaultProps = {
        enter: false,
        leave: false
    };

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            let props = {};
            props.enter = this.props.enter !== false ? this.props.enter : false;
            props.leave = this.props.leave !== false ? this.props.leave : false;

            // ReactTransitionGroup will error on free-floating text.
            if (typeof child === 'string') {
                return (
                    <span>{child}</span>
                );
            }

            if (props.enter === false && props.leave === false || child.props.noAnimate === true) {
                return child;
            } else {
                return React.cloneElement(
                    child,
                    props
                );
            }
        });
    }

    render() {
        let { enter, leave, ...other } = this.props;

        let children = this.renderChildren();

        return (
            <Transition {...other}>
                {children}
            </Transition>
        );
    }
}
