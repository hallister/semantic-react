/* eslint-env node, mocha */

import React from 'react';
import { Flag, Icon } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    defaultClasses: true,
    component: 'i',
    name: 'us'
};

describe('Flag', () => {
    describe('should render in the DOM', () => {
        it('Renders as i by default', () => {
            let wrapper = shallow(<Flag name="us" />);
            expect(wrapper).to.have.tagName('i');
            expect(wrapper).to.have.className('flag');
            expect(wrapper).to.have.className('us');
        });
        
        it('Renders as custom component', () => {
            let wrapper = shallow(<Flag component="a" name="us" />);
            expect(wrapper).to.have.tagName('a');
            expect(wrapper).to.have.className('flag');
            expect(wrapper).to.have.className('us');
        });
        
    });

    itShouldConsumeOwnAndPassCustomProps(Flag, consumedProps);
});
