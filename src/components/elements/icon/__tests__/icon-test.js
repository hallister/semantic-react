/* eslint-env node, mocha */
/* global sinon */
import { createElement as $ } from 'react';
import { Icon as Element } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let props = {};

let consumedProps = {
    bordered: true,

    circular: true,
    className: 'testClass',
    color: 'red',
    component: 'i',
    defaultClasses: true,
    disabled: true,

    fitted: true,
    flipped: 'horizontally',
    inverted: true,
    link: true,
    loading: true,
    rotated: 'clockwise',
    size: 'small'
};

describe('Icon', () => {
    beforeEach(function() {
        props = {};
    });

    it('should expect a name', () => {
        sinon.test(function() {
            let spy = sinon.stub(console, 'error');
            sd.shallowRender($(Element, {}));
            spy.should.have.been.called();
            expect(1).to.equal(2);
        });
    });

    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.eq('icon');
            expect(vdom.type).to.equal('i');
        });

        it('renders as a custom HTML element', () => {
            props.component = 'span';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('span');
        });
    });

    describe('should flip', () => {
        beforeEach(function() {
            props = {
                flipped: 'horizontally'
            };
        });

        it('should flip horizontally', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/horizontally flipped/);
        });

        it('should flip vertically', () => {
            props.flipped = 'vertically';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/vertically flipped/);
        });
    });

    describe('should rotate', () => {
        it('should rotate clockwise', () => {
            props.rotated = 'clockwise';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/clockwise rotated/);
        });

        it('should rotate counterclockwise', () => {
            props.rotated = 'counterclockwise';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/counterclockwise rotated/);
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

    it('should appear to be loading', () => {
        props.loading = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/loading/);
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

    describe('should be a link', () => {
        it('should be add the link via the link property', () => {
            props.link = true;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/link/);
        });

        it('should be add the link via the onClick property', () => {
            props.onClick = () => {};
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/link/);
        });
    });

    it('should have fitted spacing', () => {
        props.fitted = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/fitted/);
    });

    it('should appear circular', () => {
        props.circular = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/circular/);
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
            // className only
            expect(Object.keys(vdom.props)).to.have.length(1);
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
