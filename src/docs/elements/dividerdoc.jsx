import React, { Component } from 'react';
import { Divider, Segment, Icon, Header, Content } from '../../components/elements';

// note: for header+divider to work the title must be wrapped in <Content> to issues with the 
// automatic <span> tags that React adds. Probably should submit an issue with Semantic

export class DividerDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let invertedDiv = [];
        let invertedBasicDiv = [];
        let socialDiv = [];
        let coloredDiv = [];
        let sizeDiv = [];

        let black = {backgroundColor: 'black', padding: '10px'}
        
        let social = ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube'];
        let colors = ['red', 'orange', 'yellow', 'olive', 'green', 
                    'teal', 'blue', 'violet', 'purple', 'pink',
                    'brown', 'grey', 'black'];
        let size = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];

        colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            //invertedDiv.push(<Button key={color} inverted color={color}>Basic Inverted {capColor}</Button>);
            //invertedBasicDiv.push(<Button key={color}Inverted basic inverted color={color}>Basic Inverted {capColor}</Button>);
            //coloredDiv.push(<Button key={color}Normal color={color}>{capColor}</Button>);
        });

        social.forEach(function(social) {
            //socialDiv.push(<Button key={social} social={social}><Icon name={social} />{social}</Button>)
        });

        size.forEach(function(size) {
            //sizeDiv.push(<Button key={size} size={size}>{size}</Button>)
        });

        return (
            <div>
                <Segment>
                    Test 1
                    <Divider/>
                    Test 2
                </Segment>
                <Segment>
                    Test 1
                    <Divider horizontal>
                        Or
                    </Divider>
                    Test 2
                </Segment>
                <Segment>
                    <Header divider horizontal element="h4">
                        <Icon name="tag"/>
                        <Content>Description</Content>
                    </Header>
                    <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
                </Segment>
                <Segment inverted>
                    Test 1
                    <Divider inverted/>
                    Test 2
                </Segment>
                <Segment>
                    Section One
                    <Divider fitted/>
                    Section Two
                </Segment>
                <Segment>
                    Section One
                    <Divider hidden/>
                    Section Two
                </Segment>
                <Segment>
                    Section One
                    <Divider section/>
                    Section Two
                </Segment>
                <Segment>
                    <Header floated="right" element="h2">Floated Content</Header>
                    <Divider clearing/>
                    <p>Test</p>
                </Segment>

            </div>

        );
    }
}