import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from './iconbutton';
import Button from './button';
import Icon from './../icon/icon';


/**
 * Social button is simple social colored button with social icon. This is ordinary button, 
 */
export default class SocialButton extends React.PureComponent {
    static propTypes = {
        ...Button.propTypes,
        /**
         * Adds a SemanticUI name class to the icon.
         */
        name: PropTypes.string.isRequired
    };

    /* eslint-disable */
    static Components = {
        IconButton: IconButton,
        Button: Button,
        Icon: Icon
    };
    /* eslint-enable */

    render() {
        const { children, name, ...other } = this.props;
        const hasChildren = React.Children.count(children) > 0;
        other.className = classNames(other.className, name);
        // Render button if has any children (i.e. caption), otherwise render icon button
        if (hasChildren) {
            return (
                <SocialButton.Components.Button {...other}>
                    <SocialButton.Components.Icon name={name}/>
                    {children}
                </SocialButton.Components.Button>
            )
        } else {
            return (
                <SocialButton.Components.IconButton {...other} name={name} />
            )
        }
    }
}
