import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AccordionBody from '../accordionbody';

describe('AccordionBody', () => {
    it('Should be rendered as div by default', () => {
        let wrapper = shallow(<AccordionBody />);
        expect(wrapper).to.have.tagName('div');
    });

    it('Could be rendered as custom component', () => {
        let wrapper = shallow(<AccordionBody component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('content');
    });

    it('Should has content content class', () => {
        let wrapper = shallow(<AccordionBody/>);
        expect(wrapper).to.have.className('content');
    });

    it('Should be active', () => {
        let wrapper = shallow(<AccordionBody active/>);
        expect(wrapper).to.have.className('active');
    });

    it('Should add em units to paddingTop and paddingBottom style', () => {
        let wrapper = shallow(<AccordionBody style={{ paddingTop: 0.4, paddingBottom: 0.5 }}/>);
        expect(wrapper).to.have.style('padding-top', '0.4em');
        expect(wrapper).to.have.style('padding-bottom', '0.5em');
    });
});