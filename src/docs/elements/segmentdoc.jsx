import React, { Component } from 'react';
import { Segment, Segments, } from '../../components/elements';
// can't get import working?
var classNames = require('classnames');

export class SegmentDoc extends Component {
	constructor(props) {
        super(props);
    }

	render() {
		return (
			<div>
				<Segment>
					<Segment>Basic Segment</Segment>
					<Segment raised>Raised Segment</Segment>
					<Segment stacked>Stacked Segment</Segment>
					<Segment piled z-index="10">Piled Segment</Segment>
				</Segment>
				<Segment>
					<Segment vertical>Vertical 1</Segment>
					<Segment vertical>Vertical 2</Segment>
					<Segment vertical>Vertical 3</Segment>
				</Segment>
				<Segments>
					<Segment>Top</Segment>
					<Segment>Middle</Segment>
					<Segment>Middle</Segment>
					<Segment>Middle</Segment>
					<Segment>Bottom</Segment>
				</Segments>
				<Segments>
					<Segment>Top</Segment>
					<Segment color="red">Middle</Segment>
					<Segment color="blue">Middle</Segment>
					<Segment color="green">Middle</Segment>
					<Segment color="yellow">Bottom</Segment>
				</Segments>
				<Segments>
					<Segment>Top</Segment>
					<Segment secondary>Secondary</Segment>
				</Segments>
				<Segments horizontal>
					<Segment>Left</Segment>
					<Segment>Middle</Segment>
					<Segment>Right</Segment>
				</Segments>
				<Segments raised>
					<Segment>Top</Segment>
					<Segment>Middle</Segment>
					<Segment>Bottom</Segment>
				</Segments>
				<Segments stacked>
					<Segment>Top</Segment>
					<Segment>Middle</Segment>
					<Segment>Bottom</Segment>
				</Segments>
				<Segments piled>
					<Segment>Top</Segment>
					<Segment>Middle</Segment>
					<Segment>Bottom</Segment>
				</Segments>
				<Segment loading>Loading</Segment>
				<Segment disabled>Disabled</Segment>
				<Segment attached="top">This segment is on top</Segment>
				<Segment attached>This segment is attached on both sides</Segment>
				<Segment attached="bottom">This segment is on bottom</Segment>
				<Segment padded>Padding is incresed</Segment>
				<Segment inverted>Top</Segment>
				<Segment inverted color="red">Middle</Segment>
				<Segment inverted color="blue">Middle</Segment>
				<Segment inverted color="green">Middle</Segment>
				<Segment inverted color="yellow">Bottom</Segment>
				<Segment>I'm here to tell you something, and you will probably read me first.</Segment>
				<Segment secondary>I am pretty noticeable but you might check out other content before you look at me.</Segment>
				<Segment tertiary>If you notice me you must be looking very hard.</Segment>
				<Segment inverted>I'm here to tell you something, and you will probably read me first.</Segment>
				<Segment inverted secondary>I am pretty noticeable but you might check out other content before you look at me.</Segment>
				<Segment inverted tertiary>If you notice me you must be looking very hard.</Segment>
				<Segment inverted color="red">I'm here to tell you something, and you will probably read me first.</Segment>
				<Segment inverted color="red" secondary>I am pretty noticeable but you might check out other content before you look at me.</Segment>
				<Segment inverted color="red" tertiary>If you notice me you must be looking very hard.</Segment>
				<Segment clearing><Button floated="right">Floated</Button></Segment>
				<Segment clearing>
					<Segment floated="right">This segment will appear to the right</Segment>
					<Segment floated="left">This segment will appear to the left</Segment>
				</Segment>
				<Segment aligned="left">Left</Segment>
				<Segment aligned="center">Center</Segment>
				<Segment aligned="right">Right</Segment>
				<Segment basic>Basic</Segment>
			</div>
		);
	}
}