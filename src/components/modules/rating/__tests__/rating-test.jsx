import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Rating from '../rating';
import RatingIcon from '../icon';


let consumedProps = {
    component: 'div',
    defaultClasses: true,
    type: 'default',
    value: 5,
    max: 5,
    size: 'small',
    onChange: () => {}
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

    describe('Can have rating type', () => {
        it('heart', () => {
            let wrapper = shallow(<Rating type="heart"/>);
            expect(wrapper).to.have.className('heart');
        });

        it('star', () => {
            let wrapper = shallow(<Rating type="star"/>);
            expect(wrapper).to.have.className('star');
        });
    });

    describe('Renders rating icons', () => {
        it('Renders number of icons equals to count', () => {
            const wrapper = shallow(<Rating max={10}/>);
            expect(wrapper).to.have.exactly(10).descendants(RatingIcon);
        });

        it('Renders active icons until specified value', () => {
            const wrapper = shallow(<Rating max={10} value={0}/>);
            expect(wrapper.find(RatingIcon).filter({ active: true })).to.be.not.exist;
            wrapper.setProps({ value: 7 });
            expect(wrapper.find(RatingIcon).filter({ active: true }).length).to.equal(7);
        });
    });

    describe('When hovering over rating icon', () => {
        it('Should make this icon and all previous icon selected', () => {
            const wrapper = shallow(<Rating max={10} value={0}/>);
            wrapper.find(RatingIcon).at(7).simulate('mouseEnter', 7);
            expect(wrapper.find(RatingIcon).filter({ selected: true }).length).to.equal(7);
        });

        it('Should unset selected when mouse out', () => {
            const wrapper = shallow(<Rating max={10} value={0}/>);
            wrapper.find(RatingIcon).at(7).simulate('mouseEnter', 7);
            wrapper.find(RatingIcon).at(7).simulate('mouseLeave', 7);
            expect(wrapper.find(RatingIcon).filter({ selected: true }).length).to.equal(0);
        });
    });


    describe('When clicking on rating', () => {
        it('Should call onChange prop with index from clicked icon', () => {
            const spy = sinon.spy();
            const wrapper = shallow(<Rating max={10} value={0} onChange={spy}/>);
            wrapper.find(RatingIcon).at(7).simulate('click', 7);
            expect(spy).to.have.been.calledWith(7);
        });

        it('Shouldn\'t call onChange prop if clicked index is equal to current value', () => {
            const spy = sinon.spy();
            const wrapper = shallow(<Rating max={10} value={7} onChange={spy}/>);
            wrapper.find(RatingIcon).at(7).simulate('click', 7);
            expect(spy).to.have.not.been.called;
        });
    });

    it('Can have various sizes', () => {
        let wrapper = shallow(<Rating size="small" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');

    });

    itShouldConsumeOwnAndPassCustomProps(Rating, consumedProps);
});
