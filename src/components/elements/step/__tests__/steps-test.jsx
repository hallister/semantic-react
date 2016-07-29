import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Numbers } from '../../../utilities';
import Step from '../step';
import Steps from '../steps';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    ordered: true,
    vertical: true,
    stackable: true,
    fluid: true,
    attached: true,
    equalWidths: true,
    size: 'big'
};

describe('Steps', () => {
    it('renders in dom as div by default', () => {
        let wrapper = shallow(<Steps />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui steps');
    });

    it('renders in dom as custom component', () => {
        let wrapper = shallow(<Steps component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui steps');
    });

    it('could be ordered', () => {
        let wrapper = shallow(<Steps ordered/>);
        expect(wrapper).to.have.className('ordered');
    });

    it('could be vertical', () => {
        let wrapper = shallow(<Steps vertical/>);
        expect(wrapper).to.have.className('vertical');
    });

    it('could be stackable', () => {
        let wrapper = shallow(<Steps stackable/>);
        expect(wrapper).to.have.className('stackable');
    });

    it('could be fluid', () => {
        let wrapper = shallow(<Steps fluid/>);
        expect(wrapper).to.have.className('fluid');
    });

    describe('It could be attached', () => {
        it('top', () => {
            let wrapper = shallow(<Steps attached="top"/>);
            expect(wrapper).to.have.className('top attached');
        });

        it('bottom', () => {
            let wrapper = shallow(<Steps attached="bottom"/>);
            expect(wrapper).to.have.className('bottom attached');
        });

        it('top right', () => {
            let wrapper = shallow(<Steps attached="top right"/>);
            expect(wrapper).to.have.className('top right attached');
        });

        it('top left', () => {
            let wrapper = shallow(<Steps attached="top left"/>);
            expect(wrapper).to.have.className('top left attached');
        });

        it('bottom left', () => {
            let wrapper = shallow(<Steps attached="bottom left"/>);
            expect(wrapper).to.have.className('bottom left attached');
        });

        it('bottom right', () => {
            let wrapper = shallow(<Steps attached="bottom right"/>);
            expect(wrapper).to.have.className('bottom right attached');
        });
    });

    describe('It could have steps with equal widths', () => {
        let aggregateChildSteps = [];
        for(let i=1;i<=8;i++) {
            aggregateChildSteps.push(<Step key={i} />);
            let childSteps = aggregateChildSteps.slice();
            it('with '+Numbers[i]+' child'+(i>1?'ren':''), () => {
                let wrapper = shallow(<Steps equalWidths>{childSteps}</Steps>);
                expect(wrapper).to.have.className(Numbers[i]);
            });
        }
    });

    it('could have size', () => {
        let wrapper = shallow(<Steps size="big"/>);
        expect(wrapper).to.have.className('big');
    });

    itShouldConsumeOwnAndPassCustomProps(Steps, consumedProps);
});
