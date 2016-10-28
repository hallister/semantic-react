import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Dimmer from '../dimmer';
import { Loader, Content } from '../../../elements';
// import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
// const consumedProps = {
//     active: true,
//     enterAnimation: {},
//     leaveAnimation: {},
//     page: true,
//     inverted: true
// }

describe('Dimmer', () => {
    it('Shouldnt render dimmer if not active', () => {
        let wrapper = shallow(<Dimmer />);
        expect(wrapper.find('.dimmer')).to.be.not.exist;
    });
    
    it('Should render div by default', () => {
        let wrapper = shallow(<Dimmer active/>);
        expect(wrapper.find('.dimmer')).to.have.tagName('div');
        expect(wrapper.find('.dimmer')).to.have.className('ui active dimmer');
    });
    
    it('Renders as custom component', () => {
        let wrapper = shallow(<Dimmer active component="section"/>);
        expect(wrapper.find('.dimmer')).to.have.tagName('section');
        expect(wrapper.find('.dimmer')).to.have.className('ui active dimmer');
    });
    
    it('Could be page dimmer', () => {
        let wrapper = shallow(<Dimmer active page />);
        expect(wrapper.find('.dimmer')).to.have.className('page');
    });
    
    it('Could be inverted dimmer', () => {
        let wrapper = shallow(<Dimmer active inverted />);
        expect(wrapper.find('.dimmer')).to.have.className('inverted');
    });
    
    context('If children is Loader', () => {
        it('Should render loader as first child', () => {
            let wrapper = shallow(<Dimmer active><Loader /></Dimmer>);
            expect(wrapper.find('.dimmer')).to.have.descendants(Loader);
            expect(wrapper.find('.dimmer')).to.not.have.descendants(Content);
        });
    });
    
    context('If children is any non Loader component', () => {
        it('Should prefix children with Content', () => {
            let wrapper = shallow(<Dimmer active><h1>TEST</h1></Dimmer>);
            expect(wrapper.find('.dimmer')).to.have.descendants(Content);
            expect(wrapper.find('.dimmer')).to.contain(<h1>TEST</h1>);
        });
    });

    context('If prop noWrapChildren was set', () => {
        it('Should render children without wrapping into content', () => {
            let wrapper = shallow(<Dimmer active noWrapChildren><h1>TEST</h1></Dimmer>);
            expect(wrapper.find(Content)).to.be.not.exist;
            expect(wrapper.find('.dimmer')).to.contain(<h1>TEST</h1>);
        });
    });

    // FIXME?
    // itShouldConsumeOwnAndPassCustomProps(Dimmer, consumedProps);
});
