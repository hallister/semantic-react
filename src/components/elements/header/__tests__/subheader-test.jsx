/* eslint-env node, mocha */

import React from 'react';
import { SubHeader, Header } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';


let consumedProps = {
    component: 'div',
    defaultClasses: true
};

describe('SubHeader', () => {
    describe('should render in the DOM', () => {

        it('renders as <Header>', () => {
            let wrapper = shallow(<SubHeader />);
            expect(wrapper).to.have.className('sub');
            expect(wrapper.is(Header)).to.be.true;
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<SubHeader component="div" />);
            expect(wrapper).to.have.tagName('div');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(SubHeader, consumedProps);

});
