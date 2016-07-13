import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Item from '../item';

const consumedProps = {
    active: true,
    link: true
};

describe('Item', () => {
    it('Should be rendered as <div> by default', () => {
        const wrapper = shallow(<Item />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('item');
    });
    
    it('Should be rendered as custom component', () => {
        const wrapper = shallow(<Item component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('item');
    });
    
    describe('Could be link item', () => {
        it('When link option provided', () => {
            const wrapper = shallow(<Item link/>);
            expect(wrapper).to.have.className('link');
        });
        
        it('When onClick callback provided', () => {
            const wrapper = shallow(<Item onClick={() => {}}/>);
            expect(wrapper).to.have.className('link');
        });
    });

    it('Could be active', () => {
        const wrapper = shallow(<Item active/>);
        expect(wrapper).to.have.className('active');
    })
    
    itShouldConsumeOwnAndPassCustomProps(Item, consumedProps);
});
