import React from 'react';
import ReactDOM from 'react-dom';
import { Animate, JQL } from '../../modules';
import classNames from 'classnames';

@Animate
export class ModalBody extends React.Component {
    static propTypes = {
        active: React.PropTypes.bool,
        basic: React.PropTypes.bool,
        children: React.PropTypes.node,
        className: React.PropTypes.node,
        component: React.PropTypes.oneOfType([
            React.PropTypes.func,
            React.PropTypes.string
        ]),
        defaultClasses: React.PropTypes.bool,
        fullscreen: React.PropTypes.bool,
        offset: React.PropTypes.number,
        padding: React.PropTypes.number,
        size: React.PropTypes.string,
        style: React.PropTypes.object
    };

    static defaultProps = {
        component: 'div',
        defaultClasses: true,
        offset: 0,
        padding: 50,
        style: {}
    };

    constructor(props) {
        super(props);

        this.state = {
            active: true
        }
    }

    componentDidMount() {
        if (!this.sizes || !this.sizes.height) {
            let component = new JQL(ReactDOM.findDOMNode(this));

            this.sizes = {
                pageHeight: window.outerHeight,
                height: component.property('outerHeight') + this.props.offset,
                contextHeight: window.outerHeight
            };

            /* this is a unique situation in that we need the active state to be
            changed after calculating the properties. We have to set the state here (but
            only once) */
            /* eslint-disable react/no-did-mount-set-state */
            this.setState({
                active: false
            });
        }
    }

    componentWillReceiveProps(props) {
        if (props.active != this.props.active) {
            this.setState({
                active: props.active
            });
        }
    }

    render() {
        let { component, defaultClasses, style, ...other } = this.props;
        other.className = classNames(this.props.className, this.getClasses());

        if (this.modalFits() && this.state.active) {
            other.style = Object.assign(
                this.props.style,
                {
                    top: '',
                    marginTop: -(this.sizes.height / 2)
                }
            )
        }

        if (this.props.component == ModalBody) {
            component = 'div';
        } else {
            component = this.props.component;
        }

        return React.createElement(
            component,
            other,
            this.props.children
        );
    }

    modalFits() {
        if (this.sizes != null) {
            return ((this.sizes.height + (this.props.padding * 2)) < this.sizes.contextHeight);
        } else {
            return false;
        }

    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,

            // visibility
            visible: this.state.active,
            active: this.state.active,

            // variations
            basic: this.props.basic,
            fullscreen: this.props.fullscreen,

            // component
            modal: this.props.defaultClasses
        }

        classes[this.props.size] = !!this.props.size;

        return classes;
    }
}
