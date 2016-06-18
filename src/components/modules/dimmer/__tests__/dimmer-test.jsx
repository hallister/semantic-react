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
    it('Should has display none if not active', () => {
        let wrapper = shallow(<Dimmer />).shallow();
        expect(wrapper.find('.dimmer')).to.have.style('display', 'none');
    });
    
    it('Should render div by default', () => {
        let wrapper = shallow(<Dimmer active/>).shallow();
        expect(wrapper.find('.dimmer')).to.have.tagName('div');
        expect(wrapper.find('.dimmer')).to.have.className('ui dimmer');
        expect(wrapper.find('.dimmer')).to.have.style('display', 'block');
    });
    
    it('Renders as custom component', () => {
        let wrapper = shallow(<Dimmer active
                                      component="section"/>).shallow();
        expect(wrapper.find('.dimmer')).to.have.tagName('section');
        expect(wrapper.find('.dimmer')).to.have.className('ui dimmer');
    });
    
    it('Could be page dimmer', () => {
        let wrapper = shallow(<Dimmer active 
                                      page />).shallow();
        expect(wrapper.find('.dimmer')).to.have.className('page');
    });
    
    it('Could be inverted dimmer', () => {
        let wrapper = shallow(<Dimmer active 
                                      inverted />).shallow();
        expect(wrapper.find('.dimmer')).to.have.className('inverted');
    });
    
    context('If children is Loader', () => {
        it('Should render loader as first child', () => {
            let wrapper = shallow(<Dimmer active><Loader /></Dimmer>).shallow();
            expect(wrapper.find('.dimmer')).to.have.descendants(Loader);
            expect(wrapper.find('.dimmer')).to.not.have.descendants(Content);
        });
    });
    
    context('If children is any non Loader component', () => {
        it('Should prefix children with Content', () => {
            let wrapper = shallow(<Dimmer active><h1>TEST</h1></Dimmer>).shallow();
            expect(wrapper.find('.dimmer')).to.have.descendants(Content);
            expect(wrapper.find('.dimmer')).to.contain(<h1>TEST</h1>);
        });
    });

    context('If prop noWrapChildren was set', () => {
        it('Should render children without wrapping into content', () => {
            let wrapper = shallow(<Dimmer active noWrapChildren><h1>TEST</h1></Dimmer>).shallow();
            expect(wrapper.find(Content)).to.be.not.exist;
            expect(wrapper.find('.dimmer')).to.contain(<h1>TEST</h1>);
        });
    });

    // FIXME?
    // itShouldConsumeOwnAndPassCustomProps(Dimmer, consumedProps);
});
