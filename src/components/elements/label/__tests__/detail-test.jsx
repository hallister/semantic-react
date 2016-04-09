import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Detail from '../detail';

describe('Detail', () => {
    it('Renders in dom', () => {
        let wrapper = shallow(<Detail/>);
        expect(wrapper).to.have.className('detail');
    });
});
