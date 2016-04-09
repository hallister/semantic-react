/* eslint-env node, mocha */
import React from 'react';
import { Icon } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    bordered: true,

    circular: true,
    color: 'red',
    component: 'i',
    defaultClasses: true,
    fitted: true,
    flipped: 'horizontally',
    inverted: true,
    link: true,
    state: 'loading',
    rotated: 'clockwise',
    size: 'small'
};

describe('Icon', () => {
    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            let wrapper = shallow(<Icon name="cloud" />);
            expect(wrapper).to.have.className('icon');
            expect(wrapper).to.have.tagName('i');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Icon component="span"
                                        name="cloud" />);
            expect(wrapper).to.have.tagName('span');
        });
    });

    describe('should flip', () => {
        it('should flip horizontally', () => {
            let wrapper = shallow(<Icon flipped="horizontally"
                                        name="cloud" />);
            expect(wrapper).to.have.className('horizontally flipped');
        });

        it('should flip vertically', () => {
            let wrapper = shallow(<Icon flipped="vertically"
                                        name="cloud" />);
            expect(wrapper).to.have.className('vertically flipped');
        });
    });

    describe('should rotate', () => {
        it('should rotate clockwise', () => {
            let wrapper = shallow(<Icon name="cloud"
                                        rotated="clockwise"/>);
            expect(wrapper).to.have.className('clockwise rotated');
        });

        it('should rotate counterclockwise', () => {
            let wrapper = shallow(<Icon name="cloud"
                                        rotated="counterclockwise"/>);
            expect(wrapper).to.have.className('counterclockwise rotated');
        });
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Icon inverted
                                    name="cloud" />);
        expect(wrapper).to.have.className('inverted');
    });
    
    describe('could have state', () => {
        it('could be disabled', () => {
            let wrapper = shallow(<Icon state="disabled"
                                        name="cloud" />);
            expect(wrapper).to.have.className('disabled');
            expect(wrapper).to.have.not.className('state');
        });
        
        it('could be loading', () => {
            let wrapper = shallow(<Icon state="loading"
                                        name="cloud" />);
            expect(wrapper).to.have.not.className('state');
        });
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Icon name="cloud"
                                    size="small" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    it('should support colors', () => {
        let wrapper = shallow(<Icon color="yellow"
                                    name="cloud" />);
        expect(wrapper).to.have.className('yellow');
        expect(wrapper).to.have.not.className('color');
    });

    describe('should be a link', () => {
        it('should be add the link via the link property', () => {
            let wrapper = shallow(<Icon link
                                        name="cloud" />);
            expect(wrapper).to.have.className('link');
        });

        it('should be add the link via the onClick property', () => {
            let wrapper = shallow(<Icon name="cloud"
                                        onClick={() => {}}/>);
            expect(wrapper).to.have.className('link');
        });
    });

    it('should have fitted spacing', () => {
        let wrapper = shallow(<Icon fitted
                                    name="cloud" />);
        expect(wrapper).to.have.className('fitted');
    });

    it('should appear circular', () => {
        let wrapper = shallow(<Icon circular
                                    name="cloud" />);
        expect(wrapper).to.have.className('circular');
    });

    it('should appear bordered', () => {
        let wrapper = shallow(<Icon bordered
                                    name="cloud" />);
        expect(wrapper).to.have.className('bordered');
    });

    itShouldConsumeOwnAndPassCustomProps(Icon, consumedProps);

});
