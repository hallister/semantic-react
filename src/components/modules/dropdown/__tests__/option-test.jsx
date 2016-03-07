/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Option from '../option';
import { MenuItem } from '../../../views';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    value: 5
};

describe('Option', () => {
    it('Should render self as menu item', () => {
        let wrapper = shallow(<Option value="test"/>);
        expect(wrapper.type()).to.be.equal(MenuItem);
    });

    it('Should pass value as menuValue', () => {
        let wrapper = shallow(<Option value="test"/>);
        expect(wrapper.find(MenuItem)).to.have.prop('menuValue', 'test');
    });

    it('Should add selected class name if option is active', () => {
        let wrapper = shallow(<Option active value="test"/>);
        expect(wrapper.find(MenuItem)).to.have.className('selected');
    });
    
    itShouldConsumeOwnAndPassCustomProps(Option, consumedProps);
});
