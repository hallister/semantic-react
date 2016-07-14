import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Menu from '../../../views/menu/menu';
import TabMenu from '../tabmenu';

describe('modules/tab/tabmenu', () => {
    it('should render menu', () => {
        const wrapper = shallow(<TabMenu/>);
        expect(wrapper.is(Menu)).to.be.true;
    });

    it('should add attached=top prop', () => {
        const wrapper = shallow(<TabMenu/>);
        expect(wrapper.find(Menu)).to.have.prop('attached', 'top');
    });

    it('should add tabular class name', () => {
        const wrapper = shallow(<TabMenu/>);
        expect(wrapper.find(Menu)).to.have.className('tabular');
    });

    it('should pass props to menu', () => {
        const wrapper = shallow(<TabMenu vertical/>);
        expect(wrapper.find(Menu)).to.have.prop('vertical', true);
    });
});
