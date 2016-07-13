import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Segment from '../segment';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    aligned: 'right',
    attached: true,
    basic: true,
    blurring: true,
    clearing: true,
    color: 'red',
    container: true,
    disabled: true,
    emphasis: 'primary',
    floated: 'right',
    inverted: true,
    loading: true,
    spacing: 'fitted',
    type: 'raised',
    vertical: true,
    zIndex: 100
};

describe('elements/segment', () => {
    it('should be rendered in dom', () => {
        const wrapper = shallow(<Segment />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui segment');
    });

    it('should be rendered as custom component', () => {
        const wrapper = shallow(<Segment component="a"/>);
        expect(wrapper).to.have.tagName('a');
        expect(wrapper).to.have.className('ui segment');
    });

    describe('Can specify text alignment', () => {
        it('left', () => {
            const wrapper = shallow(<Segment aligned="left"/>);
            expect(wrapper).to.have.className('left aligned');
        });
        it('center', () => {
            const wrapper = shallow(<Segment aligned="center"/>);
            expect(wrapper).to.have.className('center aligned');
        });
        it('right', () => {
            const wrapper = shallow(<Segment aligned="right"/>);
            expect(wrapper).to.have.className('right aligned');
        });
    });

    describe('Could be attached', () => {
        it('attached', () => {
            const wrapper = shallow(<Segment attached/>);
            expect(wrapper).to.have.className('attached');
        });

        it('top attached', () => {
            const wrapper = shallow(<Segment attached="top"/>);
            expect(wrapper).to.have.className('top attached');
        });

        it('bottom attached', () => {
            const wrapper = shallow(<Segment attached="bottom"/>);
            expect(wrapper).to.have.className('bottom attached');
        });
    });

    it('can be basic', () => {
        const wrapper = shallow(<Segment basic/>);
        expect(wrapper).to.have.className('basic');
    });

    it('Can be blurring', () => {
        const wrapper = shallow(<Segment blurring/>);
        expect(wrapper).to.have.className('blurring');
    });

    it('Can be clearing', () => {
        const wrapper = shallow(<Segment clearing/>);
        expect(wrapper).to.have.className('clearing');
    });

    it('Can have color', () => {
        const wrapper = shallow(<Segment color="red"/>);
        expect(wrapper).to.have.className('red');
    });

    it('Can be container', () => {
        const wrapper = shallow(<Segment container/>);
        expect(wrapper).to.have.className('container');
    });

    it('Can be disabled', () => {
        const wrapper = shallow(<Segment disabled/>);
        expect(wrapper).to.have.className('disabled');
    });

    it('Can have emphasis', () => {
        const wrapper = shallow(<Segment emphasis="primary"/>);
        expect(wrapper).to.have.className('primary');
    });

    describe('Can be floated', () => {
        it('left', () => {
            const wrapper = shallow(<Segment floated="left"/>);
            expect(wrapper).to.have.className('left floated');
        });
        it('right', () => {
            const wrapper = shallow(<Segment floated="right"/>);
            expect(wrapper).to.have.className('right floated');
        });
    });

    it('Can be inverted', () => {
        const wrapper = shallow(<Segment inverted/>);
        expect(wrapper).to.have.className('inverted');
    });

    it('Can be loading', () => {
        const wrapper = shallow(<Segment loading/>);
        expect(wrapper).to.have.className('loading');
    });

    describe('Can have spacing', () => {
        it('fitted', () => {
            const wrapper = shallow(<Segment spacing="fitted"/>);
            expect(wrapper).to.have.className('compact');
        });

        it('padded', () => {
            const wrapper = shallow(<Segment spacing="padded"/>);
            expect(wrapper).to.have.className('padded');
        });
    });

    describe('Can be different type', () => {
        it('Raised', () => {
            const wrapper = shallow(<Segment type="raised"/>);
            expect(wrapper).to.have.className('raised');
        });

        it('Stacked', () => {
            const wrapper = shallow(<Segment type="stacked"/>);
            expect(wrapper).to.have.className('stacked');
        });

        it('Piled', () => {
            const wrapper = shallow(<Segment type="piled"/>);
            expect(wrapper).to.have.className('piled');
        });
    });

    it('Can be vertical', () => {
        const wrapper = shallow(<Segment vertical/>);
        expect(wrapper).to.have.className('vertical');
    });

    itShouldConsumeOwnAndPassCustomProps(Segment, consumedProps);
});
