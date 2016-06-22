import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Value from '../value';

describe('Value', () => {
    it('Should be rendered as <div> by default', () => {
        let wrapper = shallow(<Value />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('value');
    });

    it('Should be rendered as custom component', () => {
        let wrapper = shallow(<Value component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('value');
    });

    it('Could be text', () => {
        let wrapper = shallow(<Value text />);
        expect(wrapper).to.have.className('text');
    });
});
