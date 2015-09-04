import React, { Component } from 'react';
import { Card, Cards } from '../../components/views';
import { Segment, Image, Input, Icon, Content, Header, Description, Label, Buttons, Button } from '../../components/elements';

export class CardDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	return (
    		<div>
    			<Segment>
    				<Label attached="top">Example</Label>
    				<Card>
    					<Image src="http://semantic-ui.com/images/avatar2/large/kristy.png"/>
    					<Content>
    						<Header>Kristy</Header>
    						<Content meta>Joined in 2013</Content>
    						<Description>Kristy is an art director living in New York.</Description>
    					</Content>
    					<Content extra>
    						<Icon name="user" /> 22 Friends
    					</Content>
    				</Card>
    			</Segment>
    			<Segment>
    				<Label attached="top">Example</Label>
    				<Card>
    					<Content>
    						<Content meta floated="right">14h</Content>
    						<Image avatar src="http://semantic-ui.com/images/avatar/large/elliot.jpg" /> Elliot
    					</Content>
						<Image src="http://semantic-ui.com/images/wireframe/square-image.png"/>
    					<Content extra>
    						<Icon name="user" /> 22 Friends
    					</Content>
    					<Content>
    						<Content floated="right">
    							<Icon name="heart icon like" /> 17 likes
    						</Content>
    						<Icon name="comment" /> 3 comments
    					</Content>
    					<Content extra>
		                    <Input transparent type="text" size="large">
		                        <Icon left name="heart outline"/>
		                    </Input>
    					</Content>
    				</Card>
    			</Segment>
    		    <Segment>
    				<Label attached="top">Example</Label>
    				<Cards>
    					<Card>
    						<Content>
    							<Image floated="right" size="mini" src="http://semantic-ui.com/images/avatar/large/elliot.jpg" />
    							<Header>
    								Elliot Fu
    							</Header>
    							<Content meta>
    								Friends of Veronika
    							</Content>
    							<Description>Elliot requested permission to view your contact details</Description>
    						</Content>
    						<Content extra>
    							<Content>
    								<Buttons even>
				                        <Button basic color="green">Approve</Button>
				                        <Button basic color="red">Decline</Button>
    								</Buttons>
    							</Content>
    						</Content>
    					</Card>
    					<Card>
    						<Content>
    							<Image floated="right" size="mini" src="http://semantic-ui.com/images/avatar/large/jenny.jpg" />
    							<Header>
    								Jenny Hess
    							</Header>
    							<Content meta>
    								New Member
    							</Content>
    							<Description>Jenny wants to add you to the group <b>best friends</b></Description>
    						</Content>
    						<Content extra>
    							<Content>
    								<Buttons even>
				                        <Button basic color="green">Approve</Button>
				                        <Button basic color="red">Decline</Button>
    								</Buttons>
    							</Content>
    						</Content>
    					</Card>
    				</Cards>
    			</Segment>
    		</div>
    	);
    }
}