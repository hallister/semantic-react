/* eslint-env node, mocha */
import React from "react";
import { PrimaryButton, Button } from '../../../elements';
import { expect } from 'chai';
import { shallow } from "enzyme";

describe('PrimaryButton', () => {

    describe('should render in the DOM', () => {
        it('renders as a <Button>', () => {
            let wrapper = shallow(<PrimaryButton />);
            expect(wrapper.is(Button)).to.be.true;
        });

        it('PrimaryButton renders as blue', () => {
            let wrapper = shallow(<PrimaryButton />);
            expect(wrapper).to.have.prop('color', 'blue');
        });
    });
});
