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
    component: 'div',
    defaultClasses: true,
    size: 'small'
};

describe('Images', () => {
    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            let wrapper = shallow(<Images>{children}</Images>);
            expect(wrapper).to.have.className('ui images');
            expect(wrapper).to.have.tagName('div');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Images component="span">{children}</Images>);
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Images size="small">{children}</Images>);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    itShouldConsumeOwnAndPassCustomProps(Images, consumedProps);
});
