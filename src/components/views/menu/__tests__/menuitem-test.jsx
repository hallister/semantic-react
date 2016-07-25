import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import MenuItem from '../menuitem';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    component: 'div',
    defaultClasses: true,
    active: true,
    color: 'green',
    menuValue: 'test'
};

describe('MenuItem', () => {
    it('should be rendered in dom', () => {
        const wrapper = shallow(<MenuItem/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('link item');
    });

    it('should be rendered as custom component', () => {
        const wrapper = shallow(<MenuItem component="a"/>);
        expect(wrapper).to.have.tagName('a');
    });

    it('can be active', () => {
        const wrapper = shallow(<MenuItem active/>);
        expect(wrapper).to.have.className('active');
    });

    it('can be disabled', () => {
        const wrapper = shallow(<MenuItem disabled/>);
        expect(wrapper).to.have.className('disabled');
    });

    it('can have color', () => {
        const wrapper = shallow(<MenuItem color="red"/>);
        expect(wrapper).to.have.className('red');
    });


    it('should contain value as data variable', () => {
        let wrapper = shallow(<MenuItem menuValue="test"/>);
        expect(wrapper).to.have.data('value', 'test');
        wrapper = shallow(<MenuItem menuValue={5}/>);
        expect(wrapper).to.have.data('value', 5);
    });
    
    itShouldConsumeOwnAndPassCustomProps(MenuItem, consumedProps);
});
