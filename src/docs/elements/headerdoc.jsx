import React, { Component } from 'react';
import { Header, SubHeader, Content, Segment, Icon, Image} from '../../components/elements';


// can't get import working?
var classNames = require('classnames');

// TODO: Horizontal List example

/* Two bugs **REQUIRE** that we use <Content> for text nodes
 * BUG: Header with image breaks due to React's automated <span> on free-floating text.
 * <h2 class="ui header">
 *   <img src="/images/avatar2/large/patrick.png" class="ui circular image">
 *   <span>Patrick</span>
 * </h2>
 *
 * BUG: Header with divider breaks due to React's automated <span> on free-floating text.
 * <h4 class="ui horizontal divider header">
 *   <i class="tag icon"></i>
 *   Description
 * </h4>
 */

export class HeaderDoc extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		let colorDiv = [];
		let colorInvertedDiv = [];
        let colors = ['red', 'orange', 'yellow', 'olive', 'green', 
                    'teal', 'blue', 'violet', 'purple', 'pink',
                    'brown', 'grey', 'black'];

        colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            colorDiv.push(<Header key={color} tag={React.DOM.h4} color={color}>{capColor}</Header>);
            colorInvertedDiv.push(<Header key={color} inverted tag={React.DOM.h4} color={color}>{capColor}</Header>);
        });     

		return (
			<div>
				<Segment>
					<Header size="huge" onClick={function test(){}}>Huge Header</Header>
					<Header size="large">Large Header</Header>
					<Header size="medium">Medium Header</Header>
					<Header size="small">Small Header</Header>
					<Header size="tiny">Tiny Header</Header>
				</Segment>
				<Segment>
					<Header>
						<Icon name="settings"/>
						<Content>
							Account Settings
							<SubHeader>Manage your account settings and set e-mail preferences.</SubHeader>
						</Content>
					</Header>
				</Segment>
				<Segment>
					<Header aligned="center">
						<Icon name="users" circular/>
						Friends
					</Header>
				</Segment>
				<Segment>
					<SubHeader>Price</SubHeader>
					<Content>$10.99</Content>
				</Segment>
				<Segment>
					<Header component="h3">
						<Image src="http://semantic-ui.com/images/icons/school.png"/>
						<Content>Learn More</Content>
					</Header>
				</Segment>
				<Segment>
					<Header component="h2">
						<Image circular src="http://semantic-ui.com/images/avatar2/large/patrick.png"/>
						<Content>Patrick</Content>
					</Header>
				</Segment>
				<Segment>
					<Header component="h2">
						<Icon name="plug"/>
						<Content>Uptime Guarantee</Content>
					</Header>
				</Segment>
				<Segment>
					<Header component="h2">
						<Icon name="settings"/>
						<Content>
							Account Settings
							<SubHeader>Manage your account settings and set e-mail preferences.</SubHeader>
						</Content>
					</Header>
				</Segment>
				<Segment>
					<Header component="h2">
						<Content>
							Account Settings
							<SubHeader>Manage your account settings and set e-mail preferences.</SubHeader>
						</Content>
					</Header>
				</Segment>
				<Segment>
					<Header component="h1">
						H1
						<SubHeader>Sub Header</SubHeader>
					</Header>
					<Header component="h2">
						H2
						<SubHeader>Sub Header</SubHeader>
					</Header>
					<Header component="h3">
						H3
						<SubHeader>Sub Header</SubHeader>
					</Header>
					<Header component="h4">
						H4
						<SubHeader>Sub Header</SubHeader>
					</Header>
					<Header component="h5">
						H5
						<SubHeader>Sub Header</SubHeader>
					</Header>
				</Segment>
				<Segment>
					<Header disabled>
						Disabled Header
					</Header>
				</Segment>
				<Segment>
					<Header component="h3" dividing>
						Dividing Header
					</Header>
				</Segment>
				<Segment>
					<Header block>
						Block Header
					</Header>
				</Segment>
				<Segment>
					<Header component="h3" attached="top">
						Top Attached
					</Header>
					<Segment attached />
					<Header component="h3" attached>
						Attached
					</Header>
					<Segment attached />
					<Header component="h3" attached="bottom">
						Bottom Attached
					</Header>
				</Segment>
				<Segment clearing>
					<Header component="h3" floated="right">
						Go Forward
					</Header>
					<Header component="h3" floated="left">
						Go Backward
					</Header>
				</Segment>
				<Segment>
					<Header component="h3" aligned="right">
						Right
					</Header>
					<Header component="h3" aligned="left">
						Left
					</Header>
					<Header component="h3" aligned="justified">
						This should take up the full width even if only one line
					</Header>
					<Header component="h3" aligned="center">
						Center
					</Header>
				</Segment>
				<Segment>
					{colorDiv}
				</Segment>
				<Segment inverted>
					{colorInvertedDiv}
				</Segment>
			</div>
		);
	}
}