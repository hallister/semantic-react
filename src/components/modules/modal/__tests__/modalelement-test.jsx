import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ModalElement from '../modalelement';
import { itShouldConsumeOwnAndPassCustomProps } from './../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    active: true,
    basic: true,
    fullscreen: true,
    size: 'large'
};

describe('ModalElement', () => {
    it('Should be rendered as div by default', () => {
        let wrapper = shallow(<ModalElement />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui');
        expect(wrapper).to.have.className('modal');
    });

    it('Could be rendered as custom element', () => {
        let wrapper = shallow(<ModalElement component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui');
        expect(wrapper).to.have.className('modal');
    });

    it('Can be active', () => {
        let wrapper = shallow(<ModalElement active/>);
        expect(wrapper).to.have.className('active');
    });

    it('Can be basic', () => {
        let wrapper = shallow(<ModalElement basic/>);
        expect(wrapper).to.have.className('basic');
    });
    
    it('Can take fullscreen', () => {
        let wrapper = shallow(<ModalElement fullscreen/>);
        expect(wrapper).to.have.className('fullscreen');
    });

    it('Can vary in size', () => {
        let wrapper = shallow(<ModalElement size="large"/>);
        expect(wrapper).to.have.className('large');
        expect(wrapper).to.have.not.className('size');
    });

    it('Can be scrolling', () => {
        let wrapper = shallow(<ModalElement scrolling/>);
        expect(wrapper).to.have.className('scrolling');
    });

    itShouldConsumeOwnAndPassCustomProps(ModalElement, consumedProps);
});