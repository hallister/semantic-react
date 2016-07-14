import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Td from '../td';

describe('collections/table', () => {
    it('should be rendered in dom', () => {
        const wrapper = shallow(<Td/>);
        expect(wrapper).to.have.tagName('td');
    });

    it('can be rendered as custom component', () => {
        const wrapper = shallow(<Td component="tr"/>);
        expect(wrapper).to.have.tagName('tr');
    });

    describe('can be aligned', () => {
        it('right', () => {
            const wrapper = shallow(<Td aligned="right"/>);
            expect(wrapper).to.have.className('right aligned');
        });

        it('left', () => {
            const wrapper = shallow(<Td aligned="left"/>);
            expect(wrapper).to.have.className('left aligned');
        });

        it('center', () => {
            const wrapper = shallow(<Td aligned="center"/>);
            expect(wrapper).to.have.className('center aligned');
        });
    });

    it('can be collapsing', () => {
        const wrapper = shallow(<Td collapsing/>);
        expect(wrapper).to.have.className('collapsing');
    });

    it('can be selectable', () => {
        const wrapper = shallow(<Td selectable/>);
        expect(wrapper).to.have.className('selectable');
    });

    it('can be single line', () => {
        const wrapper = shallow(<Td singleLine/>);
        expect(wrapper).to.have.className('single line');
    });

    describe('can have emphasis', () => {
        it('negative', () => {
            const wrapper = shallow(<Td emphasis="negative"/>);
            expect(wrapper).to.have.className('negative');
        });
        it('positive', () => {
            const wrapper = shallow(<Td emphasis="positive"/>);
            expect(wrapper).to.have.className('positive');
        });
        it('error', () => {
            const wrapper = shallow(<Td emphasis="error"/>);
            expect(wrapper).to.have.className('error');
        });
        it('warning', () => {
            const wrapper = shallow(<Td emphasis="warning"/>);
            expect(wrapper).to.have.className('warning');
        });
    });

    describe('can be vertical aligned', () => {
        it('top', () => {
            const wrapper = shallow(<Td valigned="top"/>);
            expect(wrapper).to.have.className('top aligned');
        });
        it('bottom', () => {
            const wrapper = shallow(<Td valigned="bottom"/>);
            expect(wrapper).to.have.className('bottom aligned');
        });
        it('middle', () => {
            const wrapper = shallow(<Td valigned="middle"/>);
            expect(wrapper).to.have.className('middle aligned');
        });
    });
});
