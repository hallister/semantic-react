import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Section from '../section';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    active: true
};

describe('collections/breadcrumb/section', () => {
    it('should be rendered in DOM', () => {
        const wrapper = shallow(<Section />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('section');
        expect(wrapper).to.have.not.className('ui');
    });

    it('can be rendered as custom component', () => {
        const wrapper = shallow(<Section component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('section');
    });

    it('can be active', () => {
        const wrapper = shallow(<Section active/>);
        expect(wrapper).to.have.className('active section');
    });

    itShouldConsumeOwnAndPassCustomProps(Section, consumedProps);
});
