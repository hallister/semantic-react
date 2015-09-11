import React, { Component } from 'react';
import { Reveal, Content, Image, Segment } from '../../components/elements';

// Todo: Can't do much without a dimmer

export class RevealDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Segment>
                    <Reveal fade>
                        <Content visible>
                            <Image size="small" src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        </Content>
                        <Content hidden>
                            <Image size="small" src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                        </Content>
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal fade size="small">
                        <Content visible>
                            <Image src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        </Content>
                        <Content hidden>
                            <Image src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                        </Content>
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal move size="small">
                        <Content visible>
                            <Image src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        </Content>
                        <Content hidden>
                            <Image src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                        </Content>
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal move="right" size="small">
                        <Content visible>
                            <Image src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        </Content>
                        <Content hidden>
                            <Image src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                        </Content>
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal move="up" size="small">
                        <Content visible>
                            <Image src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        </Content>
                        <Content hidden>
                            <Image src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                        </Content>
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal move="down" size="small">
                        <Content visible>
                            <Image src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        </Content>
                        <Content hidden>
                            <Image src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                        </Content>
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal rotate size="small" circular>
                        <Image visible content src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        <Image hidden content src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal rotate="left" size="small" circular>
                        <Image visible content src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        <Image hidden content src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal type="fade" size="small">
                        <Image visible content src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                        <Image hidden content src="http://semantic-ui.com/images/wireframe/square-image.png" />
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal type="fade" size="small">
                        <Image visible content src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        <Image hidden content src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal active type="fade" size="small">
                        <Image visible content src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        <Image hidden content src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                    </Reveal>
                </Segment> 
                <Segment>
                    <Reveal move instant>
                        <Image visible content src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        <Image hidden content src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                    </Reveal>
                </Segment>
                <Segment>
                    <Reveal move disabled>
                        <Image visible content src="http://semantic-ui.com/images/wireframe/square-image.png" />
                        <Image hidden content src="http://semantic-ui.com/images/avatar/large/ade.jpg" />
                    </Reveal>
                </Segment>   
            </div>
        );
    }
}