import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import List from '../list';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'ul',
    defaultClasses: true,
    aligned: 'top',
    animated: true,
    celled: true,
    floated: 'right',
    horizontal: true,
    inverted: true,
    link: true,
    relaxed: true,
    selection: true,
    size: 'small',
    type: 'bulleted'
};

describe('elements/list', () => {
    describe('Should be rendered in dom', () => {
        it('renders as div by default', () => {
            const wrapper = shallow(<List />);
            expect(wrapper.is('div')).to.be.true;
            expect(wrapper).to.have.className('ui list');
        });

        it('renders as custom component', () => {
            const wrapper = shallow(<List component="ul" />);
            expect(wrapper.is('ul')).to.be.true;
        });
    });

    describe('It could align content', () => {
        it('top', () => {
            const wrapper = shallow(<List aligned="top"/>);
            expect(wrapper).to.have.className('top aligned');
        })

        it('middle', () => {
            const wrapper = shallow(<List aligned="middle"/>);
            expect(wrapper).to.have.className('middle aligned');
        })

        it('bottom', () => {
            const wrapper = shallow(<List aligned="bottom"/>);
            expect(wrapper).to.have.className('bottom aligned');
        });
    });

    it('could be animated', () => {
        const wrapper = shallow(<List animated/>);
        expect(wrapper).to.have.className('animated');
    });

    describe('Could be celled', () => {
        it('celled', () => {
            const wrapper = shallow(<List celled/>);
            expect(wrapper).to.have.className('celled');
        });

        it('divided', () => {
            const wrapper = shallow(<List celled="divided"/>);
            expect(wrapper).to.have.className('divided');
            expect(wrapper).to.have.not.className('celled');
        })
    });

    describe('It could float content', () => {
        it('right', () => {
            const wrapper = shallow(<List floated="right"/>);
            expect(wrapper).to.have.className('right floated');
        });

        it('left', () => {
            const wrapper = shallow(<List floated="left"/>);
            expect(wrapper).to.have.className('left floated');
        });
    });

    it('Could be horizontal', () => {
        const wrapper = shallow(<List horizontal/>);
        expect(wrapper).to.have.className('horizontal');
    });

    it('Could be inverted', () => {
        const wrapper = shallow(<List inverted/>);
        expect(wrapper).to.have.className('inverted');
    });

    it('Could be link', () => {
        const wrapper = shallow(<List link/>);
        expect(wrapper).to.have.className('link');
    });

    it('Could be relaxed', () => {
        const wrapper = shallow(<List relaxed/>);
        expect(wrapper).to.have.className('relaxed');
    });

    it('Could be selection', () => {
        const wrapper = shallow(<List selection/>);
        expect(wrapper).to.have.className('selection');
    });

    it('Could vary in size', () => {
        const wrapper = shallow(<List size="small"/>);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    describe('Could have type', () => {
        it('bulleted', () => {
            const wrapper = shallow(<List type="bulleted"/>);
            expect(wrapper).to.have.className('bulleted');
        });
        it('ordered', () => {
            const wrapper = shallow(<List type="ordered"/>);
            expect(wrapper).to.have.className('ordered');
        });
    });

    describe('Shouldn\'t have ui class', () => {
        it('when is child of another list', () => {
            const wrapper = shallow(<List/>, { context: { isListChild: true } });
            expect(wrapper).to.have.not.className('ui');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(List, consumedProps);
});
