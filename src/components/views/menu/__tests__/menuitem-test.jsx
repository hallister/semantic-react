/* global sinon */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { MenuItem } from '../menuitem';
import { Item } from '../../item/item';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    active: true,
    color: 'green',
    value: 'test'
};

describe('MenuItem', () => {
    it('Should render item', () => {
        let wrapper = shallow(<MenuItem />);
        expect(wrapper).to.have.descendants(Item);
    });
    
    it('Should pass custom component down to item', () => {
        let wrapper = shallow(<MenuItem component="a" />);
        expect(wrapper.find(Item)).to.have.prop('component', 'a');
    });
    
    it('Should add link property to item', () => {
        let wrapper = shallow(<MenuItem />);
        expect(wrapper.find(Item)).to.have.prop('link', true);
    });
    
    it('Could be active', () => {
        let wrapper = shallow(<MenuItem active/>);
        expect(wrapper.find(Item)).to.have.className('active');
    });
    
    it('Could be colored', () => {
        let wrapper = shallow(<MenuItem color="green"/>);
        expect(wrapper.find(Item)).to.have.className('green');
        expect(wrapper.find(Item)).to.have.not.className('color');
    });
    
    it('Could contain value as data variable', () => {
        let wrapper = shallow(<MenuItem value="test"/>);
        expect(wrapper.find(Item)).to.have.data('value', 'test');
        wrapper = shallow(<MenuItem value={5}/>);
        expect(wrapper.find(Item)).to.have.data('value', 5);
    });
    
    itShouldConsumeOwnAndPassCustomProps(MenuItem, consumedProps);
});
