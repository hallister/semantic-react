import React from 'react';
import { Icon, Label, Button } from '../../elements';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';

const validProps = {
    labeled: ['left', 'right']
};

/**
 * Returns default component for label
 * @param {string} type
 */
function getDefaultLabelComponent(type) {
    return (type === 'icon') ? Icon : Label;
}

/**
 * Returns class name
 * @param props
 */
function getClasses(props) {
    let classes = {
        ui: props.labelType !== 'icon', // no need to add ui since <Button> will add it
        icon: props.labelType === 'icon',
        button: props.labelType !== 'icon'
    };
    return validateClassProps(classes, props, validProps);
}

/**
 * Labeled button renders button with label, either text label or icon
 */
let LabeledButton = (props) => {
    const { children, labeled, labelType, label, labelComponent, ...other } = props;
    let LabelComponent = (labelComponent) ? labelComponent : getDefaultLabelComponent(labelType);


    if (labelType === 'icon') {
        // Easy markup, it's the standard button with labeled icon prefix, the icon order doesn't matter
        other.className = classNames(other.className, getClasses(props));
        return (
            <Button {...other}>
                <LabelComponent name={label}/>
                {children}
            </Button>
        )
    } else {
        // Text labeled button, this is slightly harder, label order does matter, also need to be prefixed with <div>
        const className = classNames(getClasses(props));
        let markup = [];
        /* eslint-disable react/jsx-max-props-per-line */
        // Should be label basic by default?
        if (labeled === 'left') {
            markup.push(<LabelComponent basic key="label">{label}</LabelComponent>);
            markup.push(<Button key="button" {...other}>{children}</Button>)
        } else {
            markup.push(<Button key="button" {...other}>{children}</Button>);
            markup.push(<LabelComponent basic key="label">{label}</LabelComponent>);
        }
        /* eslint-enable react/jsx-max-props-per-line */
        // TODO: Should allow to customize this div??
        return (
            <div className={className}>
                {markup}
            </div>
        )
    }

};

LabeledButton.propTypes = {
    ...Button.propTypes,
    /**
     * Label position, default to right
     */
    labeled: React.PropTypes.oneOf(['left', 'right']),
    /**
     * Type of label, could be text label or icon
     */
    labelType: React.PropTypes.oneOf(['text', 'icon']),
    /**
     * Label, if given string will be used as label text or icon name (if labelType is icon).
     */
    label: React.PropTypes.string.isRequired,
    /**
     * Label component. Default will be Icon for labelType icon and Label for labelType label
     */
    labelComponent: elementType
};

LabeledButton.defaultProps = {
    labeled: 'right',
    labelType: 'text'
};


export default LabeledButton;

