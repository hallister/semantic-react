/* eslint-env node, mocha */
/* global sinon */
import React from 'react';
import { Input, Button, Icon, Label } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    action: true,
    fluid: true,
    focus: true,
    icon: true,
    inverted: true,
    labeled: true,
    loading: true,
    name: 'cloud',
    placeholder: 'Placeholder',
    size: 'small',
    state: 'disabled',
    transparent: true
};

describe('Input', () => {
    
    describe('should render in the DOM', () => {
        it('renders as <input>', () => {
            let wrapper = shallow(<Input />);
            expect(wrapper).to.have.className('ui input');
            expect(wrapper).to.have.tagName('div');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Input component="span" />);
            expect(wrapper).to.have.tagName('span');
        });
    });

    it('should be an action input', () => {
        let wrapper = shallow(<Input action />);
        expect(wrapper).to.have.className('action');
    });

    it('should have fluid filling', () => {
        let wrapper = shallow(<Input fluid />);
        expect(wrapper).to.have.className('fluid');
    });

    it('should be in focus', () => {
        let wrapper = shallow(<Input focus />);
        expect(wrapper).to.have.className('focus');
    });

    it('should have content', () => {
        // console.log('Not currently functioning');
    });

    // FIXME Either icon prop shouldn't expect string, needs implementation, or it should be removed
    // it('should have a single icon child', () => {
    //     let wrapper = shallow(<Input icon="cloud" />);
    //     expect(wrapper).to.have.exactly(1).descendants(Icon);
    // });

    it('should receive icon class', () => {
        let wrapper = shallow(<Input><Icon name="cloud"/></Input>);
        expect(wrapper).to.have.exactly(1).descendants(Icon);
        expect(wrapper).to.have.className('icon');
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Input inverted />);
        expect(wrapper).to.have.className('inverted');
    });

    // FIXME Either labeled prop shouldn't expect string, needs implementation, or it should be removed
    // it('should have a single icon child', () => {
    //     let wrapper = shallow(<Input labeled="my label" />);
    //     expect(wrapper).to.have.exactly(1).descendants(Label);
    // });

    it('should receive labeled class', () => {
        let wrapper = shallow(<Input><Label /></Input>);
        expect(wrapper).to.have.exactly(1).descendants(Label);
        expect(wrapper).to.have.className('labeled');
    });

    // Hidden button feature
    it('should render a button', () => {
        let wrapper = shallow(<Input><Button /></Input>);
        expect(wrapper).to.have.exactly(1).descendants(Button);
    });

    it('should have a name', () => {
        let wrapper = shallow(<Input name="test" />);
        expect(wrapper.find('input').first()).to.have.prop('name', 'test');
    });

    it('should have a placeholder', () => {
        let wrapper = shallow(<Input placeholder="test" />);
        expect(wrapper.find('input').first()).to.have.prop('placeholder', 'test');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Input size="small" />);
        expect(wrapper).to.have.not.className('size');
        expect(wrapper).to.have.className('small');
    });

    describe('should be stateful', () => {
        it('has an error state', () => {
            let wrapper = shallow(<Input state="error" />);
            expect(wrapper).to.have.className('error');
        });

        it('has a disabled state', () => {
            let wrapper = shallow(<Input state="disabled" />);
            expect(wrapper).to.have.className('disabled');
        });

        it('has a loading state', () => {
            let wrapper = shallow(<Input loading />);
            expect(wrapper).to.have.className('loading');
        });
    });

    it('should be transparent', () => {
        let wrapper = shallow(<Input transparent />);
        expect(wrapper).to.have.className('transparent');
    });

    itShouldConsumeOwnAndPassCustomProps(Input, consumedProps);

});
