import React, { Component } from 'react';
import { List, Item, Icon, Content, Header, Description, Segment } from '../../components/elements';
// Todo: Aligned example
// Todo: Floating example


export class ListDoc extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Segment>
                    <List>
                        <Item>Apple</Item>
                        <Item>Pears</Item>
                        <Item>Orange</Item>
                    </List>
                </Segment>
                <Segment>
                    <List>
                        <Item>
                            <Icon name="users"/>
                            <Content>Semantic UI</Content>
                        </Item>
                        <Item>
                            <Icon name="marker"/>
                            <Content>New York, NY</Content>
                        </Item>
                        <Item>
                            <Icon name="mail"/>
                            <Content><a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a></Content>
                        </Item>
                        <Item>
                            <Icon name="linkify"/>
                            <Content><a href="http://www.semantic-ui.com">semantic-ui.com</a></Content>
                        </Item>
                    </List>
                </Segment>
                <Segment>
                    <List divided relaxed>
                        <Item>
                            <Icon name="github" aligned="middle" size="large" />
                            <Content>
                                <Header onClick={this.handleOnClick}>Semantic-Org/Semantic-UI</Header>
                                <Description>Updated 10 mins ago</Description>
                            </Content>
                        </Item>
                        <Item>
                            <Icon name="github" aligned="middle" size="large" />
                            <Content>
                                <Header onClick={this.handleOnClick}>Semantic-Org/Semantic-UI-Docs</Header>
                                <Description>Updated 22 mins ago</Description>
                            </Content>
                        </Item>
                        <Item>
                            <Icon name="github" aligned="middle" size="large" />
                            <Content>
                                <Header onClick={this.handleOnClick}>Semantic-Org/Semantic-Meteor</Header>
                                <Description>Updated 34 mins ago</Description>
                            </Content>
                        </Item>
                    </List>
                </Segment>
                <Segment>
                    <List>
                        <Item>
                            <Icon name="folder"/>
                            <Content>
                                <Header>src</Header>
                                <Description>Source files for project</Description>
                                <List>
                                    <Item>
                                        <Icon name="folder"/>
                                        <Content>
                                            <Header>site</Header>
                                            <Description>Your site's theme</Description>
                                        </Content>
                                    </Item>
                                    <Item>
                                        <Icon name="folder"/>
                                        <Content>
                                            <Header>themes</Header>
                                            <Description>Packaged theme files</Description>
                                            <List>
                                                <Item>
                                                    <Icon name="folder"/>
                                                    <Content>
                                                        <Header>default</Header>
                                                        <Description>Default packaged theme</Description>
                                                    </Content>
                                                </Item>
                                                <Item>
                                                    <Icon name="folder"/>
                                                    <Content>
                                                        <Header>my_theme</Header>
                                                        <Description>Packaged themes are also available in this folder</Description>
                                                    </Content>
                                                </Item>
                                            </List>  
                                        </Content>
                                    </Item>
                                    <Item>
                                        <Icon name="folder"/>
                                        <Content>
                                            <Header>theme.config</Header>
                                            <Description>Config file for setting packaged themes</Description>
                                        </Content>
                                    </Item>
                                </List>
                            </Content>
                        </Item>
                        <Item>
                            <Icon name="folder"/>
                            <Content>
                                <Header>dist</Header>
                                <Description>Config file for setting packaged themes</Description>
                                <List>
                                    <Item>
                                        <Icon name="folder"/>
                                        <Content>
                                            <Header>components</Header>
                                            <Description>Individual component css and js</Description>
                                        </Content>
                                    </Item>
                                </List>
                            </Content>
                        </Item>
                        <Item>
                            <Icon name="file"/>
                            <Content>
                                <Header>semantic.json</Header>
                                <Description>Contains build settings for gulp</Description>
                            </Content>
                        </Item>
                    </List>
                </Segment>
                <Segment>
                    <List bulleted>
                        <Item>Gaining Access</Item>
                        <Item>Inviting Friends</Item>
                        <Item>
                            Benefits
                            <List>
                                <Item>Use Anywhere</Item>
                                <Item>Rebates</Item>
                                <Item>Discounts</Item>
                            </List>
                        </Item>
                        <Item>Warranty</Item>
                    </List>
                </Segment>
                <Segment>
                    <List bulleted horizontal>
                        <Item onClick={this.handleOnClick}>About Us</Item>
                        <Item onClick={this.handleOnClick}>Site Map</Item>
                        <Item onClick={this.handleOnClick}>Contact</Item>
                    </List>
                </Segment>
                <Segment>
                    <List ordered>
                        <Item onClick={this.handleOnClick}>Getting Started</Item>
                        <Item onClick={this.handleOnClick}>Introduction</Item>
                        <Item>
                            <a onClick={this.handleOnClick}>Languages</a>
                            <List>
                                <Item onClick={this.handleOnClick}>HTML</Item>
                                <Item onClick={this.handleOnClick}>Javascript</Item>
                                <Item onClick={this.handleOnClick}>CSS</Item>
                            </List>
                        </Item>
                        <Item onClick={this.handleOnClick}>Review</Item>
                    </List>
                </Segment>
                <Segment>
                    <List link>
                        <Item active>Home</Item>
                        <Item onClick={this.handleOnClick}>About</Item>
                        <Item onClick={this.handleOnClick}>Jobs</Item>
                        <Item onClick={this.handleOnClick}>Team</Item>
                    </List>
                </Segment>
                <Segment>
                    <List>
                        <Item>1</Item>
                        <Item>2</Item>
                        <Item>3</Item>
                    </List>               
                </Segment>
                <Segment>
                    <List>
                        <Item onClick={this.handleOnClick}>
                            <Icon name="help"/>
                            <Content>
                                <Header>Floated Icon</Header>
                                <Description>This text will always have a left margin to make sure it sits alongside your icon</Description>
                            </Content>
                        </Item>
                        <Item onClick={this.handleOnClick}>
                            <Icon name="right triangle"/>
                            <Content>
                                <Header>Icon Alignment</Header>
                                <Description>Floated icons are by default top aligned. To have an icon top aligned try this example</Description>
                            </Content>
                        </Item>
                        <Item>
                            <Icon name="help"/>
                            <Content>
                                <Header>Inline Text</Header>
                            </Content>
                        </Item>
                    </List>               
                </Segment>
                <Segment>
                    <List>
                        <Item>
                            <Image avatar src="http://www.semantic-ui.com/images/avatar2/small/rachel.png"/>
                            <Content>
                                <Header>Rachel</Header>
                                <Description>Last seen watching <a><b>Arrested Development</b></a> just now.</Description>
                            </Content>
                        </Item>
                    </List>
                </Segment>
                <Segment>
                    <List>
                        <Item onClick={this.handleOnClick}>What is a FAQ?</Item>
                        <Item onClick={this.handleOnClick}>Who is our user?</Item>
                        <Item onClick={this.handleOnClick}>Where is our office located?</Item>
                    </List>
                </Segment>
                <Segment>
                    <List selection aligned="middle">
                        <Item>
                            <Image avatar src="http://www.semantic-ui.com/images/avatar/small/helen.jpg"/>
                            <Content>
                                <Header>Helen</Header>
                            </Content>
                        </Item>
                        <Item>
                            <Image avatar src="http://www.semantic-ui.com/images/avatar/small/christian.jpg"/>
                            <Content>
                                <Header>Christian</Header>
                            </Content>
                        </Item>
                       <Item>
                            <Image avatar src="http://www.semantic-ui.com/images/avatar/small/daniel.jpg"/>
                            <Content>
                                <Header>Daniel</Header>
                            </Content>
                        </Item>
                    </List>
                </Segment>
                <Segment>
                    <List animated selection aligned="middle">
                        <Item>
                            <Image avatar src="http://www.semantic-ui.com/images/avatar/small/helen.jpg"/>
                            <Content>
                                <Header>Helen</Header>
                            </Content>
                        </Item>
                        <Item>
                            <Image avatar src="http://www.semantic-ui.com/images/avatar/small/christian.jpg"/>
                            <Content>
                                <Header>Christian</Header>
                            </Content>
                        </Item>
                       <Item>
                            <Image avatar src="http://www.semantic-ui.com/images/avatar/small/daniel.jpg"/>
                            <Content>
                                <Header>Daniel</Header>
                            </Content>
                        </Item>
                    </List>
                </Segment>
            </div>
        );
    }
}