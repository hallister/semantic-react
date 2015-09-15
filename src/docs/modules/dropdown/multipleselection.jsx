import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Item, Segment, Icon, Description, Divider, Label } from '../../../components/elements';
import { Menu } from '../../../components/views';
import { Dropdown } from '../../../components/modules';
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

export class MultipleSelectionDoc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            search: null,
            selection: []
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
        console.log('Fired onDocumentClick');

        this.setState({
            active: false
        });
    }

    onClick(e) {
        e.stopPropagation();
        console.log('Fired onClick');

        this.setState({
            active: true,
            search: null
        });
    }

    onChange(e) {
        console.log('Fired onChange');
        this.setState({
            search: e.target.value
        });
    }

    preventDefaultClick(e) {
        e.stopPropagation();
    }

    onMenuItemClick(name, e) {
        e.stopPropagation();

        let index = this.state.selection.indexOf(name);
        let clone = this.state.selection.slice(0);

        if (this.isSelected(name)) {
            clone.splice(index, 1);

            this.setState({
                selection: clone,
                active: false
            });
        } else {
            clone.push(name);

            this.setState({
                selection: clone,
                active: false
            })
        }
    }

    isSelected(name) {
        return this.state.selection.indexOf(name) > -1;
    }

    render() {
        let classes = {
            text: true,
            default: !!!this.state.name
        }
        let items = [
            {
				name: 'Angular'
			}, {
				name: 'CSS'
			}, {
				name: 'Graphic Design'
			}, {
				name: 'Ember'
			}, {
				name: 'HTML'
			}, {
				name: 'Information Architecture'
			}, {
				name: 'Javascript'
			}, {
				name: 'Mechanical Engineering'
			}, {
				name: 'Meteor'
			}, {
				name: 'NodeJS'
			}, {
				name: 'Plumbing'
			}, {
				name: 'Python'
			}, {
				name: 'Rails'
			}, {
				name: 'React'
			}, {
				name: 'Kitchen Repair'
			}, {
				name: 'Ruby'
			}, {
				name: 'UI Design'
			}, {
				name: 'User Experience'
            }
        ];

        let menuItems = items.map(function(item) {
            let regex = false;

            if (this.state.search) {
                regex = new RegExp(this.state.search.toLowerCase(), 'g');

                if (!regex.test(item.name.toLowerCase())) {
                    return false;
                }
            }

            if (!this.isSelected(item.name)) {
                return (
                    <Item key={item.name}
                          name={item.name}
                          onClick={this.onMenuItemClick.bind(this, item.name)}>
                        {item.name}
                    </Item>
                );            
            } else {
                return false;
            }

        }.bind(this));

        let selectedMenuItems = items.map(function(item) {
            if (this.isSelected(item.name)) {
                return (
                    <Label key={item.name} onClick={this.preventDefaultClick.bind(this)}>
                        {item.name}
                        <Icon name="delete" onClick={this.onMenuItemClick.bind(this, item.name)} />
                    </Label>
                );
            }
        }.bind(this));

        return (
            <DocBlock componentID={this.props.id}
                      header={this.props.header}
                      subheader={this.props.subheader}
                      JS={JSExample}
                      JSX={JSXExample}>

                <Dropdown active={this.state.active}
                          onClick={this.onClick.bind(this)}
                          onChange={this.onChange.bind(this)}
                          inputName="gender"
                          multiple
                          search
                          >
                    <Icon name="dropdown" />
                    {selectedMenuItems}
                    <Menu active={this.state.active}>
                        {menuItems}
                    </Menu>
                </Dropdown>

            </DocBlock>
        );
    }
}