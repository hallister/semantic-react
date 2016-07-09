import React from 'react';
import Accordion from '../accordion';
import AccordionBody from '../accordionbody';
import AccordionTitle from '../accordiontitle';
import Segment from '../../../elements/segment/segment';

class MyStyledAccordion extends React.Component {
    constructor() {
        super();
        this.state = {
            values: [] // Current active content
        }
    }

    // Fired on accordion title click, index will be title index
    onAccordionChange(index) {
        this.setState({
            values: (this.state.values.indexOf(index) !== -1) ? [] : [index]
        });
    }

    render() {
        return (
            <Segment inverted>
                <Accordion inverted
                           activeIndexes={this.state.values}
                           onAccordionChange={this.onAccordionChange.bind(this)}
                >
                    <AccordionTitle index="first">First</AccordionTitle>
                    <AccordionBody>First content</AccordionBody>
                    <AccordionTitle index="second">Second</AccordionTitle>
                    <AccordionBody>Second content</AccordionBody>
                </Accordion>
            </Segment>
        );
    }
}

<MyStyledAccordion/>
