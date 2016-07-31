import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Divider from '../divider';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    icon: 'right chevron'
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

    it('can be icon divider', () => {
        const wrapper = shallow(<Divider icon="right chevron"/>);
        expect(wrapper).to.have.className('right chevron icon divider');
    });

    itShouldConsumeOwnAndPassCustomProps(Divider, consumedProps);
});
