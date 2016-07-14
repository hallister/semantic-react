import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Message from '../message';
import Icon from '../../../elements/icon/icon';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    attached: true,
    color: 'green',
    compact: true,
    floating: true,
    hidden: true,
    icon: true,
    size: 'big',
    emphasis: 'info',
    visible: true
};

describe('collections/message', () => {
    it('should be rendered in dom', () => {
        const wrapper = shallow(<Message />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui message');
    });

    it('could be rendered as custom component', () => {
        const wrapper = shallow(<Message component="a"/>);
        expect(wrapper).to.have.tagName('a');
    });

    describe('can be attached', () => {
        it('attached', () => {
            const wrapper = shallow(<Message attached/>);
            expect(wrapper).to.have.className('attached');
        });

        it('bottom', () => {
            const wrapper = shallow(<Message attached="bottom"/>);
            expect(wrapper).to.have.className('bottom attached');
        });

        it('top', () => {
            const wrapper = shallow(<Message attached="top"/>);
            expect(wrapper).to.have.className('top attached');
        });
    });

    it('can have a color', () => {
        const wrapper = shallow(<Message color="red"/>);
        expect(wrapper).to.have.className('red');
    });

    it('can be compact', () => {
        const wrapper = shallow(<Message compact/>);
        expect(wrapper).to.have.className('compact');
    });

    it('can be floating', () => {
        const wrapper = shallow(<Message floating/>);
        expect(wrapper).to.have.className('floating');
    });

    it('can be hidden', () => {
        const wrapper = shallow(<Message hidden/>);
        expect(wrapper).to.have.className('hidden');
    });

    describe('Can have icon', () => {
        it('sets icon class name if provided icon', () => {
            const wrapper = shallow(<Message icon/>);
            expect(wrapper).to.have.className('icon');
        });

        it('sets icon class if icon prop wasn\'t provided and has icon first child', () => {
            const wrapper = shallow(<Message><Icon name="test"/></Message>);
            expect(wrapper).to.have.className('icon');
        });

        it('doesnt set icon class if icon explicitly set to false even when has icon child', () => {
            const wrapper = shallow(<Message icon={false}><Icon name="test"/></Message>);
            expect(wrapper).to.have.not.className('icon');
        });
    });

    it('can have size', () => {
        const wrapper = shallow(<Message size="tiny"/>);
        expect(wrapper).to.have.className('tiny');
    });

    describe('can have emphasis', () => {
        it('success', () => {
            const wrapper = shallow(<Message emphasis="success"/>);
            expect(wrapper).to.have.className('success');
        });

        it('error', () => {
            const wrapper = shallow(<Message emphasis="error"/>);
            expect(wrapper).to.have.className('error');
        });

        it('info', () => {
            const wrapper = shallow(<Message emphasis="info"/>);
            expect(wrapper).to.have.className('info');
        });

        it('warning', () => {
            const wrapper = shallow(<Message emphasis="warning"/>);
            expect(wrapper).to.have.className('warning');
        });

        it('positive', () => {
            const wrapper = shallow(<Message emphasis="positive"/>);
            expect(wrapper).to.have.className('positive');
        });

        it('negative', () => {
            const wrapper = shallow(<Message emphasis="negative"/>);
            expect(wrapper).to.have.className('negative');
        });
    });

    it('can be visible', () => {
        const wrapper = shallow(<Message visible/>);
        expect(wrapper).to.have.className('visible');
    });

    itShouldConsumeOwnAndPassCustomProps(Message, consumedProps);
});
