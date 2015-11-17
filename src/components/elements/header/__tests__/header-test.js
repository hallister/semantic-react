/* eslint-env node, mocha */

import { createElement as $ } from 'react';
import { Header as Element } from '../../../elements';
import { Menu } from '../../../views';
import { expect } from 'chai';
import sd from 'skin-deep';

let props = {};

let consumedProps = {
    aligned: 'right',
    attached: true,
    className: 'testClass',
    color: 'red',
    component: 'div',
    defaultClasses: true,
    disabled: true,
    divider: true,
    emphasis: 'block',
    floated: 'right',
    horizontal: true,
    inverted: true,
    item: true,
    size: 'small'
};

describe('Header', () => {
    beforeEach(function() {
        props = {};
    });

    describe('should render in the DOM', () => {

        it('renders as <div>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/ui header/);
            expect(vdom.type).to.equal('div');
        });

        it('renders as a custom HTML element', () => {
            props.component = 'h1';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('h1');
        });
    })

    describe('should allow emphasis', () => {
        beforeEach(function() {
            props = {
                emphasis: 'dividing'
            };
        });

        it('has a dividing emphasis', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/dividing/);
        });

        it('has a block emphasis', () => {
            props.emphasis = 'block';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/block/);
        });
    });

    describe('should float', () => {
        it('floats right', () => {
            props.floated = 'right';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/right floated/);
        });

        it('floats left', () => {
            props.floated = 'left';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/left floated/);
        });
    });

    describe('should attach to other objects', () => {
        it('can attach to the top of an attachable element', () => {
            props.attached = 'top';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/top attached/);
            expect(vdom.type).to.equal('div');
        });

        it('can attach to the bottom of an attachable element', () => {
            props.attached = 'bottom';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/bottom attached/);
            expect(vdom.type).to.equal('div');
        });
    });

    it('should be noticable on dark backgrounds', () => {
        props.inverted = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/inverted/);
    });

    it('should appear disabled', () => {
        props.disabled = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/disabled/);
    });

    it('should be a dividing header', () => {
        props.divider = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/divider/);
    });

    it('should have various sizes', () => {
        props.size = 'small';
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/small/);
        expect(vdom.props.className).not.to.match(/size/);
    });

    it('should support colors', () => {
        props.color = 'yellow';
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/yellow/);
        expect(vdom.props.className).not.to.match(/color/);
    });

    it('should be horizontal', () => {
        props.horizontal = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/horizontal/);
    });

    it('should be an item', () => {
        let tree = sd.shallowRender($(Menu, {}, $(Element)));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.children.props.item).to.eq(true);
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
