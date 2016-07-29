import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Step from '../step';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    component: 'div',
    defaultClasses: true,
    title: 'Test',
    description: 'Test step',
    icon: 'truck',
    iconComponent: 'i',
    link: 'http://semantic-ui.com/elements/step.html',
    active: true,
    completed: true,
    disabled: true
};

describe('Step', () => {
    describe('It should be rendered in DOM', () => {
        it('renders as div by default', () => {
            let wrapper = shallow(<Step/>);
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('step');
        });

        it('renders as custom component', () => {
            let wrapper = shallow(<Step component="a"/>);
            expect(wrapper).to.have.tagName('a');
            expect(wrapper).to.have.className('step');
        });

        it('shouldn\'t render ui class', () => {
            let wrapper = shallow(<Step />);
            expect(wrapper).to.not.have.className('ui');
        });
    });

    it('could have a title', () => {
        let wrapper = shallow(<Step title="Test"/>);
        expect(wrapper.find('div.title')).to.exist;
        expect(wrapper.find('div.title')).to.have.text('Test');
    });

    it('could have a description', () => {
        let wrapper = shallow(<Step description="Test step"/>);
        expect(wrapper.find('div.description')).to.exist;
        expect(wrapper.find('div.description')).to.have.text('Test step');
    });

    describe('It could have an icon', () => {
        it('without iconComponent', () => {
            let wrapper = mount(<Step icon="truck"/>);
            expect(wrapper.find('i.icon')).to.exist;
            expect(wrapper.find('i.icon')).to.have.className('truck');
        });

        it('with iconComponent', () => {
            let wrapper = mount(<Step icon="truck" iconComponent="span"/>);
            expect(wrapper.find('span')).to.exist;
            expect(wrapper.find('span')).to.have.prop('name', 'truck');
        });
    });

    describe('It could be a link', () => {
        it('with link attribute', () => {
            let wrapper = shallow(<Step link="http://semantic-ui.com/elements/step.html"/>);
            expect(wrapper).to.have.className('step');
            expect(wrapper).to.have.tagName('a');
            expect(wrapper).to.have.prop('href', 'http://semantic-ui.com/elements/step.html');
        });

        it('but not if a non-default component is specified', () => {
            let wrapper = shallow(<Step link="http://semantic-ui.com/elements/step.html" component="span"/>);
            expect(wrapper).to.have.className('step');
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('could be active', () => {
        let wrapper = shallow(<Step active/>);
        expect(wrapper).to.have.className('active');
    });

    it('could be completed', () => {
        let wrapper = shallow(<Step completed/>);
        expect(wrapper).to.have.className('completed');
    });

    it('could be disabled', () => {
        let wrapper = shallow(<Step disabled/>);
        expect(wrapper).to.have.className('disabled');
    });

    itShouldConsumeOwnAndPassCustomProps(Step, consumedProps);
});
