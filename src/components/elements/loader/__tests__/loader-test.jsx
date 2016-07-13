import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Loader from '../loader';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    centered: true,
    inline: true,
    inverted: true,
    size: 'small',
    state: 'active',
    text: true
};

describe('elements/loader', () => {
    it('should be rendered in dom', () => {
        const wrapper = shallow(<Loader/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui loader');
    });

    it('could be rendered as custom component', () => {
        const wrapper = shallow(<Loader component="a"/>);
        expect(wrapper).to.have.tagName('a');
    });

    it('could be centered inline', () => {
        const wrapper = shallow(<Loader centered/>);
        expect(wrapper).to.have.className('centered inline');
    });

    it('could be inline', () => {
        const wrapper = shallow(<Loader inline/>);
        expect(wrapper).to.have.className('inline');
    });

    it('could be inverted', () => {
        const wrapper = shallow(<Loader inverted/>);
        expect(wrapper).to.have.className('inverted');
    });

    describe('Could have state', () => {
        it('active', () => {
            const wrapper = shallow(<Loader state="active"/>);
            expect(wrapper).to.have.className('active');
            expect(wrapper).to.have.not.className('state');
        });
        it('indeterminate', () => {
            const wrapper = shallow(<Loader state="indeterminate"/>);
            expect(wrapper).to.have.className('indeterminate');
            expect(wrapper).to.have.not.className('state');
        });
        it('disabled', () => {
            const wrapper = shallow(<Loader state="disabled"/>);
            expect(wrapper).to.have.className('disabled');
            expect(wrapper).to.have.not.className('state');
        });
    });

    it('Could be text loader', () => {
        const wrapper = shallow(<Loader text>Text</Loader>);
        expect(wrapper).to.have.className('text');
    });

    itShouldConsumeOwnAndPassCustomProps(Loader, consumedProps);
});
