import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Item, Segment, Icon } from '../../../components/elements';
import { Menu } from '../../../components/views';
import { Dropdown } from '../../../components/modules';
import { DocBlock } from '../../docblock';

import { States } from '../../utilities';
import classNames from 'classnames';
import he from 'he';

let JSExample = he.encode(`
export class StateSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            selection: 'Washington'
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
          onClick={this.onClick.bind(this)}
          inputName="gender"
          inputValue={this.state.selection}
          search
          onChange={this.onChange.bind(this)}>
    <Icon name="dropdown" />
    <Menu active={this.state.active}>
        <Item onClick={this.onClickItem.bind(this, 'Alabama')}
              selected={this.state.selection == 'Alabama'}>
            'Alabama'
        </Item>
        ...
        <Item onClick={this.onClickItem.bind(this, 'Wyoming')}
              selected={this.state.selection == 'Wyoming'}>
            'Wyoming'
        </Item>
    </Menu>
</Dropdown>
`);


export class SearchExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            code: false,
            codeText: 'Show',
            selection: 'Washington'
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
        this.setState({
            active: !this.state.active,
        });
    }

    onChange(e) {
        this.setState({
            selection: e.target.value
        })
    }

    onMenuItemClick(name, e) {
        e.stopPropagation();
        this.setState({
            selection: name,
            active: false
        });
    }

    render() {
        let states = [];

        let classes = {
            text: true,
            default: !!!this.state.name
        }

        for (let abb of Object.keys(States)) {
            states.push(
                <Item onClick={this.onMenuItemClick.bind(this, States[abb])}
                      key={abb}
                      selected={this.state.selection === States[abb]}>
                    {States[abb]}
                </Item>
            );
        }

        return (
            <DocBlock componentID="dropdown-search-selection-example"
                      header="Search Selection"
                      subheader="A selection dropdown can allow a user to search through a large list of choices."
                      JS={JSExample}
                      JSX={JSXExample}>

                <Dropdown active={this.state.active} 
                          onClick={this.onClick.bind(this)}
                          inputName="gender"
                          inputValue={this.state.selection}
                          search
                          onChange={this.onChange.bind(this)}>
                    <Icon name="dropdown"/>
                    <Menu active={this.state.active}>
                        {states}
                    </Menu>
                </Dropdown>
            </DocBlock>
        );
    }
}