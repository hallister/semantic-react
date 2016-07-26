import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

const validProps = {
    attached: ['bottom', 'top']
};

export default class Steps extends React.Component {
  static propTypes = {
      ...DefaultProps.propTypes,
      /**
       * Steps can be shown as an ordered sequence
       */
      ordered: React.PropTypes.bool,
      /**
       * Steps can be displayed stacked vertically
       */
      vertical: React.PropTypes.bool,
      /**
       * Steps can stack vertically on smaller screens
       */
      stackable: React.PropTypes.bool,
      /**
       * Steps can take up the width of their container
       */
      fluid: React.PropTypes.bool,
      /**
       * Steps can be attached to other elements
       */
      attached: React.PropTypes.oneOfType([
          React.PropTypes.oneOf(['bottom', 'top']),
          React.PropTypes.bool
      ]),
      /**
       * Steps can be divided evenly inside their parent
       */
      evenlyDivided: React.PropTypes.bool,
      /**
       * Steps can have different sizes
       */
      size: React.PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']),
  };

  static defaultProps = {
      ...DefaultProps.defaultProps
  };

  shouldComponentUpdate(nextProps, nextState) {
      return shallowCompare(this, nextProps, nextState);
  }

  render() {
      /* eslint-disable no-use-before-define */
      let { attached, children, className, component, defaultClasses, evenlyDivided, fluid,
          size, stackable, vertical, ...other } = this.props;
      /* eslint-enable no-use-before-define */

      other.className = classNames(className, this.getClasses());

      return React.createElement(
          component,
          other,
          children
      );
  }

  getClasses() {
      let classes = {
          ui: this.props.defaultClasses,

          one: this.props.evenlyDivided && this.props.children.length == 1,
          two: this.props.evenlyDivided && this.props.children.length == 2,
          three: this.props.evenlyDivided && this.props.children.length == 3,
          four: this.props.evenlyDivided && this.props.children.length == 4,
          five: this.props.evenlyDivided && this.props.children.length == 5,
          six: this.props.evenlyDivided && this.props.children.length == 6,
          seven: this.props.evenlyDivided && this.props.children.length == 7,
          eight: this.props.evenlyDivided && this.props.children.length == 8,
          
          steps: this.props.defaultClasses,

          ordered: this.props.ordered,
          vertical: this.props.vertical,
          stackable: this.props.stackable,
          fluid: this.props.fluid,
          attached: this.props.attached,
          size: this.props.size
      };

      classes[this.props.size] = !!this.props.size;
      return validateClassProps(classes, this.props, validProps);
  }

}
