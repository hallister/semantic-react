import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Items from '../items';

describe('views/item/items', () => {
    it('should be rendered in dom', () => {
        const wrapper = shallow(<Items/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui items');
    });

    it('can be rendered as custom component', () => {
        const wrapper = shallow(<Items component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui items');
    });

    it('can be divided', () => {
        const wrapper = shallow(<Items divided/>);
        expect(wrapper).to.have.className('divided');
    });

    it('can be relaxed', () => {
        const wrapper = shallow(<Items relaxed/>);
        expect(wrapper).to.have.className('relaxed');
    });

    it('can be link', () => {
        const wrapper = shallow(<Items link/>);
        expect(wrapper).to.have.className('link');
    });
});
