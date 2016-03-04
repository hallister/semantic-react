import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Grid from '../grid';

const consumedProps = {
    aligned: 'center',
    component: 'div',
    defaultClasses: true,
    centered: true,
    celled: true,
    columns: 5,
    container: true,
    divided: true,
    doubling: true,
    equal: true,
    padded: true,
    relaxed: true,
    reversed: 'mobile',
    stackable: true,
    valigned: 'top'
};

describe('Grid', () => {
    it('Should render as div by default', () => {
        let wrapper = shallow(<Grid/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui grid');
    });

    it('Could be rendered with different component', () => {
        let wrapper = shallow(<Grid component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui grid');
    });

    it('Could specify column count', () => {
        let wrapper = shallow(<Grid columns={4}/>);
        expect(wrapper).to.have.className('four column');
        expect(wrapper).to.have.not.className('columns');
    });

    describe('Could be relaxed', () => {
        it('Relaxed', () => {
            let wrapper = shallow(<Grid relaxed/>);
            expect(wrapper).to.have.className('relaxed');
        });

        it('Very relaxed', () => {
            let wrapper = shallow(<Grid relaxed="very"/>);
            expect(wrapper).to.have.className('very relaxed')
        });
    });

    describe('Could be celled', () => {
        it('Celled', () => {
            let wrapper = shallow(<Grid celled/>);
            expect(wrapper).to.have.className('celled');
        });
        it('Internally celled', () => {
            let wrapper = shallow(<Grid celled="internally"/>);
            expect(wrapper).to.have.className('internally celled');
        });
    });

    describe('Could be divided', () => {
        it('Internally divided', () => {
            let wrapper = shallow(<Grid divided="internally"/>);
            expect(wrapper).to.have.className('internally divided');
        });

        it('Vertically divided', () => {
            let wrapper = shallow(<Grid divided="vertically"/>);
            expect(wrapper).to.have.className('vertically divided');
        });

        it('Divided', () => {
            let wrapper = shallow(<Grid divided/>);
            expect(wrapper).to.have.className('divided');
        });
    });

    describe('Could be padded', () => {
        it('Vertically padded', () => {
            let wrapper = shallow(<Grid padded="vertically"/>);
            expect(wrapper).to.have.className('vertically padded');
        });
        
        it('Horizontally padded', () => {
            let wrapper = shallow(<Grid padded="horizontally"/>);
            expect(wrapper).to.have.className('horizontally padded');
        });

        it('Could be padded', () => {
            let wrapper = shallow(<Grid padded/>);
            expect(wrapper).to.have.className('padded');
        });
    });

    it('Could be equal', () => {
        let wrapper = shallow(<Grid equal/>);
        expect(wrapper).to.have.className('equal width');
    });

    it('Could be centered', () => {
        let wrapper = shallow(<Grid centered/>);
        expect(wrapper).to.have.className('centered');
    });

    it('Could be stackable', () => {
        let wrapper = shallow(<Grid stackable/>);
        expect(wrapper).to.have.className('stackable');
    });

    describe('Could be reversed', () => {
        it('Mobile reversed', () => {
            let wrapper = shallow(<Grid reversed="mobile"/>);
            expect(wrapper).to.have.className('mobile reversed');
        });

        it('Mobile vertically reversed', () => {
            let wrapper = shallow(<Grid reversed="mobile vertically"/>);
            expect(wrapper).to.have.className('mobile vertically reversed');
        });

        it('Tablet reversed', () => {
            let wrapper = shallow(<Grid reversed="tablet"/>);
            expect(wrapper).to.have.className('tablet reversed');
        });

        it('Tablet vertically reversed', () => {
            let wrapper = shallow(<Grid reversed="tablet vertically"/>);
            expect(wrapper).to.have.className('tablet vertically reversed');
        });

        it('Computer reversed', () => {
            let wrapper = shallow(<Grid reversed="computer"/>);
            expect(wrapper).to.have.className('computer reversed');
        });

        it('Computer vertically reversed', () => {
            let wrapper = shallow(<Grid reversed="computer vertically"/>);
            expect(wrapper).to.have.className('computer vertically reversed');
        });
    });

    it('Could be doubling', () => {
        let wrapper = shallow(<Grid doubling/>);
        expect(wrapper).to.have.className('doubling');
    });

    it('Could be container', () => {
        let wrapper = shallow(<Grid container/>);
        expect(wrapper).to.have.className('container');
    });

    describe('Could be aligned', () => {
        it('Center aligned', () => {
            let wrapper = shallow(<Grid aligned="center"/>);
            expect(wrapper).to.have.className('center aligned');
        });

        it('Left aligned', () => {
            let wrapper = shallow(<Grid aligned="left"/>);
            expect(wrapper).to.have.className('left aligned');
        });

        it('Right aligned', () => {
            let wrapper = shallow(<Grid aligned="right"/>);
            expect(wrapper).to.have.className('right aligned');
        });
    });

    describe('Could be vertically aligned', () => {
        it('Top aligned', () => {
            let wrapper = shallow(<Grid valigned="top"/>);
            expect(wrapper).to.have.className('top aligned');
        });

        it('Middle aligned', () => {
            let wrapper = shallow(<Grid valigned="middle"/>);
            expect(wrapper).to.have.className('middle aligned');
        });

        it('Bottom aligned', () => {
            let wrapper = shallow(<Grid valigned="bottom"/>);
            expect(wrapper).to.have.className('bottom aligned');
        });
    });
    
    itShouldConsumeOwnAndPassCustomProps(Grid, consumedProps);
});

