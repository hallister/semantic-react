/* eslint-env node, mocha */

import React from 'react';
import { Divider } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';


let consumedProps = {
    aligned: 'horizontal',
    clearing: true,
    component: 'div',
    defaultClasses: true,
    hidden: true,
    inverted: true,
    spacing: 'fitted'
};

describe('Divider', () => {
    describe('should render in the DOM', () => {

        it('renders as <div>', () => {
            let wrapper = shallow(<Divider />);
            expect(wrapper).to.have.className('ui divider');
            expect(wrapper).to.have.tagName('div');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Divider component="span"/>);
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('should clear floats', () => {
        let wrapper = shallow(<Divider clearing />);
        expect(wrapper).to.have.className('clearing');
    });

    it('should appear hidden', () => {
        let wrapper = shallow(<Divider hidden />);
        expect(wrapper).to.have.className('hidden');
    });

    it('should be visible on a dark background', () => {
        let wrapper = shallow(<Divider inverted />);
        expect(wrapper).to.have.className('inverted');
    });

    describe('should allow padding to be set', () => {
        it('should have minimal padding', () => {
            let wrapper = shallow(<Divider spacing="fitted" />);
            expect(wrapper).to.have.className('fitted');
        });

        it('should have maximal padding', () => {
            let wrapper = shallow(<Divider spacing="padded" />);
            expect(wrapper).to.have.className('section');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(Divider, consumedProps);
});
