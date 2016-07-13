import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Segments from '../segments';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    compact: true,
    horizontal: true,
    inverted: true,
    type: 'piled'
};

describe('elements/segments', () => {
    it('should be rendered in dom', () => {
        const wrapper = shallow(<Segments/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui segments');
    });

    it('can be rendered as custom component', () => {
        const wrapper = shallow(<Segments component="a"/>);
        expect(wrapper).to.have.tagName('a');
    });

    it('could be compact', () => {
        const wrapper = shallow(<Segments compact/>);
        expect(wrapper).to.have.className('compact');
    });

    it('could be horizontal', () => {
        const wrapper = shallow(<Segments horizontal/>);
        expect(wrapper).to.have.className('horizontal');
    });

    it('could be inverted', () => {
        const wrapper = shallow(<Segments inverted/>);
        expect(wrapper).to.have.className('inverted');
    });

    describe('could have type', () => {
        it('piled', () => {
            const wrapper = shallow(<Segments type="piled"/>);
            expect(wrapper).to.have.className('piled');
        });

        it('raised', () => {
            const wrapper = shallow(<Segments type="raised"/>);
            expect(wrapper).to.have.className('raised');
        });

        it('stacked', () => {
            const wrapper = shallow(<Segments type="stacked"/>);
            expect(wrapper).to.have.className('stacked');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(Segments, consumedProps);
});
