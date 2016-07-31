import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RatingIcon from '../icon';
import Icon from '../../../elements/icon/icon';

describe('modules/rating/icon', () => {
    it('Should render icon without name', () => {
        const wrapper = shallow(<RatingIcon index={1}/>);
        expect(wrapper.is(Icon)).to.be.true;
        expect(wrapper.shallow()).to.have.className('icon');
        expect(wrapper.find(Icon)).to.have.not.prop("name");
    });

    it('Can be active', () => {
        const wrapper = shallow(<RatingIcon index={1} active/>);
        expect(wrapper).to.have.className('active');
    });

    it('Can be selected', () => {
        const wrapper = shallow(<RatingIcon index={1} selected/>);
        expect(wrapper).to.have.className('selected');
    });

    describe('On icon click', () => {
        it('Should call onClick prop with index', () => {
            const spy = sinon.spy();
            const wrapper = shallow(<RatingIcon index={1} onClick={spy}/>);
            wrapper.simulate('click', { stopPropagation: sinon.spy() });
            expect(spy).to.have.been.calledWith(1);
        });
    });

    describe('On icon mouse enter', () => {
        it('Should call onMouseEnter prop with index', () => {
            const spy = sinon.spy();
            const wrapper = shallow(<RatingIcon index={1} onMouseEnter={spy}/>);
            wrapper.simulate('mouseEnter', { stopPropagation: sinon.spy() });
            expect(spy).to.have.been.calledWith(1);
        });
    });

    describe('On icon mouse leave', () => {
        it('Should call onMouseLeave prop with index', () => {
            const spy = sinon.spy();
            const wrapper = shallow(<RatingIcon index={1} onMouseLeave={spy}/>);
            wrapper.simulate('mouseLeave', { stopPropagation: sinon.spy() });
            expect(spy).to.have.been.calledWith(1);
        });
    });
});
