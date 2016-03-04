import React from 'react';
import { Numbers, validateClassProps } from '../../utilities';
import { defaultPropTypes, defaultPropValues } from '../../defaultProps';
import classNames from 'classnames';
import Radium from 'radium';

const validProps = {
    aligned: ['right', 'left', 'center'],
    celled: ['internally'],
    divided: ['vertically', 'internally'],
    padded: ['horizontally', 'vertically'],
    relaxed: ['very'],
    reversed: ['mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'],
    valigned: ['top', 'middle', 'bottom']
};

function getClassNames(props) {
    let classes = {
        // Default
        ui: props.defaultClasses,
        grid: props.defaultClasses,
        
        // variations
        container: props.container,
        relaxed: props.relaxed,
        centered: props.centered,
        stackable: props.stackable,
        doubling: props.doubling
    };

    if (props.columns && props.columns > 0 && props.columns <= 16) {
        classes[`${Numbers[props.columns]} column`] = true;
    }
    
    if (props.equal) {
        classes['equal width'] = true;
    }
    
    return validateClassProps(classes, props, validProps, { valigned: 'aligned' });
}

let Grid = (props) => {
    // consume props
    /* eslint-disable no-use-before-define */
    let {
        aligned, defaultClasses, centered, celled, columns, container, component, children,
        divided, doubling, equal, padded, relaxed, reversed, stackable, valigned,
        ...other
    } = props;
    /* eslint-enable no-use-before-define */
    const Component = component;
    other.className = classNames(other.className, getClassNames(props));
    return (
        <Component 
            {...other} 
        >
            {children}
        </Component>
    );
};

Grid.propTypes = {
    ...defaultPropTypes,
    aligned: React.PropTypes.oneOf(['right', 'left', 'center']),
    centered: React.PropTypes.bool,
    celled: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['internally']),
        React.PropTypes.bool
    ]),
    columns: React.PropTypes.number,
    container: React.PropTypes.bool,
    divided: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['vertically', 'internally']),
        React.PropTypes.bool
    ]),
    doubling: React.PropTypes.bool,
    equal: React.PropTypes.bool,
    padded: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['horizontally', 'vertically']),
        React.PropTypes.bool
    ]),
    relaxed: React.PropTypes.oneOfType([
        React.PropTypes.oneOf(['very']),
        React.PropTypes.bool
    ]),
    reversed: React.PropTypes.oneOfType([
        'mobile', 'mobile vertically', 'tablet', 'tablet vertically', 'computer', 'computer vertically'
    ]),
    stackable: React.PropTypes.bool,
    valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
};

Grid.defaultProps = {
    ...defaultPropValues
};

Grid = Radium(Grid);
export { Grid };

/*export class Grid extends React.Component {
    static propTypes = {
        ...defaultPropTypes,
        aligned: React.PropTypes.oneOf(['right', 'left', 'justified', 'center']),
        valigned: React.PropTypes.oneOf(['top', 'middle', 'bottom'])
    };

    static defaultProps = {
        ...defaultPropValues
    };

    constructor(props) {
        super(props);

        this.style = {
            mobile: {},
            computer: {},
            tablet: {}
        }
    }

    componentDidMount() {
        this.forceUpdate();
    }

    onFoundDevice(style, type) {
        this.style[type] = style;
    }

    renderChildren() {
        let children = [Device, Computer, Tablet, Mobile];
        return React.Children.map(this.props.children, (child, index) => {
            if (children.indexOf(child.type) > -1) {
                return React.cloneElement(
                    child,
                    {
                        callback: this.onFoundDevice.bind(this),
                        key: index
                    },
                    child.children
                )
            } else {
                return child;
            }
        });
    }

    render() {
        // consume props
        /!* eslint-disable no-use-before-define *!/
        let { aligned, celled, centered, children, columns, component,
              container, className, defaultClasses, divided, doubling, equal,
              padded, relaxed, stackable, valigned, ...other } = this.props;
        /!* eslint-enable no-use-before-define *!/

        // add classnames
        other.className = classNames(this.props.className, this.getClasses());

        return React.createElement(
            this.props.component,
            other,
            this.renderChildren()
        );
    }

    getClasses() {
        let columns = Numbers.reduce((obj, num) => {
            obj[num + ' column'] = false;
            return obj;
        }, {});

        let classes = {
            ui: this.props.defaultClasses,
            ...this.style.computer,
            ...this.style.tablet,
            ...this.style.mobile,
            ...columns,

            aligned: this.props.aligned && this.props.aligned !== 'justified',
            container: this.props.container,
            centered: this.props.centered,
            celled: this.props.celled,
            doubling: this.props.doubling,
            divided: this.props.divided,
            padded: this.props.padded,
            relaxed: this.props.relaxed,
            stackable: this.props.stackable,

            grid: this.props.defaultClasses
        }

        if (this.props.equal) {
            classes['equal width'] = true;
        }

        if (this.props.columns !== false) {
            if (this.props.columns > 0  && this.props.columns <= 16) {
                classes[Numbers[this.props.columns] + ' column'] = true;
            }
        }

        return validateClassProps(classes, this.props, validProps, { valigned: 'aligned' });
    }
}*/
