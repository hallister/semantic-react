import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Divider from '../divider';
import Icon from '../../../elements/icon/icon';

const consumedProps = {
    component: 'div',
    defaultClasses: true
};

describe('collections/breadcrumb/divider', () => {
    it('should be rendered in DOM', () => {
        const wrapper = shallow(<Divider />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('divider');
        expect(wrapper).to.have.not.className('ui');
    });

    it('can be rendered as custom component', () => {
        const wrapper = shallow(<Divider component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('divider');
    });

    it('Should render child content', () => {
        const wrapper = shallow(<Divider>/</Divider>);
        expect(wrapper.children()).to.have.text('/');
    });

    describe('When has icon child', () => {
        it('Should render divider icon instead divider', () => {
            const wrapper = shallow(<Divider component="a"><Icon name="right arrow"/></Divider>);
            expect(wrapper.is(Icon)).to.be.true;
            expect(wrapper).to.have.tagName('i');
            expect(wrapper).to.have.className('divider');
            expect(wrapper.shallow()).to.have.className('icon');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(Divider, consumedProps);
});
