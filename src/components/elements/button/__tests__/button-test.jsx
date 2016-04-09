/* eslint-env node, mocha */
import React from 'react';
import { Button, Icon } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    animated: true,
    attached: true,
    basic: true,
    circular: true,
    color: 'red',
    compact: true,
    component: 'div',
    defaultClasses: true,
    emphasis: 'positive',
    floated: 'right',
    fluid: true,
    inverted: true,
    size: 'small',
    state: 'active',
    toggle: true
};

describe('Button', () => {
    describe('should render in the DOM', () => {

        it('renders as <button>', () => {
            let wrapper = shallow(<Button />);

            expect(wrapper).to.have.className('ui button');
            expect(wrapper).to.have.tagName('button');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Button component="div"/>);
            expect(wrapper).to.have.tagName('div');
        });
    })

    describe('should animate', () => {
        it('animates horizontally', () => {
            let wrapper = shallow(<Button animated />);
            expect(wrapper).to.have.className('animated');
        });

        it('animates vertically', () => {
            let wrapper = shallow(<Button animated="vertical" />);
            expect(wrapper).to.have.className('vertical animated');
        });

        it('animates by fading in/out', () => {
            let wrapper = shallow(<Button animated="fade" />);
            expect(wrapper).to.have.className('fade animated');
        });
    });

    describe('should be stateful', () => {
        it('has an active state', () => {
            let wrapper = shallow(<Button state="active" />);
            expect(wrapper).to.have.className('active');
        });

        it('has a disabled state', () => {
            let wrapper = shallow(<Button state="disabled" />);
            expect(wrapper).to.have.className('disabled');
        });

        it('has a loading state', () => {
            let wrapper = shallow(<Button state="loading" />);
            expect(wrapper).to.have.className('loading');
        });
    });

    describe('should float', () => {
        it('floats right', () => {
            let wrapper = shallow(<Button floated="right" />);
            expect(wrapper).to.have.className('right floated');
        });

        it('floats left', () => {
            let wrapper = shallow(<Button floated="left" />);
            expect(wrapper).to.have.className('left floated');
        });
    });

    describe('should attach to other objects', () => {
        it('can attach to the top of an attachable element', () => {
            let wrapper = shallow(<Button attached="top" />);
            expect(wrapper).to.have.className('top attached');
            expect(wrapper).to.have.tagName('div');
        });

        it('can attach to the bottom of an attachable element', () => {
            let wrapper = shallow(<Button attached="bottom" />);
            expect(wrapper).to.have.className('bottom attached');
            expect(wrapper).to.have.tagName('div');
        });

        it('can attach to the left of a another button', () => {
            let wrapper = shallow(<Button attached="left" />);
            expect(wrapper).to.have.className('left attached');
            expect(wrapper).to.have.tagName('div');
        });

        it('can attach to the right of a another button', () => {
            let wrapper = shallow(<Button attached="right" />);
            expect(wrapper).to.have.className('right attached');
            expect(wrapper).to.have.tagName('div');
        });
    });

    it('should be less pronounced', () => {
        let wrapper = shallow(<Button basic />);
        expect(wrapper).to.have.className('basic');
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Button inverted />);
        expect(wrapper).to.have.className('inverted');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Button size="small" />);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');

    });

    it('should support colors', () => {
        let wrapper = shallow(<Button color="yellow" />);
        expect(wrapper).to.have.className('yellow');
        expect(wrapper).to.have.not.className('color');
    });

    it('should be compact', () => {
        let wrapper = shallow(<Button compact />);
        expect(wrapper).to.have.className('compact');
    });

    it('should fill it\'s parent container', () => {
        let wrapper = shallow(<Button fluid />);
        expect(wrapper).to.have.className('fluid');
    });

    it('should take a circular shape', () => {
        let wrapper = shallow(<Button circular />);
        expect(wrapper).to.have.className('circular');
    });

    it('should allow a single icon as a child', () => {
        let wrapper = shallow(<Button><Icon name="cloud" /></Button>);
        expect(wrapper.find(Icon)).to.exist;
    });
    
    describe('should have emphasis', () => {
        it('primary', () => {
            let wrapper = shallow(<Button emphasis="primary" />);
            expect(wrapper).to.have.className('primary');
            expect(wrapper).to.have.not.className('emphasis');
        });
        
        it('secondary', () => {
            let wrapper = shallow(<Button emphasis="secondary" />);
            expect(wrapper).to.have.className('secondary');
            expect(wrapper).to.have.not.className('emphasis');
        });
        
        it('positive', () => {
            let wrapper = shallow(<Button emphasis="positive" />);
            expect(wrapper).to.have.className('positive');
            expect(wrapper).to.have.not.className('emphasis');
        });
        
        it('negative', () => {
            let wrapper = shallow(<Button emphasis="negative" />);
            expect(wrapper).to.have.className('negative');
            expect(wrapper).to.have.not.className('emphasis');
        });
    });

    itShouldConsumeOwnAndPassCustomProps(Button, consumedProps);
});
