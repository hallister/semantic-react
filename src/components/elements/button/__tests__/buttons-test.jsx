/* eslint-env node, mocha */
import React from 'react';
import { Buttons, Button, IconButton } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let buttonsChildren = [
    <Button key="1">Button 1</Button>,
    <Button key="2">Button 2</Button>
];

let iconButtonsChildren = [
    <IconButton
        key="1"
        name="cloud" />,
    <IconButton
        key="2"
        name="arrow" />
];

let consumedProps = {
    attached: 'top',
    basic: true,
    color: 'red',
    compact: true,
    component: 'div',
    defaultClasses: true,
    equal: true,
    floated: 'right',
    inverted: true,
    size: 'small',
    vertical: true
};

describe('Buttons', () => {
    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            let wrapper = shallow(<Buttons>{buttonsChildren}</Buttons>);
            expect(wrapper).to.have.className('ui buttons');
            expect(wrapper).to.have.tagName('div');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Buttons component="span">{buttonsChildren}</Buttons>);
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('should position a group of buttons', () => {
        let wrapper = shallow(<Buttons>{buttonsChildren}</Buttons>);
        expect(wrapper).to.have.exactly(2).descendants(Button);
    });

    it('should position a group of buttons vertically', () => {
        let wrapper = shallow(<Buttons vertical>{buttonsChildren}</Buttons>);
        expect(wrapper).to.have.className('vertical');
        expect(wrapper).to.have.exactly(2).descendants(Button);
    });

    it('should position a group of icon buttons', () => {
        let wrapper = shallow(<Buttons vertical>{iconButtonsChildren}</Buttons>);
        expect(wrapper.find(IconButton).first()).to.have.prop('name', 'cloud');
        expect(wrapper.find(IconButton).last()).to.have.prop('name', 'arrow');
    });

    it('should position a group of buttons with equal widths', () => {
        let wrapper = shallow(<Buttons equal>{iconButtonsChildren}</Buttons>);
        expect(wrapper).to.have.className('two');
    });

    it('should force an equal width group with one child to be fluid', () => {
        let wrapper = shallow(<Buttons equal><Button /></Buttons>);
        expect(wrapper).to.have.className('fluid');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Buttons size="small">{buttonsChildren}</Buttons>);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');

    });

    itShouldConsumeOwnAndPassCustomProps(Buttons, consumedProps);
});
