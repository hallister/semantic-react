/* eslint-env node, mocha */
/* global sinon */
import React from 'react';
import sinon from 'sinon';
import { Image } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    aligned: 'top',
    avatar: true,
    bordered: true,
    centered: true,
    component: 'div',
    defaultClasses: true,
    fluid: true,
    floated: 'right',
    shape: 'circular',
    spaced: 'right',
    state: 'disabled',
    size: 'small'
};

describe('Image', () => {

    describe('should render in the DOM', () => {
        it('renders as <img> by default', () => {
            let wrapper = shallow(<Image src="test.png" />);
            expect(wrapper).to.have.className('ui image');
            expect(wrapper).to.have.tagName('img');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Image component="svg"
                                         src="test.png" />);
            expect(wrapper).to.have.tagName('svg');
        });
        
        describe('Could be wrapped', () => {
            it('Wraps under <div> by default', () => {
                let wrapper = shallow(<Image src="test.png" wrapComponent/>);
                expect(wrapper).to.have.tagName('div');
                expect(wrapper).to.have.className('ui image');
                expect(wrapper.children()).to.have.tagName('img');
                expect(wrapper.children()).to.have.not.className('ui image');
            });
            
            it('Could specify component to wrap on', () => {
                let wrapper = shallow(<Image src="test.png" wrapComponent="a"/>);
                expect(wrapper).to.have.tagName('a');
                expect(wrapper).to.have.className('ui image');
                expect(wrapper.children()).to.have.tagName('img');
                expect(wrapper.children()).to.have.not.className('ui image');
            });
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
        it('should be visible when state=visible', () => {
            let wrapper = shallow(<Image src="test.png"
                                         state="visible"/>);
            expect(wrapper).to.have.className('visible');
        });

        it('should be hidden when state=hidden', () => {
            let wrapper = shallow(<Image src="test.png"
                                         state="hidden"/>);
            expect(wrapper).to.have.not.className('visible');
            expect(wrapper).to.have.className('hidden');
        });
        
        it('could be disabled when state=disabled', () => {
            let wrapper = shallow(<Image src="test.png"
                                         state="disabled"/>);
            expect(wrapper).to.have.className('disabled');
            
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
    
    describe('It should force wrap image to <div> for specific contexts', () => {
        it('should wrap when has isCommentsChild in context', () => {
            let wrapper = shallow(<Image bordered src="test.png" />, { context: { isCommentsChild: true } });
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('ui image');
            expect(wrapper.children()).to.have.tagName('img');
        });
        
        it('should wrap when has isItemsChild in context', () => {
            let wrapper = shallow(<Image bordered src="test.png" />, { context: { isItemsChild: true } });
            expect(wrapper).to.have.tagName('div');
            expect(wrapper.children()).to.have.tagName('img');
        });
    });
    
    describe('When child of group of Items', () => {
        it('shouldn\'t add ui class to image', () => {
            let wrapper = shallow(<Image bordered src="test.png" />, { context: { isItemsChild: true } });
            expect(wrapper).to.have.not.className('ui');
            expect(wrapper).to.have.className('image');
        });
        
        it('should add ui class if image has size prop', () => {
            let wrapper = shallow(<Image bordered src="test.png" size="small"/>, { context: { isItemsChild: true } });
            expect(wrapper).to.have.className('ui image');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(Image, consumedProps);

});
