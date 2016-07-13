import React from 'react';
import Image from '../image';
import Label from '../../label/label';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    aligned: 'top',
    avatar: true,
    bordered: true,
    centered: true,
    component: 'img',
    defaultClasses: true,
    fluid: true,
    floated: 'right',
    shape: 'circular',
    spaced: 'right',
    state: 'disabled',
    size: 'small',
    wrapComponent: true
};

describe('Image', () => {

    describe('should render in the DOM', () => {
        it('renders as <img> by default', () => {
            const wrapper = shallow(<Image src="test.png" />);
            expect(wrapper).to.have.className('ui image');
            expect(wrapper).to.have.tagName('img');
        });

        it('renders as a custom HTML element', () => {
            const wrapper = shallow(<Image component="svg"
                                         src="test.png" />);
            expect(wrapper).to.have.tagName('svg');
        });
        
        describe('Could be wrapped', () => {
            it('Wraps under <div> by default', () => {
                const wrapper = shallow(<Image src="test.png" wrapComponent/>);
                expect(wrapper).to.have.tagName('div');
                expect(wrapper).to.have.className('ui image');
                expect(wrapper.children()).to.have.tagName('img');
                expect(wrapper.children()).to.have.not.className('ui image');
            });
            
            it('Could specify component to wrap on', () => {
                const wrapper = shallow(<Image src="test.png" wrapComponent="a"/>);
                expect(wrapper).to.have.tagName('a');
                expect(wrapper).to.have.className('ui image');
                expect(wrapper.children()).to.have.tagName('img');
                expect(wrapper.children()).to.have.not.className('ui image');
            });
        });
    });

    describe('should float', () => {
        it('should float right', () => {
            const wrapper = shallow(<Image floated="right"
                                         src="test.png" />);
            expect(wrapper).to.have.className('right floated');
        });

        it('should float left', () => {
            const wrapper = shallow(<Image floated="left"
                                         src="test.png" />);
            expect(wrapper).to.have.className('left floated');
        });
    });

    describe('should be visible or hidden', () => {
        it('should be visible when state=visible', () => {
            const wrapper = shallow(<Image src="test.png"
                                         state="visible"/>);
            expect(wrapper).to.have.className('visible');
        });

        it('should be hidden when state=hidden', () => {
            const wrapper = shallow(<Image src="test.png"
                                         state="hidden"/>);
            expect(wrapper).to.have.not.className('visible');
            expect(wrapper).to.have.className('hidden');
        });
        
        it('could be disabled when state=disabled', () => {
            const wrapper = shallow(<Image src="test.png"
                                         state="disabled"/>);
            expect(wrapper).to.have.className('disabled');
            
        });
    });

    describe('should allow a shape', () => {
        it('should rotate clockwise', () => {
            const wrapper = shallow(<Image shape="circular"
                                         src="test.png" />);
            expect(wrapper).to.have.className('circular');
        });

        it('should rotate counterclockwise', () => {
            const wrapper = shallow(<Image shape="rounded"
                                         src="test.png" />);
            expect(wrapper).to.have.className('rounded');
        });
    });

    it('should be an avatar', () => {
        const wrapper = shallow(<Image avatar
                                     src="test.png" />);
        expect(wrapper).to.have.className('avatar');
    });

    it('should have various sizes', () => {
        const wrapper = shallow(<Image size="small"
                                     src="test.png" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    describe('should support spacing', () => {
        it('should be left spaced', () => {
            const wrapper = shallow(<Image spaced="left"
                                         src="test.png" />);
            expect(wrapper).to.have.className('left spaced');
        });

        it('should be right spaced', () => {
            const wrapper = shallow(<Image spaced="right"
                                         src="test.png" />);
            expect(wrapper).to.have.className('right spaced');
        });
    });

    describe('should be alignable', () => {
        it('should be aligned to top', () => {
            const wrapper = shallow(<Image aligned="top"
                                         src="test.png" />);
            expect(wrapper).to.have.className('top aligned');
        });

        it('should be aligned to the middle', () => {
            const wrapper = shallow(<Image aligned="middle"
                                         src="test.png" />);
            expect(wrapper).to.have.className('middle aligned');
        });

        it('should be aligned to the bottom', () => {
            const wrapper = shallow(<Image aligned="bottom"
                                         src="test.png" />);
            expect(wrapper).to.have.className('bottom aligned');
        });
    });

    it('should have fluid filling', () => {
        const wrapper = shallow(<Image fluid
                                     src="test.png" />);
        expect(wrapper).to.have.className('fluid');
    });

    it('should appear centered', () => {
        const wrapper = shallow(<Image centered
                                     src="test.png" />);
        expect(wrapper).to.have.className('centered');
    });

    it('should appear bordered', () => {
        const wrapper = shallow(<Image bordered
                                     src="test.png" />);
        expect(wrapper).to.have.className('bordered');
    });
    
    describe('It should force wrap image to <div> for specific contexts', () => {
        it('should wrap when has isCommentsChild in context', () => {
            const wrapper = shallow(<Image bordered src="test.png" />, { context: { isCommentsChild: true } });
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('ui image');
            expect(wrapper.children()).to.have.tagName('img');
        });
        
        it('should wrap when has isItemsChild in context', () => {
            const wrapper = shallow(<Image bordered src="test.png" />, { context: { isItemsChild: true } });
            expect(wrapper).to.have.tagName('div');
            expect(wrapper.children()).to.have.tagName('img');
        });

        it('Should wrap when there are any child elements', () => {
            const wrapper = shallow(<Image src="test.png"><Label/></Image>);
            expect(wrapper).to.have.tagName('div');
            expect(wrapper.childAt(0).is(Label)).to.be.true;
            expect(wrapper.childAt(1)).to.have.tagName('img');
        });
    });
    
    describe('When child of group of Items', () => {
        it('shouldn\'t add ui class to image', () => {
            const wrapper = shallow(<Image bordered src="test.png" />, { context: { isItemsChild: true } });
            expect(wrapper).to.have.not.className('ui');
            expect(wrapper).to.have.className('image');
        });
        
        it('should add ui class if image has size prop', () => {
            const wrapper = shallow(<Image bordered src="test.png" size="small"/>, { context: { isItemsChild: true } });
            expect(wrapper).to.have.className('ui image');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(Image, consumedProps);

});
