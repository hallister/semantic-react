import React from 'react';
import Accordion from '../accordion';
import AccordionBody from '../accordionbody';
import AccordionTitle from '../accordiontitle';

class MyMultipleAccordion extends React.Component {
    constructor() {
        super();
        this.state = {
            values: []
        }
    }

    onAccordionChange(index) {
        // Remove key if presented, add key otherwise, preserve other keys
        this.setState({
            values: (this.state.values.indexOf(index) !== -1) ? this.state.values.filter(cur => cur !== index) : [...this.state.values, index]
        });
    }

    render() {
        return (
            <Accordion styled activeIndexes={this.state.values} onAccordionChange={this.onAccordionChange.bind(this)}>
                <AccordionTitle index={1}>First</AccordionTitle>
                <AccordionBody>First content</AccordionBody>
                <AccordionTitle index={2}>Second</AccordionTitle>
                <AccordionBody>Second content</AccordionBody>
                <AccordionTitle index={3}>Third</AccordionTitle>
                <AccordionBody>Third content</AccordionBody>
                <AccordionTitle index={4}>Four</AccordionTitle>
                <AccordionBody>Four content</AccordionBody>
                <AccordionTitle index={5}>Five</AccordionTitle>
                <AccordionBody>Five content</AccordionBody>
            </Accordion>
        );
    }
}

<MyMultipleAccordion/>
