/* eslint-env node, mocha */
import React from 'react';
import { IconButton, Button, Icon } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldPassUnusedDataProps } from '../../../test-utils';

describe('IconButton', () => {
    describe('should render in the DOM', () => {
        it('renders as <Button>', () => {
            let wrapper = shallow(<IconButton name="cloud" />);
            expect(wrapper.is(Button)).to.be.true;
            expect(wrapper).to.have.prop('icon', true);
        });

        it('passes the custom component to <Button>', () => {
            let wrapper = shallow(<IconButton component="div"
                                              name="cloud" />);
            expect(wrapper).to.have.tagName('div');

        });
    });

    it('should have a single icon child', () => {
        let wrapper = shallow(<IconButton name="cloud" />);
        expect(wrapper).to.have.exactly(1).descendants(Icon);
    });

    it('should have a single icon child and a label', () => {
        let wrapper = shallow(<IconButton name="cloud">Label</IconButton>);
        expect(wrapper.find(Icon)).to.have.prop('name', 'cloud');
        expect(wrapper.children().last()).to.have.text('Label');
    });

    it('should allow the icon to change color', () => {
        let wrapper = shallow(<IconButton iconColor="yellow"
                                          name="cloud" />);
        expect(wrapper.find(Icon)).to.have.prop('color', 'yellow');
    });

    it('should allow the button to change color', () => {
        let wrapper = shallow(<IconButton color="yellow"
                                          name="cloud" />);
        expect(wrapper).to.have.prop('color', 'yellow');
    });


    itShouldPassUnusedDataProps(IconButton, {});
});
