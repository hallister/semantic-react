/* eslint-env node, mocha */

import React from 'react';
import { Flag, Icon } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldPassUnusedDataProps } from '../../../test-utils';

let props = {
    name: 'france'
};

describe('Flag', () => {
    describe('should render in the DOM', () => {
        it('renders as <Icon>', () => {
            let wrapper = shallow(<Flag {...props} />);
            expect(wrapper).to.have.className('flag');
            expect(wrapper.is(Icon)).to.be.true;
        });
    });

    itShouldPassUnusedDataProps(Flag, props);
});
