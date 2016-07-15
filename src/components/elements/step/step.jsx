import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import elementType from 'react-prop-types/lib/elementType';
import DefaultProps from '../../defaultProps';
import Icon from '../../elements/icon/icon';

const validProps = {
};

export default class Step extends React.Component {
  static propTypes = {
      ...DefaultProps.propTypes,
      /**
       * A step can contain a title
       */
      title: React.PropTypes.string,
      /**
       * A step can contain a description
       */
      description: React.PropTypes.string,
      /**
       * A step can contain an icon
       */
      icon: React.PropTypes.string,
      /**
       * Icon component
       */
      iconComponent: elementType,
      /**
       * A step can link
       */
      link: React.PropTypes.string,
      /**
       * A step can be highlighted as active
       */
      active: React.PropTypes.bool,
      /**
       * A step can show that a user has completed it
       */
      completed: React.PropTypes.bool,
      /**
       * A step can show that it cannot be selected
       */
      disabled: React.PropTypes.bool
  };

  static defaultProps = {
      ...DefaultProps.defaultProps
  };

  /* eslint-disable */
  static Components = {
      Icon: Icon
  };
  /* eslint-enable */

  shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
  }

  render() {
      /* eslint-disable no-use-before-define */
      let { active, children, component, defaultClasses, description, disabled,
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
          ui: this.props.defaultClasses,
          step: this.props.defaultClasses,

          active: this.props.active,
          completed: this.props.completed,
          disabled: this.props.disabled,
      };

      classes[this.props.size] = !!this.props.size;
      return validateClassProps(classes, this.props, validProps);
  }
}
