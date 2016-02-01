import React from 'react';
import OutsideClickHandler from '../outside-click-handler';
import classNames from 'classnames';

// Components
import { Icon, Item } from '../../elements';

export default class Dropdown extends React.Component {
    static propTypes = {
        onChange:  React.PropTypes.func,
        list:  React.PropTypes.array,
        value: React.PropTypes.string,
        placeholder:  React.PropTypes.string,

        defaultClass: React.PropTypes.boolean,

        fluid: React.PropTypes.boolean,
        selection: React.PropTypes.boolean
    };

    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.firstOpen = true;
    }

    handleDocumentClick() {
        if (this.state.active) {
            this.toggle();
        }
    }

    handleToggle(e) {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.toggle();
    }

    toggle() {
        this.setState({
            active: !this.state.active
        });
    }

    findElement(value) {
        if (!this.props.list.length) return null;

        for (let i = 0; i < this.props.list.length; i++) {
            if (this.props.list[i].id == value) return this.props.list[i];
        }

        return null;
    }

    render() {
        var className = classNames(this.props.className, this.getClasses());

        return (
            <OutsideClickHandler onOutsideClick={this.handleDocumentClick.bind(this)} >
                <div className={className}
                    onClick={this.handleToggle.bind(this)} >
                        <Icon name="dropdown" />
                        {this.renderText()}

                        {this.renderMenu()}
                </div>
            <OutsideClickHandler />
        );
    }

    getClasses() {
        return {
            ui: this.props.defaultClass,
            dropdown: this.props.defaultClass,
            
            // Type
            selection: this.props.selection,
            fluid: this.props.fluid,

            // State
            active: this.props.active || this.state.active,
            visible: this.props.active || this.state.active,
        };
    }

    renderText() {
        var currentElement = null,
            value = this.props.value;

        if (typeof value == "undefined") {
            return this.renderDefaultText();
        }

        currentElement = this.findElement(value);

        if (!currentElement) {
            return this.renderDefaultText();
        }

        return <div className="text">{currentElement.title}</div>;
    }

    renderDefaultText() {
        return <div className="default text">{this.props.placeholder}</div>;
    }

    renderMenu() {
        if (!this.firstOpen) {
            return this._renderMenu(this.state.active);
        }

        if (this.state.active) {
            this.firstOpen = false;
            return this._renderMenu(this.state.active);
        }

        return null;
    }

    _renderMenu(isOpen) {
        var className = 'menu';

        if (isOpen) {
            className += ' transition visible';
        }

        return (
            <div className={className}>
                {this.props.list.map(this.renderOption)}
            </div>
        );
    }

    renderOption(item) {
        var className="item",
            isActive = item.id == this.props.value;

        return (
            <Item active={isActive} selected={isActive}
                onClick={this.handleClickItem.bind(this, item.id)}>

                {item.title}
            </Item>
        );
    }
};

Dropdown.defaultProps = {
    placeholder: '',
    value: '',
    list: [],

    defaultClass: true,
    selection: false,
    active: false,
    fluid: false
};
