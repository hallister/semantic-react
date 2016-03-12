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
    disabled: true,

    fitted: true,
    flipped: 'horizontally',
    inverted: true,
    left: true,
    link: true,
    loading: true,
    right: true,
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

    describe('should align', () => {
        it('should align left', () => {
            let wrapper = shallow(<Icon left
                                        name="cloud"/>);
            expect(wrapper).to.have.className('left');
        });

        it('should align right', () => {
            let wrapper = shallow(<Icon name="cloud"
                                        right/>);
            expect(wrapper).to.have.className('right');
        });
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Icon inverted
                                    name="cloud" />);
        expect(wrapper).to.have.className('inverted');
    });

    it('should appear disabled', () => {
        let wrapper = shallow(<Icon disabled
                                    name="cloud" />);
        expect(wrapper).to.have.className('disabled');
    });

    it('should appear to be loading', () => {
        let wrapper = shallow(<Icon loading
                                    name="cloud" />);
        expect(wrapper).to.have.className('loading');
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
