import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Accordion from '../accordion';
import AccordionBody from '../accordionbody';
import AccordionTitle from '../accordiontitle';
import { itShouldConsumeOwnAndPassCustomProps } from './../../../test-utils';

const consumedProps = {
    defaultClasses: true,
    activeIndexes: [],
    fluid: true,
    inverted: true,
    onAccordionChange: () => { },
    styled: true
};

describe('Accordion', () => {
    it('Should be rendered as div by default', () => {
        let wrapper = shallow(<Accordion><div>test</div></Accordion>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper.shallow().shallow()).to.have.className('ui accordion');
    });

    it('Can be rendered as custom component', () => {
        let wrapper = shallow(<Accordion component="a"><div>test</div></Accordion>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper.shallow().shallow()).to.have.className('ui accordion');
    });

    it('Can be fluid', () => {
        let wrapper = shallow(<Accordion fluid><div>test</div></Accordion>);
        expect(wrapper.shallow().shallow()).to.have.className('fluid');
    });

    it('Can be inverted', () => {
        let wrapper = shallow(<Accordion inverted><div>test</div></Accordion>);
        expect(wrapper.shallow().shallow()).to.have.className('inverted');
    });

    it('Can be styled', () => {
        let wrapper = shallow(<Accordion styled><div>test</div></Accordion>);
        expect(wrapper.shallow().shallow()).to.have.className('styled');
    });

    it('Doesn\'t add ui class name if in context of another accordion', () => {
        let wrapper = shallow(<Accordion><div>test</div></Accordion>, { context: { isAccordionChild: true } });
        expect(wrapper.shallow().shallow()).to.have.not.className('ui');
    })

    describe('It renders childrens', () => {
        it('Omit non active content', () => {
            let wrapper = shallow(
                <Accordion>
                    <AccordionTitle index={1}>First</AccordionTitle>
                    <AccordionBody>Test</AccordionBody>
                    <AccordionTitle index={2}>Second</AccordionTitle>
                    <AccordionBody>Another</AccordionBody>
                </Accordion>
            );
            expect(wrapper.children().length).to.equal(2);
            expect(wrapper.find(AccordionBody)).to.be.not.exist;

            wrapper.setProps({ activeIndexes: [1] });
            expect(wrapper).to.have.exactly(1).descendants(AccordionBody);
        });

        it('Binds onClick handler for titles', () => {
            let wrapper = shallow(
                <Accordion>
                    <AccordionTitle index={1}>First</AccordionTitle>
                    <AccordionBody>Test</AccordionBody>
                    <AccordionTitle index={2}>Second</AccordionTitle>
                    <AccordionBody>Another</AccordionBody>
                </Accordion>
            );
            expect(wrapper.find(AccordionTitle).first()).to.have.prop('onClick').that.be.a('function');
        });

        it('Sets active prop for both title and content', () => {
            let wrapper = shallow(
                <Accordion activeIndexes={[1]}>
                    <AccordionTitle index={1}>First</AccordionTitle>
                    <AccordionBody>Test</AccordionBody>
                    <AccordionTitle index={2}>Second</AccordionTitle>
                    <AccordionBody>Another</AccordionBody>
                </Accordion>
            );
            expect(wrapper.find(AccordionTitle).first()).to.have.prop('active', true);
            expect(wrapper.find(AccordionBody)).to.have.prop('active', true);
        });

        it('Passes title style property as initialStyle', () => {

            let wrapper = shallow(
                <Accordion activeIndexes={[]}>
                    <AccordionTitle index={1} style={{ background: 'green' }}>First</AccordionTitle>
                    <AccordionBody>Test</AccordionBody>
                </Accordion>
            );
            expect(wrapper.find(AccordionTitle)).to.have.prop('initialStyle').that.deep.equal({ background: 'green' });
        });

        it('Adds overflow hidden style to body items', () => {
            let wrapper = shallow(
                <Accordion activeIndexes={[1]}>
                    <AccordionTitle index={1}>First</AccordionTitle>
                    <AccordionBody style={{ background: 'green' }}>Test</AccordionBody>
                </Accordion>
            );
            expect(wrapper.find(AccordionBody)).to.have.prop('style').that.contain.all.keys({ overflow: 'hidden', background: 'green' });
        });

        it('Allows few active items', () => {
            let wrapper = shallow(
                <Accordion activeIndexes={[1, 2]}>
                    <AccordionTitle index={1}>First</AccordionTitle>
                    <AccordionBody>Test</AccordionBody>
                    <AccordionTitle index={2}>Second</AccordionTitle>
                    <AccordionBody>Another</AccordionBody>
                </Accordion>
            );
            expect(wrapper).to.have.exactly(2).descendants(AccordionBody);
            expect(wrapper.find(AccordionTitle).at(0)).to.have.prop('active', true);
            expect(wrapper.find(AccordionTitle).at(1)).to.have.prop('active', true);
            expect(wrapper.find(AccordionBody).at(0)).to.have.prop('active', true);
            expect(wrapper.find(AccordionBody).at(1)).to.have.prop('active', true);
        });

        it('Calls onAccordionChange with title index when child title was clicked', () => {
            let spy = sinon.spy();
            let wrapper = shallow(
                <Accordion onAccordionChange={spy}>
                    <AccordionTitle index={1}>First</AccordionTitle>
                    <AccordionBody>Test</AccordionBody>
                    <AccordionTitle index={2}>Second</AccordionTitle>
                    <AccordionBody>Another</AccordionBody>
                </Accordion>
            );
            wrapper.find(AccordionTitle).first().prop('onClick')({ preventDefault: sinon.spy() })
            expect(spy).to.have.been.calledWith(1);
            wrapper.find(AccordionTitle).last().prop('onClick')({ preventDefault: sinon.spy() })
            expect(spy).to.have.been.calledWith(2);
        });
    });

    // itShouldConsumeOwnAndPassCustomProps(Accordion, consumedProps);
});
