import React, { Component } from 'react';
//import { Card, Cards } from '../../components/views';
import { Segment, Icon, Content } from '../../components/elements';
import { Accordion, AccordionTitle, AccordionBody } from '../../components/modules';

export class AccordionDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	return (
    		<div>
    			<Segment>
                    <Accordion>
                        <AccordionTitle icon="dropdown">
                            What is a dog
                        </AccordionTitle>
                        <AccordionBody>
                            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                            it can be found as a welcome guest in many households across the world.
                        </AccordionBody>
                        <AccordionTitle icon="dropdown">
                            What kinds of dogs are there?
                        </AccordionTitle>
                        <AccordionBody>
                            There are many breeds of dogs. Each breed varies in size and temperament. Owners often 
                            select a breed of dog that they find to be compatible with their own lifestyle and 
                            desires from a companion.
                        </AccordionBody>
                        <AccordionTitle icon="dropdown">
                            How do you acquire a dog?
                        </AccordionTitle>
                        <AccordionBody animation-class="fade">
                            <p>Three common ways for a prospective owner to acquire a dog is from pet shops, 
                            private owners, or shelters.</p>
                            <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a 
                            private owner allows you to assess the pedigree and upbringing of your dog before 
                            choosing to take it home. Lastly, finding your dog from a shelter, helps give a good 
                            home to a dog who may not find one so readily.</p>
                        </AccordionBody>
                    </Accordion>
                </Segment>
                <Segment>
                    <Accordion styled>
                        <AccordionTitle icon="dropdown">
                            What is a dog
                        </AccordionTitle>
                        <AccordionBody>
                            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                            it can be found as a welcome guest in many households across the world.
                        </AccordionBody>
                        <AccordionTitle icon="dropdown">
                            What kinds of dogs are there?
                        </AccordionTitle>
                        <AccordionBody>
                            There are many breeds of dogs. Each breed varies in size and temperament. Owners often 
                            select a breed of dog that they find to be compatible with their own lifestyle and 
                            desires from a companion.
                        </AccordionBody>
                        <AccordionTitle icon="dropdown">
                            How do you acquire a dog?
                        </AccordionTitle>
                        <AccordionBody animation-class="fade">
                            <p>Three common ways for a prospective owner to acquire a dog is from pet shops, 
                            private owners, or shelters.</p>
                            <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a 
                            private owner allows you to assess the pedigree and upbringing of your dog before 
                            choosing to take it home. Lastly, finding your dog from a shelter, helps give a good 
                            home to a dog who may not find one so readily.</p>
                        </AccordionBody>
                    </Accordion>
    			</Segment>
                <Segment inverted>
                    <Accordion inverted>
                        <AccordionTitle icon="dropdown">
                            What is a dog
                        </AccordionTitle>
                        <AccordionBody>
                            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                            it can be found as a welcome guest in many households across the world.
                        </AccordionBody>
                        <AccordionTitle icon="dropdown">
                            What kinds of dogs are there?
                        </AccordionTitle>
                        <AccordionBody>
                            There are many breeds of dogs. Each breed varies in size and temperament. Owners often 
                            select a breed of dog that they find to be compatible with their own lifestyle and 
                            desires from a companion.
                        </AccordionBody>
                        <AccordionTitle icon="dropdown">
                            How do you acquire a dog?
                        </AccordionTitle>
                        <AccordionBody animation-class="fade">
                            <p>Three common ways for a prospective owner to acquire a dog is from pet shops, 
                            private owners, or shelters.</p>
                            <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a 
                            private owner allows you to assess the pedigree and upbringing of your dog before 
                            choosing to take it home. Lastly, finding your dog from a shelter, helps give a good 
                            home to a dog who may not find one so readily.</p>
                        </AccordionBody>
                    </Accordion>
                </Segment>
    		</div>
    	);
    }
}