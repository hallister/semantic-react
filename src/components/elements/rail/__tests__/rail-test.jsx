import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Rail from '../rail';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'a',
    defaultClasses: true,
    attached: true,
    close: true,
    dividing: true,
    floated: 'left',
    internal: true,
    size: 'big'
};

describe('elements/rail', () => {
    it('should be rendered', () => {
        const wrapper = shallow(<Rail floated="left"/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui left rail');
    });

    it('should be rendered as custom component', () => {
        const wrapper = shallow(<Rail component="a" floated="left"/>);
        expect(wrapper).to.have.tagName('a');
    });

    describe('Should be floated', () => {
        it('left', () => {
            const wrapper = shallow(<Rail floated="left"/>);
            expect(wrapper).to.have.className('left');
        });

        it('right', () => {
            const wrapper = shallow(<Rail floated="right"/>);
            expect(wrapper).to.have.className('right');
        });
    });

    it('can be attached', () => {
        const wrapper = shallow(<Rail attached floated="left"/>);
        expect(wrapper).to.have.className('attached');
    })

    describe('Can be close', () => {
        it('close', () => {
            const wrapper = shallow(<Rail close attached="left"/>);
            expect(wrapper).to.have.className('close');
        });

        it('very close', () => {
            const wrapper = shallow(<Rail close="very" attached="left"/>);
            expect(wrapper).to.have.className('very close');
        });
    })

    it('can be dividing', () => {
        const wrapper = shallow(<Rail attached="left" dividing/>);
        expect(wrapper).to.have.className('dividing');
    });

    it('can be internal', () => {
        const wrapper = shallow(<Rail attached="left" internal/>);
        expect(wrapper).to.have.className('internal');
    });

    it('can vary in size', () => {
        const wrapper = shallow(<Rail attached="left" size="tiny"/>);
        expect(wrapper).to.have.className('tiny');
    });
    itShouldConsumeOwnAndPassCustomProps(Rail, consumedProps);
});
