/* eslint-env node, mocha */
/* global sinon */
import React from 'react';
import { Icon } from '../../../elements';
import { Rating } from '../../../modules';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';


let consumedProps = {
    component: 'div',
    defaultClasses: true,
    heart: true,
    max: 5,
    size: 'small',
    star: true,
    value: 5
};

describe('Rating', () => {
    describe('should render in the DOM', () => {
        it('renders as rating', () => {
            let wrapper = shallow(<Rating />);

            expect(wrapper).to.have.className('ui rating');
            expect(wrapper).to.have.tagName('div');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Rating component="span"/>);
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('has a heart mode', () => {
        let wrapper = shallow(<Rating heart />);
        expect(wrapper).to.have.className('heart');
    });

    it('has a star mode', () => {
        let wrapper = shallow(<Rating star />);
        expect(wrapper).to.have.className('star');
    });

    it('can have a maximum value defined', () => {
        let wrapper = shallow(<Rating max={3} />);
        expect(wrapper).to.have.exactly(3).descendants(Icon);
    });

    it('can have a value of zero', () => {
        let wrapper = shallow(<Rating value={0} />);
        expect(wrapper).to.have.not.descendants('.active');
    });

    it('can have a value set', () => {
        let wrapper = shallow(<Rating value={1} />);
        expect(wrapper).to.have.exactly(1).descendants('.active');
    });

    it('does not let value override max', () => {
        let wrapper = shallow(<Rating max={3}
                                      value={4} />);
        expect(wrapper).to.have.exactly(3).descendants('.active');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Rating size="small" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');

    });

    itShouldConsumeOwnAndPassCustomProps(Rating, consumedProps);
});
