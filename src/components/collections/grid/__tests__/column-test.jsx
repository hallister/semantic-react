/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

import Column from '../column';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    aligned: 'right',
    only: ['mobile', 'tablet'],
    color: 'red',
    width: 5,
    mobileWidth: 6,
    tabletWidth: 7,
    computerWidth: 8,
    largeScreenWidth: 9,
    wideScreenWidth: 10,
    valigned: 'middle'
};

describe('Column', () => {
    it('Should be rendered as div by default', () => {
        const wrapper = shallow(<Column/>);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('column');
    });

    it('Could be rendered as other component', () => {
        const wrapper = shallow(<Column component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('column')
    });

    it('Could specify width', () => {
        const wrapper = shallow(<Column width={4}/>);
        expect(wrapper).to.have.className('four wide');
    });

    describe('Could be floated', () => {
        it('Left', () => {
            const wrapper = shallow(<Column floated="left"/>);
            expect(wrapper).to.have.className('left floated');
        });

        it('Right', () => {
            const wrapper = shallow(<Column floated="right"/>);
            expect(wrapper).to.have.className('right floated');
        });
    });

    it('Could be colored', () => {
        const wrapper = shallow(<Column color="black"/>);
        expect(wrapper).to.have.className('black');
        expect(wrapper).to.have.not.className('color');
    });
    
    describe('Could be displayed only on certain devices', () => {
        it('Mobile', () => {
            const wrapper = shallow(<Column only="mobile"/>);
            expect(wrapper).to.have.className('mobile only');
        });

        it('Computer', () => {
            const wrapper = shallow(<Column only="computer"/>);
            expect(wrapper).to.have.className('computer only');
        });

        it('Tablet', () => {
            const wrapper = shallow(<Column only="tablet"/>);
            expect(wrapper).to.have.className('tablet only');
        });

        it('Large screen', () => {
            const wrapper = shallow(<Column only="large screen"/>);
            expect(wrapper).to.have.className('large screen only');
        });

        it('Widescreen', () => {
            const wrapper = shallow(<Column only="widescreen"/>);
            expect(wrapper).to.have.className('widescreen only');
        });

        it('Could be combined', () => {
            const wrapper = shallow(<Column only={['mobile', 'tablet']}/>);
            expect(wrapper).to.have.className('mobile tablet only');
        });
    });

    it('Could specify width for mobile', () => {
        const wrapper = shallow(<Column mobileWidth={4}/>);
        expect(wrapper).to.have.className('four wide mobile');
    });

    it('Could specify width for tablet', () => {
        const wrapper = shallow(<Column tabletWidth={5}/>);
        expect(wrapper).to.have.className('five wide tablet');
    });

    it('Could specify width for computer', () => {
        const wrapper = shallow(<Column computerWidth={6}/>);
        expect(wrapper).to.have.className('six wide computer');
    });

    it('Could specify width for large screen', () => {
        const wrapper = shallow(<Column largeScreenWidth={7}/>);
        expect(wrapper).to.have.className('seven wide large screen');
    });

    it('Could specify width for widescreen', () => {
        const wrapper = shallow(<Column wideScreenWidth={8}/>);
        expect(wrapper).to.have.className('eight wide widescreen');
    });

    it('Could specify width for few devices types', () => {
        const wrapper = shallow(<Column mobileWidth={4} tabletWidth={5}/>);
        expect(wrapper).to.have.className('four wide mobile five wide tablet');
    });

    describe('Could be aligned', () => {
        it('Center', () => {
            const wrapper = shallow(<Column aligned="center"/>);
            expect(wrapper).to.have.className('center aligned');
        });

        it('Left', () => {
            const wrapper = shallow(<Column aligned="left"/>);
            expect(wrapper).to.have.className('left aligned');
        });

        it('Right', () => {
            const wrapper = shallow(<Column aligned="right"/>);
            expect(wrapper).to.have.className('right aligned');
        });
    });

    describe('Could be aligned vertically', () => {
        it('Top', () => {
            const wrapper = shallow(<Column valigned="top"/>);
            expect(wrapper).to.have.className('top aligned');
        });

        it('Middle', () => {
            const wrapper = shallow(<Column valigned="middle"/>);
            expect(wrapper).to.have.className('middle aligned');
        });

        it('Bottom', () => {
            const wrapper = shallow(<Column valigned="bottom"/>);
            expect(wrapper).to.have.className('bottom aligned');
        });
    });

    it('can have a color', () => {
        const wrapper = shallow(<Column color="red"/>);
        expect(wrapper).to.have.className('red');
    });
    itShouldConsumeOwnAndPassCustomProps(Column, consumedProps);
});
