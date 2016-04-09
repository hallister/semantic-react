import React from 'react';
import { Button, Icon, Label } from '../../elements';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import DefaultProps from '../../defaultProps';

function getClasses(props) {
    let classes = {
        ui: props.defaultClasses,
        input: props.defaultClasses,
        
        fluid: props.fluid,
        inverted: props.inverted,
        transparent: props.transparent
    };
    classes[props.size] = !!props.size;
    // Loading state should add icon
    if (props.state && props.state === 'loading') {
        classes['icon'] = true;
    }
    classes[props.state] = !!props.state;
    
    // action input
    if (props.actionComponent) {
        classes[props.actionPosition] = true;
        classes['action'] = true;
    }
    // Icon input
    if (props.icon) {
        classes[props.iconPosition] = true;
        classes['icon'] = true;
    }
    // Labeled input
    if (props.label) {
        classes[props.labelPosition] = true;
        classes['labeled'] = true;
    }
    return classes;
}

/**
 * Controlled basic input
 */
let Input = (props) => {
    const {
        component, children, className, defaultClasses, style, actionComponent, actionPosition, fluid, icon, iconPosition, iconComponent,
        inverted, label, labelComponent, labelPosition, placeholder, size, state, transparent, value, ...other
    } = props;
    
    const wrapperClassName = classNames(className, getClasses(props));
    const InputComponent = component;
    const IconComponent = iconComponent || Icon;
    const LabelComponent = labelComponent || Label;
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
            <InputComponent type="text" {...other} value={value} placeholder={placeholder}/>
            {/* Icon, markup doesn't matter for placement */}
            {/* Always render search icon for loading state regardless of settings */}
            {(state && state === 'loading') ? <Icon name="search" /> :
                (icon && <IconComponent name={icon}/>)
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
    )
};

Input.propTypes = {
    ...DefaultProps.propTypes,
    /**
     * Action component
     */
    actionComponent: elementType,
    /**
     * Action position
     */
    actionPosition: React.PropTypes.oneOf(['left', 'right']),
    /**
     * An input can take the size of its container
     */
    fluid: React.PropTypes.bool,
    /**
     * Render icon
     */
    icon: React.PropTypes.string,
    /**
     * Icon position
     */
    iconPosition: React.PropTypes.oneOf(['left', 'right']),
    /**
     * Pass custom icon component
     */
    iconComponent: elementType,
    /**
     * Inverted input
     */
    inverted: React.PropTypes.bool,
    /**
     * Render label for input
     */
    label: React.PropTypes.string,
    /**
     * Pass custom label component
     */
    labelComponent: elementType,
    /**
     * Label position
     */
    labelPosition: React.PropTypes.oneOf(['left', 'right', 'left corner', 'right corner']),
    /**
     * Input placeholder
     */
    placeholder: React.PropTypes.string,
    /**
     * Input size
     */
    size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']),
    /**
     * Input state
     */
    state: React.PropTypes.oneOf(['focus', 'loading', 'disabled', 'error']),
    /**
     * Render transparent input
     */
    transparent: React.PropTypes.bool,
    /**
     * Input value
     */
    value: React.PropTypes.string
};

Input.defaultProps = {
    ...DefaultProps.defaultProps,
    component: 'input',
    iconPosition: 'right',
    labelPosition: 'left',
    actionPosition: 'right'
};

export default Input;
