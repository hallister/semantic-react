/* eslint-env node, mocha */
import React from 'react';
import { LabeledButton, Button, Icon, Label } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    labeled: 'left',
    labelType: 'icon',
    label: 'test',
    labelComponent: 'label'
};

describe('LabeledButton', () => {
    it('should be right labeled by default', () => {
        let wrapper = shallow(<LabeledButton label="Test"/>);
        expect(wrapper).to.have.className('right labeled');
    });
    
    it('could be left labeled', () => {
        let wrapper = shallow(
            <LabeledButton labeled="left" 
                           label="Test"/>
        );
        expect(wrapper).to.have.className('left labeled');
    });
    describe('when labelType is icon', () => {
        it('Should render Button with Icon as first child by default', () => {
            let wrapper = shallow(<LabeledButton label="test" labelType="icon"/>);
            expect(wrapper.is(Button)).to.be.true;
            expect(wrapper.find(Icon)).to.be.exist;
        });
        
        it('Shouldn\'t add ui class to button', () => {
            let wrapper = shallow(<LabeledButton label="test" labelType="icon"/>);
            expect(wrapper).to.have.not.className('ui');
        });
        
        it('Should add icon class to the button', () => {
            let wrapper = shallow(<LabeledButton label="test" labelType="icon"/>);
            expect(wrapper).to.have.className('icon');
        });
        
        it('Should assign label as icon name', () => {
            let wrapper = shallow(<LabeledButton label="test" labelType="icon"/>);
            expect(wrapper.find(Icon)).to.have.prop('name', 'test');
        });
        
        
        it('Should allow override label component', () => {
            let wrapper = shallow(
                <LabeledButton label="test" labelType="icon" 
                               labelComponent={(props) => <Icon color="red" {...props}/>}/>
            );
            expect(wrapper.children().shallow().find(Icon)).to.be.exist;
            expect(wrapper.children().shallow().find(Icon)).to.have.prop('color', 'red');
        });
        
        it('Should render children', () => {
            let wrapper = shallow(
                <LabeledButton label="test" labelType="icon">
                    TestLabel
                </LabeledButton>
            );
            expect(wrapper).to.have.html().match(/TestLabel/);
        });
    });
    
    describe('when labelType is text', () => {
        it('Should render div with button and label inside', () => {
            let wrapper = shallow(<LabeledButton label="Test" labelType="text"/>);
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('ui button');
            expect(wrapper).to.have.className('labeled');
            expect(wrapper.find(Button)).to.be.exist;
            expect(wrapper.find(Label)).to.be.exist;
            expect(wrapper.find(Label)).to.have.html().match(/Test/);
        });
        
        describe('Positions label depends on current labeled prop', () => {
            it('Should render label then button if left', () => {
                let wrapper = shallow(<LabeledButton label="Test" labeled="left" labelType="text"/>);
                expect(wrapper.children().at(0).is(Label)).to.be.true;
                expect(wrapper.children().at(1).is(Button)).to.be.true;
            });
            
            it('Should render button then label if right', () => {
                let wrapper = shallow(<LabeledButton label="Test" labeled="right" labelType="text"/>);
                expect(wrapper.children().at(0).is(Button)).to.be.true;
                expect(wrapper.children().at(1).is(Label)).to.be.true;
            });
        });
        
        it('Passes props to button', () => {
            let wrapper = shallow(
                <LabeledButton circular color="red" 
                               label="Test" labelType="text"/>
            );
            expect(wrapper.find(Button)).to.have.prop('circular', true);
            expect(wrapper.find(Button)).to.have.prop('color', 'red');
        });
        
        it('Renders children inside in button', () => {
            let wrapper = shallow(
                <LabeledButton circular color="red"
                               label="Test" labelType="text"
                >
                    <Icon name="cloud"/>
                    MyButton
                </LabeledButton>
            );
            expect(wrapper.find(Button)).to.have.descendants(Icon);
            expect(wrapper.find(Button)).to.have.html().match(/MyButton/);
        });
        
        it('Allows to override label', () => {
            let wrapper = shallow(
                <LabeledButton label="Test" labelType="text"
                               labelComponent={(props) => <Label pointing="left">{props.children}</Label>}/>
            );
            expect(wrapper.children().at(1).shallow().find(Label)).to.be.exist;
            expect(wrapper.children().at(1).shallow().find(Label)).to.have.prop('pointing', 'left');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(LabeledButton, consumedProps);
});
