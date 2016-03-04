/* eslint-env node, mocha */

import React from 'react';
import { Header } from '../../../elements';
import { Menu } from '../../../views';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';


let consumedProps = {
    aligned: 'right',
    attached: true,
    color: 'red',
    component: 'div',
    defaultClasses: true,
    disabled: true,
    divider: true,
    emphasis: 'block',
    floated: 'right',
    horizontal: true,
    inverted: true,
    item: true,
    size: 'small'
};

describe('Header', () => {
    describe('should render in the DOM', () => {

        it('renders as <div>', () => {
            let wrapper = shallow(<Header />);
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('ui header');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Header component="h1" />);
            expect(wrapper).to.have.tagName('h1');
        });
    });

    describe('should allow emphasis', () => {
        it('has a dividing emphasis', () => {
            let wrapper = shallow(<Header emphasis="dividing" />);
            expect(wrapper).to.have.className('dividing');
        });

        it('has a block emphasis', () => {
            let wrapper = shallow(<Header emphasis="block" />);
            expect(wrapper).to.have.className('block');
        });
    });

    describe('should float', () => {
        it('floats right', () => {
            let wrapper = shallow(<Header floated="right" />);
            expect(wrapper).to.have.className('right floated');
        });

        it('floats left', () => {
            let wrapper = shallow(<Header floated="left" />);
            expect(wrapper).to.have.className('left floated');
        });
    });

    describe('should attach to other objects', () => {
        it('can attach to the top of an attachable element', () => {
            let wrapper = shallow(<Header attached="top" />);
            expect(wrapper).to.have.className('top attached');
            expect(wrapper).to.have.tagName('div');
        });

        it('can attach to the bottom of an attachable element', () => {
            let wrapper = shallow(<Header attached="bottom" />);
            expect(wrapper).to.have.className('bottom attached');
            expect(wrapper).to.have.tagName('div');
        });
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Header inverted />);
        expect(wrapper).to.have.className('inverted');
    });

    it('should appear disabled', () => {
        let wrapper = shallow(<Header disabled />);
        expect(wrapper).to.have.className('disabled');
    });

    it('should be a dividing header', () => {
        let wrapper = shallow(<Header divider />);
        expect(wrapper).to.have.className('divider');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Header size="small" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    it('should support colors', () => {
        let wrapper = shallow(<Header color="yellow" />);
        expect(wrapper).to.have.className('yellow');
        expect(wrapper).to.have.not.className('color');
    });

    it('should be horizontal', () => {
        let wrapper = shallow(<Header horizontal />);
        expect(wrapper).to.have.className('horizontal');
    });

    it('should be an item when is child of Menu', () => {
        let wrapper = shallow(<Menu><Header /></Menu>);
        expect(wrapper.find(Header)).to.have.prop('item', true);
    });

    itShouldConsumeOwnAndPassCustomProps(Header, consumedProps);
});
