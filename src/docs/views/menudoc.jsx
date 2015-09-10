import React, { Component } from 'react';
import { Menu } from '../../components/views';
import { Segment, Item, Input, Icon, Content, Label, Header } from '../../components/elements';

export class MenuDoc extends Component {
     constructor(props) {
        super(props);

        this.courses = {
            'Business': {
                key: 'business',
                items: [
                    'Design & Uran Ecologies',
                    'Fashion Design',
                    'Fine Art',
                    'Strategic Design'
                ]
            },
            'Liberal Arts': {
                key: 'libarts',
                items: [
                    'Anthropology',
                    'Economics',
                    'Media Studies',
                    'Philosophy'
                ]
            },
            'Social Sciences': {
                key: 'ss',
                items: [
                    'Food Studies',
                    'Journalism',
                    'Non Profit Management'
                ]
            }
        };

        this.state = {
            active: 1
        };
    }

    onClick(index, e, key) {
        this.setState({
            active: index
        })
    }

    render() {
    	return (
    		<div>
    			<Segment>
                    <Menu even>
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>Home</Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>Messages</Item>
                        <Item onClick={this.onClick.bind(this, 3)} active={this.state.active === 3}>Friends</Item>
                    </Menu>
    			</Segment>
                <Segment>
                    <Menu text>
                        <Item>
                            Browse Courses
                        </Item>

                        {Object.keys(this.courses).map(function(key) {
                           
                        })}
                    </Menu>
                </Segment>
                <Segment>
                    <Menu secondary>
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>Home</Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>Messages</Item>
                        <Item onClick={this.onClick.bind(this, 3)} active={this.state.active === 3}>Friends</Item>
                        <Menu right>
                            <Item>
                                <Input type="text">
                                    <Icon name="search"  onClick={function() {}}/>
                                </Input>
                            </Item>
                            <Item onClick={function() {}}>
                                Logout
                            </Item>
                        </Menu>
                    </Menu>
                </Segment>
                <Segment>
                    <Menu pointing>
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>Home</Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>Messages</Item>
                        <Item onClick={this.onClick.bind(this, 3)} active={this.state.active === 3}>Friends</Item>
                        <Menu right>
                            <Item>
                                <Input type="text" transparent>
                                    <Icon name="search"  onClick={function() {}} />
                                </Input>
                            </Item>
                            <Item onClick={function() {}}>
                                Logout
                            </Item>
                        </Menu>
                    </Menu>
                </Segment>
                <Segment>
                    <Menu pointing secondary>
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>Home</Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>Messages</Item>
                        <Item onClick={this.onClick.bind(this, 3)} active={this.state.active === 3}>Friends</Item>
                        <Menu right>
                            <Item onClick={function() {}}>
                                Logout
                            </Item>
                        </Menu>
                    </Menu>
                </Segment>
                <Segment>
                    <Menu tabular>
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>Bio</Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>Photos</Item>
                    </Menu>
                </Segment>
                <Segment>
                    <Menu tabular attached="top">
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>Bio</Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>Photos</Item>
                        <Menu right>
                            <Item>
                                <Input type="text" transparent>
                                    <Icon name="search"  onClick={function() {}} />
                                </Input>
                            </Item>
                        </Menu>
                    </Menu>
                    <Segment attached="bottom">
                        test
                    </Segment>
                </Segment>
                <Segment>
                    <Segment attached="top">
                        <p>test</p>
                    </Segment>
                    <Menu tabular attached="bottom">
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>Active Project</Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>Project #2</Item>
                        <Item onClick={this.onClick.bind(this, 3)} active={this.state.active === 3}>Project #3</Item>
                        <Menu right>
                            <Item onClick={function() {}}>
                                <Icon name="add" /> 
                                <Content>New Tab</Content>
                            </Item>
                        </Menu>
                    </Menu>
                </Segment>
                <Segment>
                    <Menu vertical>
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1} color="teal">
                            Inbox
                            <Label color="teal" pointing="left">1</Label>
                        </Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>
                            Spam
                            <Label>51</Label>
                        </Item>
                        <Item onClick={this.onClick.bind(this, 3)} active={this.state.active === 3}>
                            Updates
                            <Label>1</Label>
                        </Item>
                        <Item>
                            <Input type="text" transparent> 
                                <Icon name="search" link />
                            </Input>
                        </Item>
                    </Menu>
                </Segment>
                <Segment>
                    <Menu text vertical>
                        <Header>Sort By</Header>
                        <Item onClick={this.onClick.bind(this, 1)} active={this.state.active === 1}>
                            Closest
                        </Item>
                        <Item onClick={this.onClick.bind(this, 2)} active={this.state.active === 2}>
                            Most Comments
                        </Item>
                        <Item onClick={this.onClick.bind(this, 3)} active={this.state.active === 3}>
                            Most Popular
                        </Item>
                    </Menu>
                </Segment>
    		</div>
    	);
    }
}