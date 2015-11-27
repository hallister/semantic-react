/* eslint-env node, mocha */
/* global sinon */
import React, { createElement as $ } from 'react';
import { Images as Element, Image } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let children = [
    <Image
        key="image1"
        src="test1.png" />,
    <Image
        key="image2"
        src="test2.png" />
];

let props = {};

let consumedProps = {
    avatar: true,
    bordered: true,
    className: 'testClass',
    component: 'div',
    defaultClasses: true,
    disabled: true,
    shape: 'circular',
    size: 'small',
    visible: 'hidden'
};

describe('Images', () => {
    beforeEach(function() {
        props = {};
    });

    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.eq('ui images');
            expect(vdom.type).to.equal('div');
        });

        it('renders as a custom HTML element', () => {
            props.component = 'span';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('span');
        });
    });

    describe('should be visible or hidden', () => {
        it('should be visible when visible=visible', () => {
            props.visible = 'visible';
            let tree = sd.shallowRender($(Element, props, children));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).not.to.match(/hidden/);
        });

        it('should be visible when visible=true', () => {
            props.visible = true;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).not.to.match(/hidden/);
        });

        it('should be hidden when visible=hidden', () => {
            props.visible = 'hidden';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/hidden/);
        });

        it('should be hidden when visible=false', () => {
            props.visible = false;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/hidden/);
        });
    });

    describe('should allow a shape', () => {
        it('should rotate clockwise', () => {
            props.shape = 'circular';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/circular/);
        });

        it('should rotate counterclockwise', () => {
            props.shape = 'rounded';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/rounded/);
        });
    });

    it('should appear disabled', () => {
        props.disabled = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/disabled/);
    });

    it('should be an avatar', () => {
        props.avatar = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/avatar/);
    });

    it('should have various sizes', () => {
        props.size = 'small';
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/small/);
        expect(vdom.props.className).not.to.match(/size/);
    });

    it('should appear bordered', () => {
        props.bordered = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/bordered/);
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
