import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Item from '../item';
import Content from '../../../elements/simple/content';

const consumedProps = {
    defaultClasses: true,
    component: 'div',
    image: 'test.png',
    contentAligned: 'top'
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

    it('Renders item image', () => {
        const wrapper = shallow(<Item image="test.png"/>);
        expect(wrapper.find('.image')).to.be.exist;
        expect(wrapper.find('.image').find('img')).to.be.exist;
        expect(wrapper.find('.image').find('img')).to.have.prop('src', 'test.png');
    });

    it('Renders content', () => {
        const wrapper = shallow(<Item>Test</Item>);
        expect(wrapper.find(Content)).to.be.exist;
        expect(wrapper.find(Content).children()).to.have.text('Test');
    })

    it('Align content', () => {
        const wrapper = shallow(<Item contentAligned="bottom"/>);
        expect(wrapper.find(Content)).to.have.prop('aligned', 'bottom');
    });
    
    itShouldConsumeOwnAndPassCustomProps(Item, consumedProps);
});
