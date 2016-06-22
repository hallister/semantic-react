import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Label from '../label';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    attached: 'top',
    basic: true,
    circular: true,
    color: 'green',
    corner: true,
    floating: true,
    horizontal: true,
    image: 'test.png',
    link: true,
    pointing: true,
    size: 'big',
    tag: true
};

describe('Label', () => {
    describe('It should be rendered in DOM', () => {
        it('renders as div by default', () => {
            let wrapper = shallow(<Label>test</Label>);
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('ui label');
        });
        
        it('renders as custom component', () => {
            let wrapper = shallow(<Label component="a">test</Label>);
            expect(wrapper).to.have.tagName('a');
            expect(wrapper).to.have.className('ui label');
        });
    });
    
    describe('It could be attached', () => {
        it('top', () => {
            let wrapper = shallow(<Label attached="top">Test</Label>);
            expect(wrapper).to.have.className('top attached');
        });
        
        it('bottom', () => {
            let wrapper = shallow(<Label attached="bottom">Test</Label>);
            expect(wrapper).to.have.className('bottom attached');
        });

        it('top right', () => {
            let wrapper = shallow(<Label attached="top right">Test</Label>);
            expect(wrapper).to.have.className('top right attached');
        });

        it('top left', () => {
            let wrapper = shallow(<Label attached="top left">Test</Label>);
            expect(wrapper).to.have.className('top left attached');
        });
        
        it('bottom left', () => {
            let wrapper = shallow(<Label attached="bottom left">Test</Label>);
            expect(wrapper).to.have.className('bottom left attached');
        });
        
        it('bottom right', () => {
            let wrapper = shallow(<Label attached="bottom right">Test</Label>);
            expect(wrapper).to.have.className('bottom right attached');
        });
    });
    
    it('Could be basic', () => {
        let wrapper = shallow(<Label basic/>);
        expect(wrapper).to.have.className('basic');
    });
    
    it('Could be circular', () => {
        let wrapper = shallow(<Label circular/>);
        expect(wrapper).to.have.className('circular');
    });
    
    it('Could have color', () => {
        let wrapper = shallow(<Label color="green"/>);
        expect(wrapper).to.have.className('green');
        expect(wrapper).to.have.not.className('color');
    });
    
    describe('It could be attached to corner', () => {
        it('corner', () => {
            let wrapper = shallow(<Label corner/>);
            expect(wrapper).to.have.className('corner');
        });
        
        it('left corner', () => {
            let wrapper = shallow(<Label corner="left"/>);
            expect(wrapper).to.have.className('left corner');
        });
        
        it('right corner', () => {
            let wrapper = shallow(<Label corner="right"/>);
            expect(wrapper).to.have.className('right corner');
        });
    });
    
    it('Could be floating', () => {
        let wrapper = shallow(<Label floating/>);
        expect(wrapper).to.have.className('floating');
    });
    
    it('Could be horizontal', () => {
        let wrapper = shallow(<Label horizontal/>);
        expect(wrapper).to.have.className('horizontal');
    });
    
    describe('Could be pointing', () => {
        it('pointing', () => {
            let wrapper = shallow(<Label pointing/>);
            expect(wrapper).to.have.className('pointing');
        });
        
        it('top', () => {
            let wrapper = shallow(<Label pointing="top"/>);
            expect(wrapper).to.have.className('top pointing');
        });
        
        it('bottom', () => {
            let wrapper = shallow(<Label pointing="bottom"/>);
            expect(wrapper).to.have.className('bottom pointing');
        });
        
        it('left', () => {
            let wrapper = shallow(<Label pointing="left"/>);
            expect(wrapper).to.have.className('left pointing');
        });
        
        it('right', () => {
            let wrapper = shallow(<Label pointing="right"/>);
            expect(wrapper).to.have.className('right pointing');
        });
    });
    
    describe('Ribbon', () => {
        it('ribbon', () => {
            let wrapper = shallow(<Label ribbon/>);
            expect(wrapper).to.have.className('ribbon');
        });
        
        it('right', () => {
            let wrapper = shallow(<Label ribbon="right"/>);
            expect(wrapper).to.have.className('right ribbon');
        });
    });
    
    it('Could have size', () => {
        let wrapper = shallow(<Label size="small"/>);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });
    
    it('Could be tag', () => {
        let wrapper = shallow(<Label tag/>);
        expect(wrapper).to.have.className('tag');
    });
    
    it('Could be empty', () => {
        let wrapper = shallow(<Label empty/>);
        expect(wrapper).to.have.className('empty');
    });
    
    it('Could be image label', () => {
        let wrapper = shallow(<Label image="http://test.com/test.png">Test</Label>);
        expect(wrapper).to.have.className('image');
        expect(wrapper.find('img')).to.be.exist;
        expect(wrapper.find('img')).to.have.prop('src', 'http://test.com/test.png');
    });
    
    it('Could be formatted as link', () => {
        let wrapper = shallow(<Label link/>);
        expect(wrapper).to.have.tagName('a');
    });
    
    it('Custom component overrides link', () => {
        let wrapper = shallow(<Label link component="section"/>);
        expect(wrapper).to.have.tagName('section');
    });
    
    describe('It shouldn\'t render ui class', () => {
        it('when is child of Cards', () => {
            let wrapper = shallow(<Label />, { context: { isCardsChild: true } });
            expect(wrapper).to.have.not.className('ui');
        });
        
        it('when is child of progress', () => {
            let wrapper = shallow(<Label />, { context: { isProgressChild: true } });
            expect(wrapper).to.have.not.className('ui');
        });

        it('when is child of Statistic', () => {
            let wrapper = shallow(<Label />, { context: { isStatisticChild: true } });
            expect(wrapper).to.have.not.className('ui');
        });
    });
    
    itShouldConsumeOwnAndPassCustomProps(Label, consumedProps);
});
