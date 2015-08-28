import React, { Component } from 'react';
import { Label, Labels, Detail, Segment } from '../../components/elements';

// Todo: Pointing examples after forms
// Todo: Image/Overview/Attached examples after grid
// Todo: Horizontal examples after lists
// Todo: Floating example after menu


export class LabelDoc extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick(e) {
        e.preventDefault();
    }

    render() {
        let coloredDiv = [];
        let circledDiv = [];
        let sizeDiv = [];

        let colors = ['red', 'orange', 'yellow', 'olive', 'green', 
            'teal', 'blue', 'violet', 'purple', 'pink',
            'brown', 'grey', 'black'];

        let sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];

        colors.forEach(function(color) {
            let capColor = color.charAt(0).toUpperCase() + color.slice(1);

            circledDiv.push(<Label key={color}Circle circular color={color}>2</Label>);
            coloredDiv.push(<Label key={color}Normal color={color}>{capColor}</Label>);
        });

        sizes.forEach(function(size) {
            let capSize = size.charAt(0).toUpperCase() + size.slice(1);

            sizeDiv.push(<Label key={size} size={size}>{capSize}</Label>);
        });

        return (
            <div>
                <Segment>
                    <Label>
                        <Icon name="mail"/> 23
                    </Label>
                </Segment>
                <Segment>
                    <Label image>
                        <Image src="http://semantic-ui.com/images/avatar/small/joe.jpg"/> Joe
                    </Label>
                    <Label image>
                        <Image src="http://semantic-ui.com/images/avatar/small/elliot.jpg"/> Elliot
                    </Label>
                    <Label image>
                        <Image src="http://semantic-ui.com/images/avatar/small/steve.jpg"/>Stevie
                    </Label>
                </Segment>
                <Segment>
                    <Label color="blue" image>
                        <Image src="http://semantic-ui.com/images/avatar/small/veronika.jpg"/>
                        Veronika
                        <Detail>Friend</Detail>
                    </Label>
                    <Label color="teal" image>
                        <Image src="http://semantic-ui.com/images/avatar/small/jenny.jpg"/>
                        Jenny
                        <Detail>Student</Detail>
                    </Label>
                    <Label color="yellow" image>
                        <Image src="http://semantic-ui.com/images/avatar/small/christian.jpg"/> 
                        Christian
                        <Detail>Co-worker</Detail>
                    </Label>
                </Segment>
                <Segment>
                    <Label image>
                        <Image src="http://semantic-ui.com/images/avatar/small/veronika.jpg"/>
                        Veronika
                        <Icon name="delete"/>
                    </Label>
                    <Label image>
                        <Image src="http://semantic-ui.com/images/avatar/small/jenny.jpg"/>
                        Jenny
                        <Icon name="delete"/>
                    </Label>
                    <Label image>
                        <Image src="http://semantic-ui.com/images/avatar/small/christian.jpg"/> 
                        Christian
                        <Icon name="delete"/>
                    </Label>
                </Segment>
                <Segment>
                    <Image fluid src="http://semantic-ui.com/images/wireframe/image.png">
                        <Label color="red" corner="left" onClick={this.handleOnClick}>
                            <Icon name="heart"/>
                        </Label>
                    </Image>
                </Segment>
                <Segment>
                        <Label tag onClick={this.handleOnClick}>
                            New
                        </Label>
                        <Label tag color="red" onClick={this.handleOnClick}>
                            Upcoming
                        </Label>
                        <Label tag color="teal" onClick={this.handleOnClick}>
                            Featured
                        </Label>
                </Segment>
                <Segment raised>
                    <Label ribbon color="red">
                        Overview
                    </Label>
                    Account Details
                </Segment>
                <Segments>
                    <Segment>
                        <Label attached="top">HTML</Label>
                        <Content>Test</Content>
                    </Segment>
                </Segments>
                <Segment>
                    <Label>
                        Dogs
                        <Detail>214</Detail>
                    </Label>
                </Segment>
                <Segment>
                    <Label>
                        <Icon name="mail"/>
                        Mail
                    </Label>
                    <Label>
                        Tag
                        <Icon name="delete"/>
                    </Label>
                </Segment>
                <Segment>
                    <Label onClick={this.handleOnClick}>
                        <Image right spaced avatar src="http://semantic-ui.com/images/avatar/small/elliot.jpg"/>
                        Elliot
                    </Label>
                    <Label onClick={this.handleOnClick}>
                        <Image src="http://semantic-ui.com/images/avatar/small/stevie.jpg" defaultClasses={false}/>
                        Stevie
                    </Label>
                </Segment>
                <Segment>
                    <Label>
                        <Icon name="mail"/>
                        23
                    </Label>
                </Segment>
                <Segment>
                    <Label>
                        <Icon name="mail"/>
                        23
                        <Detail onClick={this.handleOnClick}>View Mail</Detail>
                    </Label>
                </Segment>
                <Segment>
                    {circledDiv}
                </Segment>
                <Segment>
                    {coloredDiv}
                </Segment>
                <Segment>
                    {sizeDiv}
                </Segment>
                <Segment>
                    <Labels size="huge">
                        <Label>Fun</Label>
                        <Label>Happy</Label>
                        <Label>Smart</Label>
                        <Label>Witty</Label>
                    </Labels>
                </Segment>
                <Segment>
                    <Labels color="blue">
                        <Label>
                            Fun
                            <Icon name="close"/>
                        </Label>
                        <Label>
                            Happy
                            <Detail>22</Detail>
                        </Label>
                        <Label>Smart</Label>
                        <Label>Insane</Label>
                        <Label>Exciting</Label>
                    </Labels>
                </Segment>
                <Segment>
                    <Labels tag>
                        <Label>$10.00</Label>
                        <Label>$19.99</Label>
                        <Label>$24.99</Label>
                        <Label>$30.99</Label>
                        <Label>$10.25</Label>
                    </Labels>
                </Segment>
                <Segment>
                    <Labels circular>
                        <Label>11</Label>
                        <Label>22</Label>
                        <Label>33</Label>
                        <Label>44</Label>
                        <Label>141</Label>
                    </Labels>
                </Segment>
                <Segment>
                    <Labels corner>
                        <Label>11</Label>
                        <Label>22</Label>
                        <Label>33</Label>
                        <Label>44</Label>
                        <Label>141</Label>
                    </Labels>
                </Segment>
            </div>
        );
    }
}