import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Segment from '../../../elements/segment/segment';
import Tab from '../tab';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    active: true,
    loading: true,
    value: 1
};

describe('modules/tab/tab', () => {
    it('should render bottom attached segment', () => {
        const wrapper = shallow(<Tab value={1}/>);
        expect(wrapper.is(Segment)).to.be.true;
        expect(wrapper).to.have.prop('attached', 'bottom');
    });

    it('should have tab class name', () => {
        const wrapper = shallow(<Tab value={1}/>);
        expect(wrapper).to.have.className('tab');
    });

    it('can be active', () => {
        const wrapper = shallow(<Tab value={1} active/>);
        expect(wrapper).to.have.className('active');
    });

    it('can be loading only when active', () => {
        let wrapper = shallow(<Tab value={1} loading/>);
        expect(wrapper).to.have.not.className('loading');
        wrapper = shallow(<Tab value={1} loading active/>);
        expect(wrapper).to.have.className('loading');
    });

    it('should pass other props to segment', () => {
        const wrapper = shallow(<Tab value={1} basic/>);
        expect(wrapper.find(Segment)).to.have.prop('basic', true);
    });

    itShouldConsumeOwnAndPassCustomProps(Tab, consumedProps);
});
