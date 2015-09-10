import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Segments, Label, Button, Divider, Header, SubHeader } from '../components/elements';

export class DocBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: false,
            codeText: 'Show'
        };
    }

    onCodeButtonClick() {
        this.setState({
            code: !this.state.code,
            codeText: this.state.code ? 'Show' : 'Hide'
        });
    }

    renderSegments() {
        return (
            <Segments color="blue" horizontal style={{maxHeight: '400px', overflow: 'auto', wordWrap: 'break-word'}}>
                <Segment>
                    <Label attached="top">JAVASCRIPT</Label>
                    <pre>
                        <code className="javascript" dangerouslySetInnerHTML={{__html: this.props.JS}} />
                    </pre>
                </Segment>
                <Segment>
                    <Label attached="top">JSX</Label>
                    <pre>
                        <code className="xml" dangerouslySetInnerHTML={{__html: this.props.JSX}} />
                    </pre>
                </Segment>
            </Segments>
        );   
    }

    renderSegment() {
        return (
            <Segment >
                <Label color="red" ribbon>JSX</Label>
                <pre style={{marginTop: '0 !important', marginBottom: '0 !important'}}>
                    <code className="xml" dangerouslySetInnerHTML={{__html: this.props.JSX}} />
                </pre>
            </Segment>
        );
    }

    renderHeader() {
        return (
            <Header>
                {this.props.header}
                <SubHeader>{this.props.subheader}</SubHeader>
            </Header>
        );
    }

    render() {
        return (
            <Segment basic id={this.props.componentID}>
                {this.props.header ? this.renderHeader() : ''}
                <Divider hidden fitted/>
                <Segment attached inverted={this.props.inverted}>
                    <Label attached="top" color="black">Example</Label>
                    <Segment basic inverted={this.props.inverted}>
                    {this.props.children}
                    </Segment>
                </Segment>
                <Button attached="bottom" size="mini" onClick={this.onCodeButtonClick.bind(this)}>
                    {this.state.codeText} Code
                </Button>


                <Segment basic hidden={!this.state.code} ref="code">
                    {this.props.JS ? this.renderSegments() : this.renderSegment()}
                </Segment>
            </Segment>
        );
    }
}