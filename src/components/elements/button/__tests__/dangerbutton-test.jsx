/* eslint-env node, mocha */
import React from 'react';
import { DangerButton, Button } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('DangerButton', () => {
    describe('should render in the DOM', () => {
        it('renders as a <Button>', () => {
            let wrapper = shallow(<DangerButton />);
            expect(wrapper.is(Button)).to.be.true;
        });

        it('DangerButton renders as red', () => {
            let wrapper = shallow(<DangerButton />);
            expect(wrapper).to.have.prop('color', 'red');
        });
    });
});
