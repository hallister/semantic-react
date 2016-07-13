/* eslint-env node, mocha */
import React from 'react';
import { Icon } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    aligned: 'middle',
    bordered: true,

    circular: true,
    color: 'red',
    component: 'i',
    defaultClasses: true,
    fitted: true,
    flipped: 'horizontally',
    floated: 'right',
    inverted: true,
    link: true,
    state: 'loading',
    rotated: 'clockwise',
    size: 'small'
};

describe('Icon', () => {
    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            const wrapper = shallow(<Icon name="cloud" />);
            expect(wrapper).to.have.className('icon');
            expect(wrapper).to.have.tagName('i');
        });

        it('renders as a custom HTML element', () => {
            const wrapper = shallow(<Icon component="span"
                                        name="cloud" />);
            expect(wrapper).to.have.tagName('span');
        });
    });

    describe('should flip', () => {
        it('should flip horizontally', () => {
            const wrapper = shallow(<Icon flipped="horizontally"
                                        name="cloud" />);
            expect(wrapper).to.have.className('horizontally flipped');
        });

        it('should flip vertically', () => {
            const wrapper = shallow(<Icon flipped="vertically"
                                        name="cloud" />);
            expect(wrapper).to.have.className('vertically flipped');
        });
    });

    describe('should rotate', () => {
        it('should rotate clockwise', () => {
            const wrapper = shallow(<Icon name="cloud"
                                        rotated="clockwise"/>);
            expect(wrapper).to.have.className('clockwise rotated');
        });

        it('should rotate counterclockwise', () => {
            const wrapper = shallow(<Icon name="cloud"
                                        rotated="counterclockwise"/>);
            expect(wrapper).to.have.className('counterclockwise rotated');
        });
    });

    it('should be noticable on dark backgrounds', () => {
        const wrapper = shallow(<Icon inverted
                                    name="cloud" />);
        expect(wrapper).to.have.className('inverted');
    });
    
    describe('could have state', () => {
        it('could be disabled', () => {
            const wrapper = shallow(<Icon state="disabled"
                                        name="cloud" />);
            expect(wrapper).to.have.className('disabled');
            expect(wrapper).to.have.not.className('state');
        });
        
        it('could be loading', () => {
            const wrapper = shallow(<Icon state="loading"
                                        name="cloud" />);
            expect(wrapper).to.have.not.className('state');
        });
    });

    it('should have various sizes', () => {
        const wrapper = shallow(<Icon name="cloud"
                                    size="small" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    it('should support colors', () => {
        const wrapper = shallow(<Icon color="yellow"
                                    name="cloud" />);
        expect(wrapper).to.have.className('yellow');
        expect(wrapper).to.have.not.className('color');
    });

    describe('should be a link', () => {
        it('should be add the link via the link property', () => {
            const wrapper = shallow(<Icon link
                                        name="cloud" />);
            expect(wrapper).to.have.className('link');
        });

        it('should be add the link via the onClick property', () => {
            const wrapper = shallow(<Icon name="cloud"
                                        onClick={() => {}}/>);
            expect(wrapper).to.have.className('link');
        });
    });

    it('should have fitted spacing', () => {
        const wrapper = shallow(<Icon fitted
                                    name="cloud" />);
        expect(wrapper).to.have.className('fitted');
    });

    it('should appear circular', () => {
        const wrapper = shallow(<Icon circular
                                    name="cloud" />);
        expect(wrapper).to.have.className('circular');
    });

    it('should appear bordered', () => {
        const wrapper = shallow(<Icon bordered
                                    name="cloud" />);
        expect(wrapper).to.have.className('bordered');
    });

    describe('Could be vertically aligned', () => {
        it('top', () => {
            const wrapper = shallow(<Icon aligned="top" name="test"/>);
            expect(wrapper).to.have.className('top aligned');
        });

        it('middle', () => {
            const wrapper = shallow(<Icon aligned="middle" name="test"/>);
            expect(wrapper).to.have.className('middle aligned');
        });

        it('bottom', () => {
            const wrapper = shallow(<Icon aligned="bottom" name="test"/>);
            expect(wrapper).to.have.className('bottom aligned');
        });
    });

    describe('Could be floated', () => {
        it('left', () => {
            const wrapper = shallow(<Icon floated="left"/>);
            expect(wrapper).to.have.className('left floated');
        });

        it('right', () => {
            const wrapper = shallow(<Icon floated="right"/>);
            expect(wrapper).to.have.className('right floated');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(Icon, consumedProps);

});
