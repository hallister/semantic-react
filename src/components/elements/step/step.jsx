import React from 'react';
import PropTypes from 'prop-types';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import DefaultProps from '../../defaultProps';
import Icon from '../../elements/icon/icon';

const validProps = {
};

export default class Step extends React.PureComponent {
  static propTypes = {
      ...DefaultProps.propTypes,
      /**
       * A step can contain a title
       */
      title: PropTypes.string,
      /**
       * A step can contain a description
       */
      description: PropTypes.string,
      /**
       * A step can contain an icon
       */
      icon: PropTypes.string,
      /**
       * Icon component
       */
      iconComponent: elementType,
      /**
       * A step can link
       */
      link: PropTypes.string,
      /**
       * A step can be highlighted as active
       */
      active: PropTypes.bool,
      /**
       * A step can show that a user has completed it
       */
      completed: PropTypes.bool,
      /**
       * A step can show that it cannot be selected
       */
      disabled: PropTypes.bool
  };

  static defaultProps = {
      ...DefaultProps.defaultProps
  };

  /* eslint-disable */
  static Components = {
      Icon: Icon
  };
  /* eslint-enable */

  render() {
      /* eslint-disable no-use-before-define */
      let { active, children, component, completed, defaultClasses, description, disabled,
        icon, iconComponent, link, title, ...other } = this.props;
      /* eslint-enable no-use-before-define */

      let Component = component;
      if (Component === 'div' && this.props.link) {
          Component = 'a';
          other.href = this.props.link;
      }

      const IconComponent = iconComponent || Step.Components.Icon;
      other.className = classNames(other.className, this.getClasses());

      return (
          <Component {...other}>
              {icon && <IconComponent name={icon}/>}
              <div className="content">
                {title && <div className="title">{title}</div>}
                {description && <div className="description">{description}</div>}
              </div>
              {children}
          </Component>
      );
  }

  getClasses() {
      let classes = {
          step: this.props.defaultClasses,

          active: this.props.active,
          completed: this.props.completed,
          disabled: this.props.disabled
      };

      return validateClassProps(classes, this.props, validProps);
  }
}
