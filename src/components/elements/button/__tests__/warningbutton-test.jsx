/* eslint-env node, mocha */
import React from 'react';
import { WarningButton, Button } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('WarningButton', () => {
    describe('should render in the DOM', () => {

        it('renders as a <Button>', () => {
            let wrapper = shallow(<WarningButton />);
            expect(wrapper.is(Button)).to.be.true;
        });

        it('WarningButton renders as yellow', () => {
            let wrapper = shallow(<WarningButton />);
            expect(wrapper).to.have.prop('color', 'yellow');
        });
    });
});
