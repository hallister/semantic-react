import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Dimmable from '../dimmable';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    dimmed: true,
    blurring: true
};

describe('Dimmable', () => {
    it('Should render', () => {
        let wrapper = shallow(<Dimmable />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('dimmable');
    });
    
    it('Could be used with custom component', () => {
        let wrapper = shallow(<Dimmable component="h1" />);
        expect(wrapper).to.have.tagName('h1');
    });
    
    it('Could be dimmed', () => {
        let wrapper = shallow(<Dimmable dimmed />);
        expect(wrapper).to.have.className('dimmed');
    });
    
    it('Could be blurried', () => {
        let wrapper = shallow(<Dimmable blurring />);
        expect(wrapper).to.have.className('blurring');
    });
    
    itShouldConsumeOwnAndPassCustomProps(Dimmable, consumedProps);
});