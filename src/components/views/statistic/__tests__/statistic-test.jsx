import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Statistic from '../statistic';
import Value from '../value';
import Label from '../../../elements/label/label';

describe('Statistic', () => {
    it('Should be rendered as <div> by default', () => {
        let wrapper = shallow(<Statistic />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('statistic');
    });
    
    it('Should be rendered as custom component', () => {
        let wrapper = shallow(<Statistic component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('statistic');
    });

    it('Could be horizontal', () => {
        let wrapper = shallow(<Statistic horizontal/>);
        expect(wrapper).to.have.className('horizontal');
    });

    it('Could be colored', () => {
        let wrapper = shallow(<Statistic color="blue"/>);
        expect(wrapper).to.have.className('blue');
    });

    it('Could be inverted', () => {
        let wrapper = shallow(<Statistic inverted/>);
        expect(wrapper).to.have.className('inverted');
    });

    describe('Could be setted by value/label props instead of children', () => {
        it('with strings', () => {
            let wrapper = shallow(<Statistic value="v1" label="l1"/>);
            expect(wrapper.find(Value).length).to.eq(1);
            expect(wrapper.find(Label).length).to.eq(1);
        });

        it('with numbers', () => {
            let wrapper = shallow(<Statistic value={15} label={10} />);
            expect(wrapper.find(Value).length).to.eq(1);
            expect(wrapper.find(Label).length).to.eq(1);
        });
    });

    describe('It could be floated', () => {
        it('Left', () => {
            let wrapper = shallow(<Statistic floated="left"/>);
            expect(wrapper).to.have.className('left');
        });

        it('Right', () => {
            let wrapper = shallow(<Statistic floated="right"/>);
            expect(wrapper).to.have.className('right');
        });
    });

    describe('It could vary in size', () => {
        it('Mini', () => {
            let wrapper = shallow(<Statistic size="mini"/>);
            expect(wrapper).to.have.className('mini');
        });

        it('Tiny', () => {
            let wrapper = shallow(<Statistic size="tiny"/>);
            expect(wrapper).to.have.className('tiny');
        });

        it('Small', () => {
            let wrapper = shallow(<Statistic size="small"/>);
            expect(wrapper).to.have.className('small');
        });

        it('Large', () => {
            let wrapper = shallow(<Statistic size="large"/>);
            expect(wrapper).to.have.className('large');
        });

        it('Huge', () => {
            let wrapper = shallow(<Statistic size="huge"/>);
            expect(wrapper).to.have.className('huge');
        });
    });

    it('Could be clickable', () => {
        let wrapper = shallow(<Statistic onClick={() => {}}/>);
        expect(wrapper);
    });

    describe('Could have value and label', () => {
        const wrapper = shallow(<Statistic><Value>15</Value><Label>label</Label></Statistic>);
        it('Value', () => {
            expect(wrapper.find(Value)).to.have.html('<div class="value">15</div>');
        });
        it('Label should have no "ui" class', () => {
            expect(wrapper.find(Label)).to.have.html().match(/label/);
        });
    });

    describe('Should not render `ui` class', () => {
        it('when is child of Statistics', () => {
            let wrapper = shallow(<Statistic />, { context: { isStatisticsChild: true } });
            expect(wrapper).have.not.className('ui');
        });
    });
});
