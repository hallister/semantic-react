/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import Row from '../row';

const consumedProps = {
    component: 'div',
    aligned: 'right',
    centered: true,
    doubling: true,
    equal: true,
    only: ['mobile', 'tablet'],
    columns: 5,
    stretched: true,
    color: 'green',
    justified: true
};

describe('Row', () => {
    it('Should be rendered as div by default', () => {
        let wrapper = shallow(<Row/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('row');
    });

    it('Could be rendered as other component', () => {
        let wrapper = shallow(<Row component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('row');
    });

    it('Can specify number of columns', () => {
        let wrapper = shallow(<Row columns={5}/>);
        expect(wrapper).to.have.className('five column');
    });

    it('Could be equal width row', () => {
        let wrapper = shallow(<Row equal/>);
        expect(wrapper).to.have.className('equal width');
    });

    it('Could be centered', () => {
        let wrapper = shallow(<Row centered/>);
        expect(wrapper).to.have.className('centered');
    });

    it('Could be doubling', () => {
        let wrapper = shallow(<Row doubling/>);
        expect(wrapper).to.have.className('doubling');
    });

    describe('Could be displayed only on certain devices', () => {
        it('Mobile', () => {
            let wrapper = shallow(<Row only="mobile"/>);
            expect(wrapper).to.have.className('mobile only');
        });

        it('Computer', () => {
            let wrapper = shallow(<Row only="computer"/>);
            expect(wrapper).to.have.className('computer only');
        });

        it('Tablet', () => {
            let wrapper = shallow(<Row only="tablet"/>);
            expect(wrapper).to.have.className('tablet only');
        });

        it('Large screen', () => {
            let wrapper = shallow(<Row only="large screen"/>);
            expect(wrapper).to.have.className('large screen only');
        });

        it('Widescreen', () => {
            let wrapper = shallow(<Row only="widescreen"/>);
            expect(wrapper).to.have.className('widescreen only');
        });

        it('Could be combined', () => {
            let wrapper = shallow(<Row only={['mobile', 'tablet']}/>);
            expect(wrapper).to.have.className('mobile tablet only');
        });
    });

    it('Could be stretched', () => {
        let wrapper = shallow(<Row stretched/>);
        expect(wrapper).to.have.className('stretched');
    });

    it('Could be colored', () => {
        let wrapper = shallow(<Row color="green"/>);
        expect(wrapper).to.have.className('green');
        expect(wrapper).to.have.not.className('color');
    });

    describe('Could be aligned', () => {
        it('Center aligned', () => {
            let wrapper = shallow(<Row aligned="center"/>);
            expect(wrapper).to.have.className('center aligned');
        });

        it('Left aligned', () => {
            let wrapper = shallow(<Row aligned="left"/>);
            expect(wrapper).to.have.className('left aligned');
        });

        it('Right aligned', () => {
            let wrapper = shallow(<Row aligned="right"/>);
            expect(wrapper).to.have.className('right aligned');
        });
    });

    it('Could be justified', () => {
        let wrapper = shallow(<Row justified/>);
        expect(wrapper).to.have.className('justified');
    });

    describe('Could be aligned vertically', () => {
        it('Top aligned', () => {
            let wrapper = shallow(<Row valigned="top"/>);
            expect(wrapper).to.have.className('top aligned');
        });

        it('Middle aligned', () => {
            let wrapper = shallow(<Row valigned="middle"/>);
            expect(wrapper).to.have.className('middle aligned');
        });

        it('Bottom aligned', () => {
            let wrapper = shallow(<Row valigned="bottom"/>);
            expect(wrapper).to.have.className('bottom aligned');
        });
    });
    
    itShouldConsumeOwnAndPassCustomProps(Row, consumedProps);
});
