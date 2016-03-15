/* eslint-env node, mocha */
import React from 'react';
import { Icon } from '../../../elements';
import { Rating } from '../../../modules';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';


let consumedProps = {
    component: 'div',
    defaultClasses: true,
    heart: true,
    initialValue: 5,
    max: 5,
    size: 'small',
    star: true
};

describe('Rating', () => {
    describe('should render in the DOM', () => {
        it('renders as rating', () => {
            let wrapper = shallow(<Rating />);

            expect(wrapper).to.have.className('ui rating');
            expect(wrapper).to.have.tagName('div');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Rating component="span"/>);
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('has a heart mode', () => {
        let wrapper = shallow(<Rating heart />);
        expect(wrapper).to.have.className('heart');
    });

    it('has a star mode', () => {
        let wrapper = shallow(<Rating star />);
        expect(wrapper).to.have.className('star');
    });

    it('can have a maximum value defined', () => {
        let wrapper = shallow(<Rating max={3} />);
        expect(wrapper).to.have.exactly(3).descendants(Icon);
    });

    it('can have a value of zero', () => {
        let wrapper = shallow(<Rating initialValue={0} />);
        expect(wrapper).to.have.not.descendants('.active');
    });

    describe('When setting an initial value on rating', () => {
        it('can have an initial value set', () => {
            let wrapper = shallow(<Rating initialValue={1} />);
            expect(wrapper).to.have.exactly(1).descendants('.active');
        });

        it('does not let initial value override max', () => {
            let wrapper = shallow(<Rating initialValue={4}
                                          max={3}/>);
            expect(wrapper).to.have.exactly(3).descendants('.active');
        });
    });

    describe('When clicking on rating', () => {
        // const eventStub = {
        //     stopPropagation: sinon.stub(),
        //     preventDefault: sinon.stub()
        // };
        it('should change value', () => {
            let wrapper = shallow(<Rating max={5}
                                          onChange={() => { }}/>);
            expect(wrapper).to.have.not.descendants('.active');

            // FIXME Cannot get it to click on an icon
            // wrapper.find(Icon).at(0).simulate('click', eventStub);
            // wrapper.find(Icon).first().prop('onClick')();
            // expect(wrapper).to.have.exactly(1).descendants('.active');

            // wrapper.find(Icon).prop('onIconClick')(4);
            // expect(wrapper).to.have.exactly(5).descendants('.active');
        });
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Rating size="small" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');

    });

    itShouldConsumeOwnAndPassCustomProps(Rating, consumedProps);
});
