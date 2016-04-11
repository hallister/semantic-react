import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AccordionTitle from '../accordiontitle';
import Icon from '../../../elements/icon/icon';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    active: true,
    icon: 'dropdown',
    iconComponent: Icon,
    initialStyle: {
        background: 'green'
    },
    index: 1
};

describe('AccordionTitle', () => {
    it('Should be rendered as div by default', () => {
        let wrapper = shallow(<AccordionTitle index={1}/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('title');
    });

    it('Could be rendered as custom component', () => {
        let wrapper = shallow(<AccordionTitle component="a" index={1}/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('title');
    });

    it('Could be active', () => {
        let wrapper = shallow(<AccordionTitle active index={1}/>);
        expect(wrapper).to.have.className('active');
    });

    it('Should call onClick handler on component click', () => {
        let spy = sinon.spy();
        let wrapper = shallow(<AccordionTitle index={1} onClick={spy}/>);
        wrapper.simulate('click');
        expect(spy).to.have.been.called;
    });

    it('Should set style from initialStyle', () => {
        let wrapper = shallow(<AccordionTitle index={1} initialStyle={{ background: 'green' }}/>);
        expect(wrapper).to.have.style('background', 'green');
    });

    itShouldConsumeOwnAndPassCustomProps(AccordionTitle, consumedProps);
});