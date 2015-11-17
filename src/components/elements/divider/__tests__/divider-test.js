/* eslint-env node, mocha */

import { createElement as $ } from 'react';
import { Divider as Element } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let props = {};

let consumedProps = {
    aligned: 'horizontal',
    className: 'testClass',
    clearing: true,
    component: 'div',
    defaultClasses: true,
    hidden: true,
    inverted: true,
    spacing: 'fitted'
};

describe('Divider', () => {
    beforeEach(function() {
        props = {};
    });

    describe('should render in the DOM', () => {

        it('renders as <div>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/ui divider/);
            expect(vdom.type).to.equal('div');
        });

        it('renders as a custom HTML element', () => {
            props.component = 'span';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('span');
        });
    });

    it('should clear floats', () => {
        props.clearing = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/clearing/);
    });

    it('should appear hidden', () => {
        props.hidden = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/hidden/);
    });

    it('should be visible on a dark background', () => {
        props.inverted = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/inverted/);
    });

    describe('should allow padding to be set', () => {
        it('should have minimal padding', () => {
            props.spacing = 'fitted';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/fitted/);
        });

        it('should have maximal padding', () => {
            props.spacing = 'padded';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/section/);
        });
    });

    describe('should properly pass props', () => {
        Object.keys(consumedProps).forEach(key => {
            props[key] = consumedProps[key];
        });

        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();
        let regex = new RegExp(consumedProps['className']);

        it('consumes all used props', () => {
            expect(Object.keys(vdom.props)).to.have.length(2);
            expect(vdom.props).to.have.property('children');
            expect(vdom.props.children).to.be.an('undefined');
            expect(vdom.props).to.have.property('className');
        });


        it('passes the className prop', () => {
            expect(vdom.props.className).to.match(regex);
        });

        it('passes unused data props', () => {
            props['data-test'] = 'test';
            props['dataTest'] = 'test';

            vdom = sd.shallowRender($(Element, props)).getRenderOutput();

            expect(vdom.props).to.have.property('data-test', 'test');
            expect(vdom.props).to.have.property('dataTest', 'test');
        });
    });
});
