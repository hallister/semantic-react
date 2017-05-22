import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import Icon from './../icon/icon';
import Label from './../label/label';
import Button from './button';
import { validateClassProps } from '../../utilities';

const validProps = {
    labeled: ['left', 'right']
};


/**
 * Labeled button renders button with label, either text label or icon
 */
export default class LabeledButton extends React.PureComponent {
    static propTypes = {
        ...Button.propTypes,
        /**
         * Label position, default to right
         */
        labeled: PropTypes.oneOf(['left', 'right']),
        /**
         * Type of label, could be text label or icon
         */
        labelType: PropTypes.oneOf(['text', 'icon']),
        /**
         * Label, if given string will be used as label text or icon name (if labelType is icon).
         */
        label: PropTypes.string.isRequired,
        /**
         * Label component. Default will be Icon for labelType icon and Label for labelType label
         */
        labelComponent: elementType
    };

    static defaultProps = {
        labeled: 'right',
        labelType: 'text'
    };

    /* eslint-disable */
    static Components = {
        Icon: Icon,
        Label: Label,
        Button: Button
    };
    /* eslint-enable */

    render() {
        const { children, labeled, labelType, label, labelComponent, ...other } = this.props;
        let LabelComponent = (labelComponent) ? labelComponent : this.getDefaultLabelComponent(labelType);


        if (labelType === 'icon') {
            // Easy markup, it's the standard button with labeled icon prefix, the icon order doesn't matter
            other.className = classNames(other.className, this.getClasses());
            return (
                <LabeledButton.Components.Button {...other}>
                    <LabelComponent name={label}/>
                    {children}
                </LabeledButton.Components.Button>
            )
        } else {
            // Text labeled button, this is slightly harder, label order does matter, also need to be prefixed with <div>
            const className = classNames(this.getClasses());
            let markup = [];
            /* eslint-disable react/jsx-max-props-per-line */
            // Should be label basic by default?
            if (labeled === 'left') {
                markup.push(<LabelComponent basic key="label">{label}</LabelComponent>);
                markup.push(
                    <LabeledButton.Components.Button key="button" {...other}>
                        {children}
                    </LabeledButton.Components.Button>
                )
            } else {
                markup.push(
                    <LabeledButton.Components.Button key="button" {...other}>
                        {children}
                    </LabeledButton.Components.Button>
                );
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
    }

    /**
     * Returns default component for label
     * @param {string} type
     */
    getDefaultLabelComponent(type) {
        return (type === 'icon') ? LabeledButton.Components.Icon : LabeledButton.Components.Label; // eslint-disable-line
    }

    /**
     * Returns class name
     */
    getClasses() {
        let classes = {
            ui: this.props.labelType !== 'icon', // no need to add ui since <Button> will add it
            icon: this.props.labelType === 'icon',
            button: this.props.labelType !== 'icon'
        };
        return validateClassProps(classes, this.props, validProps);
    }
}

