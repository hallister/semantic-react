/* eslint-env node, mocha */
import React from 'react';
import { SocialButton, IconButton } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldPassUnusedDataProps } from '../../../test-utils';

describe('SocialButton', () => {

    describe('should render in the DOM', () => {
        it('renders as a <IconButton>', () => {
            let wrapper = shallow(<SocialButton name="facebook" />);
            expect(wrapper.is(IconButton)).to.be.true;
            expect(wrapper).to.have.prop('social', true);
            expect(wrapper).to.have.prop('icon', true);
        });

        it('passes the custom component to <Button>', () => {
            let wrapper = shallow(<SocialButton component="div"
                                                name="facebook" />);
            expect(wrapper).to.have.tagName('div');
        });
    });

    itShouldPassUnusedDataProps(IconButton, {});
});
