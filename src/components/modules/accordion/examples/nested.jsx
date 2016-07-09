import React from 'react';
import Accordion from '../accordion';
import AccordionBody from '../accordionbody';
import AccordionTitle from '../accordiontitle';
import Segment from '../../../elements/segment/segment';

class MyNestedAccordion extends React.Component {
    constructor() {
        super();
        this.state = {
            primary: [],
            nested1: [],
            nested2: []
        }
    }

    onAccordionChange(key, index) {
        this.setState({
            [key]: (this.state[key].indexOf(index) !== -1) ? [] : [index]
        });
    }

    render() {
        return (
                <Accordion styled activeIndexes={this.state.primary} onAccordionChange={this.onAccordionChange.bind(this, 'primary')}>
                    <AccordionTitle index={1}>First</AccordionTitle>
                    <AccordionBody>First content</AccordionBody>
                    <AccordionTitle index={2}>Nested</AccordionTitle>
                    <AccordionBody>
                        <p>Here is another accordion</p>
                        <Accordion activeIndexes={this.state.nested1} onAccordionChange={this.onAccordionChange.bind(this, 'nested1')}>
                            <AccordionTitle index={1}>Nested 1</AccordionTitle>
                            <AccordionBody>First nested 1 content</AccordionBody>
                            <AccordionTitle index={2}>Another Nested</AccordionTitle>
                            <AccordionBody>
                                <p>And another...</p>
                                <Accordion activeIndexes={this.state.nested2} onAccordionChange={this.onAccordionChange.bind(this, 'nested2')}>
                                    <AccordionTitle index={1}>Nested nested</AccordionTitle>
                                    <AccordionBody>Hello from deep nest</AccordionBody>
                                </Accordion>
                            </AccordionBody>
                        </Accordion>
                    </AccordionBody>
                </Accordion>
        );
    }
}

<MyNestedAccordion/>
