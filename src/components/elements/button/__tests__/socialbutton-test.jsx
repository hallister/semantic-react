/* eslint-env node, mocha */
import React from 'react';
import { SocialButton, Icon, Button, IconButton } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

// const consumedProps = {
//     name: 'test'
// };

describe('SocialButton', () => {

    describe('should render in the DOM', () => {
        it('renders as a <IconButton>', () => {
            let wrapper = shallow(<SocialButton name="facebook" />);
            expect(wrapper.is(IconButton)).to.be.true;
            expect(wrapper).to.have.className('facebook');
            expect(wrapper).to.have.prop('name', 'facebook');
        });
        
        it('renders as <Button> with icon if has any children', () => {
            let wrapper = shallow(
                <SocialButton name="facebook">
                    Facebook
                </SocialButton>
            );
            expect(wrapper.is(Button)).to.be.true;
            expect(wrapper).to.have.className('facebook');
            expect(wrapper.find(Icon)).to.be.exist;
            expect(wrapper.find(Icon)).to.have.prop('name', 'facebook');
        });

        it('passes the custom component to <Button>', () => {
            let wrapper = shallow(<SocialButton component="div"
                                                name="facebook" />);
            expect(wrapper).to.have.tagName('div');
        });
    });

    // itShouldConsumeOwnAndPassCustomProps(SocialButton, consumedProps);
});
