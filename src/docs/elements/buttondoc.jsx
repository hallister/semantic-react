import React, { Component } from 'react';
import { Button, Buttons, Icon, Segment, Content } from '../../components/elements';

export class ButtonDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let invertedDiv = [];
        let invertedBasicDiv = [];
        let socialDiv = [];
        let coloredDiv = [];
        let sizeDiv = [];
        
        let social = ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube'];
        let colors = ['red', 'orange', 'yellow', 'olive', 'green', 
                    'teal', 'blue', 'violet', 'purple', 'pink',
                    'brown', 'grey', 'black'];
        let size = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];

        colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            invertedDiv.push(<Button key={color} inverted color={color}>Basic Inverted {capColor}</Button>);
            invertedBasicDiv.push(<Button key={color} basic inverted color={color}>Basic Inverted {capColor}</Button>);
            coloredDiv.push(<Button key={color} color={color}>{capColor}</Button>);
        });

        social.forEach(function(social) {
            socialDiv.push(<Button key={social} social={social}><Icon name={social} />{social}</Button>)
        });

        size.forEach(function(size) {
            sizeDiv.push(<Button key={size} size={size}>{size}</Button>)
        });

        return (
            <div>
                <Segment className="spaced example">
                    <Button>Normal</Button>
                    <Button basic>Basic</Button>
                    <Button basic color="red">Basic Red</Button>
                    <Button primary>Primary</Button>
                    <Button secondary>Secondary</Button>
                    <Button basic color="orange">Basic Orange Inverted</Button>
                </Segment>
                <Segment className="spaced example">
                    {coloredDiv}
                </Segment>
                <Segment>
                    <Button animated>
                        <Content visible>Next</Content>
                        <Content hidden>
                            <Icon name="right arrow"/>
                        </Content>
                    </Button>
                    <Button animated="vertical">
                        <Content visible>Shop</Content>
                        <Content hidden>
                            <Icon name="shop"/>
                        </Content>
                    </Button>
                    <Button animated="fade">
                        <Content visible>Sign-up for a Pro account</Content>
                        <Content hidden>
                            $12.99 a month
                        </Content>
                    </Button>
                </Segment>
                <Segment className="spaced example">
                    {sizeDiv}
                </Segment>
                <Segment inverted className="spaced example">
                    <Button inverted>Basic Inverted</Button>
                    {invertedDiv}
                </Segment>
                <Segment inverted className="spaced example">
                    {invertedBasicDiv}
                </Segment>
                <Segment>
                    <Button>
                        <Icon name="pause" />
                        Labeled Icon Left
                    </Button>
                    <Button label="right">
                        <Icon name="pause" />
                        Labeled Icon Right
                    </Button>
                </Segment>
                <Segment>
                    <Button>
                        <Icon name="cloud" />
                    </Button>
                </Segment>
                <Segment>
                    <Buttons>
                        <Button>Test1</Button>
                        <Button>Test2</Button>
                    </Buttons>
                </Segment>
                <Segment>
                    <Buttons icon>
                        <Button>
                            <Icon name="align left" />
                        </Button>
                        <Button>
                            <Icon name="align center" />
                        </Button>
                        <Button>
                            <Icon name="align right" />
                        </Button>
                    </Buttons>
                </Segment>
                <Segment>
                    <Buttons>
                        <Button positive>Yes</Button>
                        <div className="or"></div>
                        <Button negative>No</Button>
                    </Buttons>
                </Segment>
                <Segment>
                    <Button active>Active</Button>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Button circular social="facebook">
                        <Icon name="facebook" />
                    </Button>
                </Segment>
                <Segment>
                    <Button fluid>Fluid</Button>
                </Segment>
                <Segment className="spaced example">
                    {socialDiv}
                </Segment>
                <Segment>
                    <Button compact>Hold</Button>
                    <Button compact>
                        <Icon name="pause" />
                    </Button>
                    <Button compact>
                        <Icon name="pause" />
                        Pause
                    </Button>
                </Segment>
                <Segment>
                    <Button attached="top">Top</Button>
                    <Segment attached></Segment>
                    <Button attached="bottom">Bottom</Button>
                </Segment>
                <Segment>
                    <Buttons attached="top">
                        <Button>Top 1</Button>
                        <Button>Top 2</Button>
                    </Buttons>
                    <Segment attached></Segment>
                    <Buttons attached="bottom">
                        <Button>Bottom 1</Button>
                        <Button>Bottom 2</Button>
                    </Buttons>
                </Segment>
                <Segment>
                    <Button attached="left">Left</Button>
                    <Button attached="right">Right</Button>
                </Segment>
                <Segment>
                    <Buttons vertical>
                        <Button>Feed</Button>
                        <Button>Messages</Button>
                    </Buttons>
                </Segment>
                <Segment>
                    <Buttons vertical labeled>
                        <Button>
                            <Icon name="shuffle" />
                            Shuffle
                        </Button>
                        <Button>
                            <Icon name="play" />
                            Play
                        </Button>
                    </Buttons>
                </Segment>
                <Segment>
                    <Buttons even>
                        <Button>Overview</Button>
                        <Button>Specs</Button>
                        <Button>Support</Button>
                    </Buttons>
                </Segment>
                <Segment>
                    <Buttons primary>
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </Buttons>
                </Segment>
            </div>
        );
    }
}