/* eslint-env node, mocha */
import React from 'react';
import { Icons, Icon } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let children = [
    <Icon
        key="1"
        name="cloud" />,
    <Icon
        key="2"
        name="cloud" />
];

let consumedProps = {
    component: 'i',
    defaultClasses: true,
    size: 'small'
};

describe('Icons', () => {

    describe('should render in the DOM', () => {
        it('renders as <i>', () => {
            let wrapper = shallow(<Icons>{children}</Icons>);
            expect(wrapper).to.have.className('icons');
            expect(wrapper).to.have.tagName('i');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Icons component="span">{children}</Icons>);
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Icons size="small">{children}</Icons>);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    itShouldConsumeOwnAndPassCustomProps(Icons, consumedProps);

});
