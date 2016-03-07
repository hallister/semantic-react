/* eslint-env node, mocha */
import React from 'react';
import { SuccessButton, Button } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('SuccessButton', () => {
    describe('should render in the DOM', () => {

        it('renders as a <Button>', () => {
            let wrapper = shallow(<SuccessButton />);
            expect(wrapper.is(Button)).to.be.true;
        });

        it('WarningButton renders as green', () => {
            let wrapper = shallow(<SuccessButton />);
            expect(wrapper).to.have.prop('color', 'green');
        });
    });
});
