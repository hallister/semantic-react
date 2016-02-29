import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import { Item } from '../item';

const consumedProps = {
    link: true
};

describe('Item', () => {
    it('Should be rendered as <div> by default', () => {
        let wrapper = shallow(<Item />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('item');
    });
    
    it('Should be rendered as custom component', () => {
        let wrapper = shallow(<Item component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('item');
    });
    
    describe('Could be link item', () => {
        it('When link option provided', () => {
            let wrapper = shallow(<Item link/>);
            expect(wrapper).to.have.className('link');
        });
        
        it('When onClick callback provided', () => {
            let wrapper = shallow(<Item onClick={() => {}}/>);
            expect(wrapper).to.have.className('link');
        });
    });
    
    itShouldConsumeOwnAndPassCustomProps(Item, consumedProps);
});