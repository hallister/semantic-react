import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Item, Segment, Icon, Description, Divider } from '../../../components/elements';
import { Menu } from '../../../components/views';
import { Dropdown, Select, Option } from '../../../components/modules';
import { DocBlock } from '../../docblock';

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

    onClickMenuItem() {
        this.setState({
            active: false,
            subActive: false
        });
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

    onClickSub(e) {
        e.stopPropagation();
        this.setState({
            subActive: !this.state.subActive
        });
    }
}
`);

let JSXExample = he.encode(`
<Dropdown onClick={this.onClick.bind(this)}>
    <div className="text">File</div>
    <Icon name="dropdown" />
    <Menu active={this.state.active}>
        <Item>
            New...
        </Item>
        ...
        <Divider />
        <Item>
            Download as...
        </Item>
        <Item onClick={this.onClickSub.bind(this)}>
            <Icon name="dropdown" />
            Publish To Web
            <Menu active={this.state.subActive}>
                <Item onClick={this.onClickMenuItem.bind(this)}>Google Docs</Item>
                <Item onClick={this.onClickMenuItem.bind(this)}>Google Drive</Item>
                <Item onClick={this.onClickMenuItem.bind(this)}>Dropbox</Item>
                <Item onClick={this.onClickMenuItem.bind(this)}>Adobe Creative Cloud</Item>
                <Item onClick={this.onClickMenuItem.bind(this)}>Private FTP</Item>
                <Item onClick={this.onClickMenuItem.bind(this)}>Another Service...</Item>
            </Menu>
        </Item>
        <Item>
            E-mail Collaborators
        </Item>
    </Menu>
</Dropdown>
`);

export class Selection2Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            subActive: false,
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
            active: false,
            subActive: false
        });
    }

    onClick(e) {
        e.stopPropagation();
        this.setState({
            active: !this.state.active,
            subActive: this.state.active && this.state.subActive ? true : false
        });
    }

    onSubClick(e) {
        e.stopPropagation();
        this.setState({
            subActive: !this.state.subActive
        });
    }

    render() {
        let classes = {
            text: true,
            default: !!!this.state.name
        }

        return (
            <DocBlock componentID="dropdown-dropdown-example"
                      header="Dropdown"
                      subheader="A dropdown"
                      JS={JSExample}
                      JSX={JSXExample}>

                <Select name="Gender" placeholder="Gender...">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                </Select>

            </DocBlock>
        );
    }
}