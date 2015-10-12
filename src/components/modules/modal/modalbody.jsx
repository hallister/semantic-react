import React from 'react';
import { Animate, $ } from '../../modules';
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
        end: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
        fullscreen: React.PropTypes.bool,
        offset: React.PropTypes.number,
        padding: React.PropTypes.number,
        size: React.PropTypes.string,
        start: React.PropTypes.shape({
            duration: React.PropTypes.number,
            easing: React.PropTypes.string,
            from: React.PropTypes.object,
            to: React.PropTypes.object
        }),
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
    }

    componentDidMount() {
        if (!this.sizes || !this.sizes.height) {
            let component = $(this);

            this.sizes = {
                pageHeight: $(window).height(),
                height: component.height() + this.props.offset,
                contextHeight: $(window).height()
            };

            this.forceUpdate();
        }
    }

    render() {
        let { active, basic, children, className, component, defaultClasses,
              fullscreen, offset, padding, size, style, start, end, ...other } = this.props;
        other.className = classNames(this.props.className, this.getClasses());

        if (this.modalFits() && this.props.active) {
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
            visible: this.props.active,
            active: this.props.active,

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
