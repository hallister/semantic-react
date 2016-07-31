import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Breadcrumb from '../breadcrumb';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    size: 'big'
};

describe('collections/breadcrumb', () => {
    it('should be rendered in DOM', () => {
        const wrapper = shallow(<Breadcrumb/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui breadcrumb');
    });

    it('can be rendered as custom component', () => {
        const wrapper = shallow(<Breadcrumb component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui breadcrumb');
    });

    it('can have size', () => {
        const wrapper = shallow(<Breadcrumb size="big"/>);
        expect(wrapper).to.have.className('ui big breadcrumb');
        expect(wrapper).to.have.not.className('size');
    });

    itShouldConsumeOwnAndPassCustomProps(Breadcrumb, consumedProps);
});
