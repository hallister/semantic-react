/* eslint-env node, mocha */
/* global sinon */
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

let badChildren = [
    <div>bad</div>
]

let consumedProps = {
    bordered: true,
    circular: true,
    color: 'red',
    component: 'i',
    defaultClasses: true,
    disabled: true,
    fitted: true,
    flipped: 'horizontally',
    inverted: true,
    link: true,
    loading: true,
    rotated: 'clockwise',
    size: 'small'
};

describe('Icons', () => {
    it('should disallow children that are not icons', () => {
        let spy = sinon.stub(console, 'error');
        shallow(<Icons>{badChildren}</Icons>);
        expect(spy).to.have.been.called;
        spy.restore();

    });

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

    describe('should flip', () => {

        it('should flip horizontally', () => {
            let wrapper = shallow(<Icons flipped="horizontally">{children}</Icons>);
            expect(wrapper).to.have.className('horizontally flipped');
        });

        it('should flip vertically', () => {
            let wrapper = shallow(<Icons flipped="vertically">{children}</Icons>);
            expect(wrapper).to.have.className('vertically flipped');
        });
    });

    describe('should rotate', () => {
        it('should rotate clockwise', () => {
            let wrapper = shallow(<Icons rotated="clockwise">{children}</Icons>);
            expect(wrapper).to.have.className('clockwise rotated');
        });

        it('should rotate counterclockwise', () => {
            let wrapper = shallow(<Icons rotated="counterclockwise">{children}</Icons>);
            expect(wrapper).to.have.className('counterclockwise rotated');
        });
    });

    describe('should align', () => {
        it('should align left', () => {
            let wrapper = shallow(<Icons left>{children}</Icons>);
            expect(wrapper).to.have.className('left');
        });

        it('should align right', () => {
            let wrapper = shallow(<Icons right>{children}</Icons>);
            expect(wrapper).to.have.className('right');
        });
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Icons inverted>{children}</Icons>);
        expect(wrapper).to.have.className('inverted');
    });

    it('should appear disabled', () => {
        let wrapper = shallow(<Icons disabled>{children}</Icons>);
        expect(wrapper).to.have.className('disabled');
    });

    it('should appear to be loading', () => {
        let wrapper = shallow(<Icons loading>{children}</Icons>);
        expect(wrapper).to.have.className('loading');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Icons size="small">{children}</Icons>);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    it('should support colors', () => {
        let wrapper = shallow(<Icons color="yellow">{children}</Icons>);
        expect(wrapper).to.have.className('yellow');
        expect(wrapper).to.have.not.className('color');
    });

    describe('should be a link', () => {
        it('should be add the link via the link property', () => {
            let wrapper = shallow(<Icons link>{children}</Icons>);
            expect(wrapper).to.have.className('link');
        });

        it('should be add the link via the onClick property', () => {
            let wrapper = shallow(<Icons onClick={() => {}}>{children}</Icons>);
            expect(wrapper).to.have.className('link');
        });
    });

    it('should have fitted spacing', () => {
        let wrapper = shallow(<Icons fitted>{children}</Icons>);
        expect(wrapper).to.have.className('fitted');
    });

    it('should appear circular', () => {
        let wrapper = shallow(<Icons circular>{children}</Icons>);
        expect(wrapper).to.have.className('circular');
    });

    it('should appear bordered', () => {
        let wrapper = shallow(<Icons bordered>{children}</Icons>);
        expect(wrapper).to.have.className('bordered');
    });

    itShouldConsumeOwnAndPassCustomProps(Icons, consumedProps);

});
