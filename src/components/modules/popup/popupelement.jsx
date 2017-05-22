import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export const POSITIONS = [
    'top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'
];

/**
 * Popup component without animation transitions
 */
export default class PopupElement extends React.PureComponent {
    static propTypes = {
        /**
         * Default properties
         */
        ...DefaultProps.propTypes,
        /**
         * Basic popup variation
         */
        basic: PropTypes.bool,
        /**
         * Fluid popup
         */
        fluid: PropTypes.bool,
        /**
         * No maximum width and continue to flow to fit its content
         */
        flowing: PropTypes.bool,
        /**
         * Inverted popup
         */
        inverted: PropTypes.bool,
        /**
         * Popup size
         */
        size: PropTypes.oneOf([
            'mini', 'tiny', 'small', 'large', 'huge'
        ]),
        /**
         * Make content of popup wide
         */
        wide: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string
        ]),
        /**
         * Popup position
         */
        position: PropTypes.oneOf([
            'top left', 'top center', 'top right', 'right center', 'bottom right', 'bottom center', 'bottom left', 'left center'
        ])
    };
    
    static defaultProps = {
        ...DefaultProps.defaultProps,
        position: 'top left'
    };

    constructor(props) {
        super(props);
        this.popupEl = null;
    }

    render() {
        /* eslint-disable no-use-before-define */
        const { className, defaultClasses, children, component, basic, fluid, flowing, inverted, size, wide, position, ...other } = this.props;
        /* eslint-enable no-use-before-define */
        // other.style = Object.assign({}, style, pStyle);

        const Component = component;

        other.className = classNames(className, this.getClasses());

        return (
            <Component {...other}
                ref={ref => this.popupEl = ref}
            >
                {children}
            </Component>
        )
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            popup: this.props.defaultClasses,
            basic: this.props.basic,
            fluid: this.props.fluid,
            flowing: this.props.flowing,
            inverted: this.props.inverted,
            wide: this.props.wide,
            visible: true
        };
        
        if (this.props.wide) {
            // very wide
            if (typeof this.props.wide === 'string') {
                classes['very wide'] = true;
            } else {
                classes['wide'] = true;
            }
        }
        
        
        if (this.props.size) {
            classes[this.props.size] = true;
        }

        let position = this.props.position.split(' ');

        position.forEach(pos => {
            classes[pos] = true;
        });

        return classes;
    }
}
