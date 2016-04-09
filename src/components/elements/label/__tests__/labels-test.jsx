import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Labels from '../labels';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    circular: true,
    color: 'green',
    tag: true,
    size: 'big'
};

describe('Labels', () => {
    it('renders in dom as div by default', () => {
        let wrapper = shallow(<Labels />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui labels');
    });
    
    it('renders in dom as custom component', () => {
        let wrapper = shallow(<Labels component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui labels');
    });
    
    it('could be circular', () => {
        let wrapper = shallow(<Labels circular/>);
        expect(wrapper).to.have.className('circular');
    });
    
    it('could have color', () => {
        let wrapper = shallow(<Labels color="green"/>);
        expect(wrapper).to.have.className('green');
    });
    
    it('could have tag', () => {
        let wrapper = shallow(<Labels tag/>);
        expect(wrapper).to.have.className('tag');
    });
    
    it('could have size', () => {
        let wrapper = shallow(<Labels size="big"/>);
        expect(wrapper).to.have.className('big');
    });
    
    
    itShouldConsumeOwnAndPassCustomProps(Labels, consumedProps);
});
