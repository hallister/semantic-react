/* eslint-env node, mocha */
import React from 'react';
import { Images, Image } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let children = [
    <Image
        key="image1"
        src="test1.png" />,
    <Image
        key="image2"
        src="test2.png" />
];


let consumedProps = {
    avatar: true,
    bordered: true,
    component: 'div',
    defaultClasses: true,
    disabled: true,
    shape: 'circular',
    size: 'small',
    visible: 'hidden'
};

describe('Images', () => {
    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            let wrapper = shallow(<Images>{children}</Images>)
            expect(wrapper).to.have.className('ui images');
            expect(wrapper).to.have.tagName('div');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Images component="span">{children}</Images>)
            expect(wrapper).to.have.tagName('span');
        });
    });

    describe('should be visible or hidden', () => {
        it('should be visible when visible=visible', () => {
            let wrapper = shallow(<Images visible="visible">{children}</Images>)
            expect(wrapper).to.have.not.className('hidden')
        });

        it('should be visible when visible=true', () => {
            let wrapper = shallow(<Images visible>{children}</Images>)
            expect(wrapper).to.have.not.className('hidden')
        });

        it('should be hidden when visible=hidden', () => {
            let wrapper = shallow(<Images visible="hidden">{children}</Images>)
            expect(wrapper).to.have.className('hidden')
        });

        it('should be hidden when visible=false', () => {
            let wrapper = shallow(<Images visible={false}>{children}</Images>)
            expect(wrapper).to.have.className('hidden')
        });
    });

    describe('should allow a shape', () => {
        it('should rotate clockwise', () => {
            let wrapper = shallow(<Images shape="circular">{children}</Images>)
            expect(wrapper).to.have.className('circular')
        });

        it('should rotate counterclockwise', () => {
            let wrapper = shallow(<Images shape="rounded">{children}</Images>)
            expect(wrapper).to.have.className('rounded')
        });
    });

    it('should appear disabled', () => {
        let wrapper = shallow(<Images disabled>{children}</Images>)
        expect(wrapper).to.have.className('disabled')
    });

    it('should be an avatar', () => {
        let wrapper = shallow(<Images avatar>{children}</Images>)
        expect(wrapper).to.have.className('avatar')
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Images size="small">{children}</Images>)
        expect(wrapper).to.have.className('small')
        expect(wrapper).to.have.not.className('size')
    });

    it('should appear bordered', () => {
        let wrapper = shallow(<Images bordered>{children}</Images>)
        expect(wrapper).to.have.className('bordered')
    });

    itShouldConsumeOwnAndPassCustomProps(Images, consumedProps);
});
