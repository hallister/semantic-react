/* eslint-env node, mocha */
/* global sinon */
import React from 'react';
import { SocialButton, IconButton } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldPassUnusedDataProps } from '../../../test-utils';

describe('SocialButton', () => {

    it('should expect a name', () => {
        let spy = sinon.stub(console, 'error');
        shallow(<SocialButton />);
        expect(spy).to.have.been.called;
        spy.restore();

    });


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
