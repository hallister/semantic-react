/* eslint-env node, mocha */
/* global sinon */
import React from 'react';
import { Image } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    aligned: 'top',
    avatar: true,
    bordered: true,
    centered: true,
    className: 'testClass',
    component: 'div',
    content: true,
    defaultClasses: true,
    disabled: true,
    fluid: true,
    floated: 'right',
    src: 'test.png',
    shape: 'circular',
    spaced: 'right',
    size: 'small',
    visible: 'hidden'
};

describe('Image', () => {

    it('should expect a src', () => {
        sinon.test(function() {
            let spy = sinon.stub(console, 'error');
            shallow(<Image />);
            expect(spy).to.have.been.called;
            spy.restore();
        });
    });

    describe('should render in the DOM', () => {
        it('renders as <img>', () => {
            let wrapper = shallow(<Image src="test.png" />);
            expect(wrapper).to.have.className('ui image');
            expect(wrapper).to.have.tagName('img');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Image component="div"
                                         src="test.png" />);
            expect(wrapper).to.have.tagName('div');
        });
    });

    describe('should float', () => {
        it('should float right', () => {
            let wrapper = shallow(<Image floated="right"
                                         src="test.png" />);
            expect(wrapper).to.have.className('right floated');
        });

        it('should float left', () => {
            let wrapper = shallow(<Image floated="left"
                                         src="test.png" />);
            expect(wrapper).to.have.className('left floated');
        });
    });

    describe('should be visible or hidden', () => {
        it('should be visible when visible=visible', () => {
            let wrapper = shallow(<Image src="test.png"
                                         visible="visible"/>);
            expect(wrapper).to.have.className('visible');
        });

        it('should be visible when visible=true', () => {
            let wrapper = shallow(<Image src="test.png"
                                         visible/>);
            expect(wrapper).to.have.className('visible');
        });

        it('should be hidden when visible=hidden', () => {
            let wrapper = shallow(<Image src="test.png"
                                         visible="hidden"/>);
            expect(wrapper).to.have.not.className('visible');
        });

        it('should be hidden when visible=false', () => {
            let wrapper = shallow(<Image src="test.png"
                                         visible={false}/>);
            expect(wrapper).to.have.not.className('visible');
        });
    });

    describe('should allow a shape', () => {
        it('should rotate clockwise', () => {
            let wrapper = shallow(<Image shape="circular"
                                         src="test.png" />);
            expect(wrapper).to.have.className('circular');
        });

        it('should rotate counterclockwise', () => {
            let wrapper = shallow(<Image shape="rounded"
                                         src="test.png" />);
            expect(wrapper).to.have.className('rounded');
        });
    });

    it('should have content', () => {
        // console.log('Not currently functioning');
    });

    it('should appear disabled', () => {
        let wrapper = shallow(<Image disabled
                                     src="test.png" />);
        expect(wrapper).to.have.className('disabled');
    });

    it('should be an avatar', () => {
        let wrapper = shallow(<Image avatar
                                     src="test.png" />);
        expect(wrapper).to.have.className('avatar');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Image size="small"
                                     src="test.png" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    describe('should support spacing', () => {
        it('should be left spaced', () => {
            let wrapper = shallow(<Image spaced="left"
                                         src="test.png" />);
            expect(wrapper).to.have.className('left spaced');
        });

        it('should be right spaced', () => {
            let wrapper = shallow(<Image spaced="right"
                                         src="test.png" />);
            expect(wrapper).to.have.className('right spaced');
        });
    });

    describe('should be alignable', () => {
        it('should be aligned to top', () => {
            let wrapper = shallow(<Image aligned="top"
                                         src="test.png" />);
            expect(wrapper).to.have.className('top aligned');
        });

        it('should be aligned to the middle', () => {
            let wrapper = shallow(<Image aligned="middle"
                                         src="test.png" />);
            expect(wrapper).to.have.className('middle aligned');
        });

        it('should be aligned to the bottom', () => {
            let wrapper = shallow(<Image aligned="bottom"
                                         src="test.png" />);
            expect(wrapper).to.have.className('bottom aligned');
        });
    });

    it('should have fluid filling', () => {
        let wrapper = shallow(<Image fluid
                                     src="test.png" />);
        expect(wrapper).to.have.className('fluid');
    });

    it('should appear centered', () => {
        let wrapper = shallow(<Image centered
                                     src="test.png" />);
        expect(wrapper).to.have.className('centered');
    });

    it('should appear bordered', () => {
        let wrapper = shallow(<Image bordered
                                     src="test.png" />);
        expect(wrapper).to.have.className('bordered');
    });

    itShouldConsumeOwnAndPassCustomProps(Image, consumedProps);

});
