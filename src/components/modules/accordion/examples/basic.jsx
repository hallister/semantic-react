import React from 'react';
import Accordion from '../accordion';
import AccordionBody from '../accordionbody';
import AccordionTitle from '../accordiontitle';

class MyAccordion extends React.Component {
    constructor() {
        super();
        this.state = {
            values: [] // Current active content
        }
    }

    // Fired on accordion title click, index will be title index
    onAccordionChange = (index) => {
        this.setState({
            values: (this.state.values.indexOf(index) !== -1) ? [] : [index]
        });
    }

    render() {
        // Index is required for AccordionTitle, strings or numbers are accepted
        return (
            <Accordion activeIndexes={this.state.values} onAccordionChange={this.onAccordionChange}>
                <AccordionTitle index={1}>First</AccordionTitle>
                <AccordionBody>First content</AccordionBody>
                <AccordionTitle index={2}>Second</AccordionTitle>
                <AccordionBody>Second content</AccordionBody>
            </Accordion>
        );
    }
}

<MyAccordion />
