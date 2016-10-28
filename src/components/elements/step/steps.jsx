import React from 'react';
import { Sizes, Numbers, validateClassProps } from '../../utilities';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

const validProps = {
    attached: ['bottom', 'top']
};

export default class Steps extends React.PureComponent {
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
      equalWidths: React.PropTypes.bool,
      /**
       * Steps can have different sizes
       */
      size: React.PropTypes.oneOf(Sizes),
  };

  static defaultProps = {
      ...DefaultProps.defaultProps
  };

  render() {
      /* eslint-disable no-use-before-define */
      let { attached, children, className, component, defaultClasses, equalWidths, fluid,
          ordered, size, stackable, vertical, ...other } = this.props;
      /* eslint-enable no-use-before-define */

      other.className = classNames(className, this.getClasses());

      return React.createElement(
          component,
          other,
          children
      );
  }

    getClasses() {
        let childCount = React.Children.count(this.props.children);
        let classes = {
          ui: this.props.defaultClasses,

          steps: this.props.defaultClasses,

          ordered: this.props.ordered,
          vertical: this.props.vertical,
          stackable: this.props.stackable,
          fluid: this.props.fluid,
          attached: this.props.attached,
        };

        if (this.props.equalWidths && childCount > 0  && childCount <= 8) {
          classes[Numbers[childCount]] = true;
        }

        classes[this.props.size] = !!this.props.size;

        return validateClassProps(classes, this.props, validProps);
    }
}
