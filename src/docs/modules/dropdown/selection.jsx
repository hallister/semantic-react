import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Item, Segment, Icon } from '../../../components/elements';
import { Menu } from '../../../components/views';
import { Dropdown } from '../../../components/modules';
import { DocBlock } from '../../docblock';

import classNames from 'classnames';
import he from 'he';

let JSExample = he.encode(`
export class GenderSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            selection: null
        }
    }

    onClick(e) {
        this.setState({
            active: !this.state.active,
        });
    }

    onClickItem(name, e) {
        e.stopPropagation();

        this.setState({
            selection: name,
            active: false
        });
    }
}
`);

let JSXExample = he.encode(`
<Dropdown active={this.state.active} 
          onChange={this.onChange.bind(this)}
          onClick={this.onClick.bind(this)}
          inputName="gender"
          inputValue={this.state.selection}
          search>
    <Icon name="dropdown" />
    <Menu active={this.state.active}>
        <Item onClick={this.onClickItem.bind(this, 'Male')}
              selected={this.state.selection === 'Male'}>
            Male
        </Item>
        <Item onClick={this.onMenuItemClick.bind(this, 'Female')}
              selected={this.state.selection === 'Female'}>
            Female
        </Item>
    </Menu>
</Dropdown>
`);

export class SelectionExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            selection: null
        }
    }

    componentDidMount() {
        let node = ReactDOM.findDOMNode(this);

        document.addEventListener("click", function(e) {
            let target = e.target;
            let found = false;

            while(target.parentNode) {
                found = (target === node);
                target = target.parentNode;

                if (found) return;
            }

            this.onDocumentClick();
        }.bind(this));
    }

    onDocumentClick() {
        this.setState({
            active: false
        });
    }

    onClick(e) {
        e.stopPropagation();
        this.setState({
            active: !this.state.active
        });
    }

    onMenuItemClick(name, e) {
        e.stopPropagation();
        this.setState({
            selection: name,
            active: false
        });
    }

    render() {
        let classes = {
            text: true,
            default: !!!this.state.name
        }

        return (
            <DocBlock componentID="dropdown-selection-example"
                      header="Selection"
                      subheader="A dropdown can be used to select between choices in a form"
                      JS={JSExample}
                      JSX={JSXExample}>

                <Dropdown active={this.state.active}
                          default="Gender"
                          onClick={this.onClick.bind(this)}
                          inputName="gender"
                          inputValue={this.state.selection}>
                    <Icon name="dropdown" />
                    <Menu active={this.state.active}>
                        <Item onClick={this.onMenuItemClick.bind(this, 'Male')}
                              selected={this.state.selection === 'Male'}>
                            Male
                        </Item>
                        <Item onClick={this.onMenuItemClick.bind(this, 'Female')}
                              selected={this.state.selection === 'Female'}>
                            Female
                        </Item>
                    </Menu>
                </Dropdown>
            </DocBlock>
        );
    }
}