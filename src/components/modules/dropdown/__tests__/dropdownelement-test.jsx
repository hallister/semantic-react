import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DropdownElement from '../dropdownelement';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    compact: true,
    disabled: true,
    error: true,
    loading: true,
    fluid: true,
    scrolling: true
};

describe('DropdownElement', () => {
    it('Should be rendered as div by default', () => {
        let wrapper = shallow(<DropdownElement/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui dropdown');
    });

    it('Could be rendered as different component', () => {
        let wrapper = shallow(<DropdownElement component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui dropdown');
    });

    it('Could be active', () => {
        let wrapper = shallow(<DropdownElement active/>);
        expect(wrapper).to.have.className('active');
    });

    it('Could be compact', () => {
        let wrapper = shallow(<DropdownElement compact/>);
        expect(wrapper).to.have.className('compact');
    });

    it('Could be disabled', () => {
        let wrapper = shallow(<DropdownElement disabled/>);
        expect(wrapper).to.have.className('disabled');
    });

    it('Could indicate error', () => {
        let wrapper = shallow(<DropdownElement error/>);
        expect(wrapper).to.have.className('error');
    });

    it('Could indicate that it\'s being loaded', () => {
        let wrapper = shallow(<DropdownElement loading/>);
        expect(wrapper).to.have.className('loading');
    });

    it('Could be fluid', () => {
        let wrapper = shallow(<DropdownElement fluid/>);
        expect(wrapper).to.have.className('fluid');
    });

    it('Could be scrolling', () => {
        let wrapper = shallow(<DropdownElement scrolling/>);
        expect(wrapper).to.have.className('scrolling');
    });
    
    itShouldConsumeOwnAndPassCustomProps(DropdownElement, consumedProps);
});
