import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import DefaultProps from '../../defaultProps';
import Icon from './../icon/icon';
import Label from './../label/label';

/**
 * Controlled basic input
 */
export default class Input extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Action component
         */
        actionComponent: elementType,
        /**
         * Action position
         */
        actionPosition: PropTypes.oneOf(['left', 'right']),
        /**
         * An input can take the size of its container
         */
        fluid: PropTypes.bool,
        /**
         * Render icon
         */
        icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool
        ]),
        /**
         * Icon position
         */
        iconPosition: PropTypes.oneOf(['left', 'right']),
        /**
         * Pass custom icon component
         */
        iconComponent: elementType,
        /**
         * Inverted input
         */
        inverted: PropTypes.bool,
        /**
         * Render label for input
         */
        label: PropTypes.string,
        /**
         * Pass custom label component
         */
        labelComponent: elementType,
        /**
         * Label position
         */
        labelPosition: PropTypes.oneOf(['left', 'right', 'left corner', 'right corner']),
        /**
         * Input placeholder
         */
        placeholder: PropTypes.string,
        /**
         * Input size
         */
        size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
        /**
         * Input state
         */
        state: PropTypes.oneOfType([
            PropTypes.oneOf(['focus', 'loading', 'disabled', 'error']),
            PropTypes.arrayOf(PropTypes.oneOf(['focus', 'loading', 'disabled', 'error']))
        ]),
        /**
         * Render transparent input
         */
        transparent: PropTypes.bool,
        /**
         * Input value
         */
        value: PropTypes.string
    };

    static defaultProps = {
        ...DefaultProps.defaultProps,
        component: 'input',
        iconPosition: 'right',
        labelPosition: 'left',
        actionPosition: 'right'
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon,
        Label: Label
    };
    /* eslint-enable */

    render() {
        const {
            component, children, className, defaultClasses, style, actionComponent, actionPosition, fluid, icon, iconPosition, iconComponent,
            inverted, label, labelComponent, labelPosition, placeholder, size, state, transparent, value, ...other
        } = this.props;

        const wrapperClassName = classNames(className, this.getClasses());
        const InputComponent = component;
        const IconComponent = iconComponent || Input.Components.Icon;
        const LabelComponent = labelComponent || Input.Components.Label;
        const ActionComponent = actionComponent;

        return (
            <div className={wrapperClassName} style={style}>
                 {/* First should be action in left position */}
                 {actionComponent && actionPosition === 'left' && <ActionComponent />}
                 {/* Second should be label in left or left corner position */}
                 {label && (labelPosition === 'left' || labelPosition === 'left corner') &&
                 <LabelComponent corner={labelPosition === 'left corner' ? 'left' : null}>
                                 {label}
                 </LabelComponent>}
                 {/* Next input itself */}
                 <InputComponent
                    type="text" {...other}
                    value={value}
                    placeholder={placeholder} />
                 {/* Icon, markup doesn't matter for placement */}
                 {/* Always render search icon for loading state regardless of settings */}
                 {(state && (state === 'loading') || (Array.isArray(state) && state.indexOf("loading") !== -1))
                     ? <Icon name="search" />
                     : (icon && typeof icon === 'string' && <IconComponent name={icon}/>)
                 }
                 {/* Label in right position */}
                 {label && (labelPosition === 'right' || labelPosition === 'right corner') &&
                 <LabelComponent corner={labelPosition === 'right corner' ? 'right' : null}>
                                 {label}
                 </LabelComponent>}
                 {/* Action in right position */}
                 {actionComponent && actionPosition === 'right' && <ActionComponent/>}
                 {/* Any children goes after all stuff */}
                 {children}
            </div>
        );
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            input: this.props.defaultClasses,

            fluid: this.props.fluid,
            inverted: this.props.inverted,
            transparent: this.props.transparent
        };
        classes[this.props.size] = !!this.props.size;
        // Loading state should add icon
        if (this.props.state && (this.props.state === 'loading' ||
            (Array.isArray(this.props.state) && this.props.state.indexOf('loading') !== -1))) {
            classes['icon'] = true;
        }
        if (typeof this.props.state === 'string') {
            classes[this.props.state] = true;
        } else if (Array.isArray(this.props.state)) {
            for (const key of this.props.state) {
                classes[key] = true;
            }
        }

        // action input
        if (this.props.actionComponent) {
            classes[this.props.actionPosition] = true;
            classes['action'] = true;
        }
        // Icon input
        if (this.props.icon) {
            classes[this.props.iconPosition] = true;
            classes['icon'] = true;
        }
        // Labeled input
        if (this.props.label) {
            classes[this.props.labelPosition] = true;
            classes['labeled'] = true;
        }
        return classes;
    }
}
