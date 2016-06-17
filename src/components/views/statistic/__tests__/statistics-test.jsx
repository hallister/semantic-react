import React from 'react';
import { expect } from 'chai';
import { mount, render, shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Statistic from '../statistic';
import Statistics from '../statistics';
import Value from '../value';
import Label from '../../../elements/label/label';

class Fixture extends React.Component {
    render() {
        return (
            <Statistics even id="root">
                <Statistic id="s1"><Value>v1</Value><Label id="l1">l1</Label></Statistic>
                <Statistic id="s2"><Value>v2</Value><Label>l2</Label></Statistic>
            </Statistics>
        )
    }
}


describe('Statistics', () => {
    it('Should be rendered as <div> by default', () => {
        let wrapper = shallow(<Statistics />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('statistics');
    });

    it('Should be rendered as custom component', () => {
        let wrapper = shallow(<Statistics component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('statistics');
    });

    it('Child statistic component should not render `ui` class', () => {
        let wrapper = mount(<Fixture />);

        expect(wrapper.find('#s1')).to.have.not.className('ui');
        expect(wrapper.find('#l1')).to.have.not.className('ui');
    });

    describe('It could evenly divided', () => {
        it('Empty', () => {
            let wrapper = shallow(<Statistics even/>);
            expect(wrapper).to.be.className('ui statistics');
        });

        it('Two', () => {
            let wrapper = shallow(<Statistics even><Statistic/><Statistic/></Statistics>);
            expect(wrapper).to.have.className('two');
        });

        it('Four', () => {
            let wrapper = shallow(<Statistics even><Statistic/><Statistic/><Statistic/><Statistic/></Statistics>);
            expect(wrapper).to.have.className('four');
        });
    });
});
