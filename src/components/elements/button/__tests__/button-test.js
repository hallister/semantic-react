import React, { createElement as $ } from 'react';
import { Button as Element, Icon } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let props = {};
let consumedProps = {
    active: true,
    animated: true,
    attached: true,
    basic: true,
    circular: true,
    className: 'testClass',
    color: 'red',
    compact: true,
    component: 'div',
    defaultClasses: true,
    disabled: true,
    floated: 'right',
    fluid: true,
    focusable: true,
    icon: true,
    inverted: true,
    labeled: true,
    loading: true,
    negative: true,
    positive: true,
    primary: true,
    secondary: true,
    size: 'small',
    social: 'facebook'
};

describe('Button', () => {
    beforeEach(function() {
        props = {};
    });

    describe('should render in the DOM', () => {

        it('renders as <button>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/ui button/);
            expect(vdom.type).to.equal('button');
        });

        it('renders as a custom HTML element', () => {
            props.component = 'div';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('div');
        });
    })

    describe('should have color variations', () => {
        beforeEach(function() {
            props = {};
        });

        describe('should emphasize prominence', () => {
            it('has primary emphasis', () => {
                props.primary = true;
                let tree = sd.shallowRender($(Element, props));
                let vdom = tree.getRenderOutput();

                expect(vdom.props.className).to.match(/primary/);
            });

            it('has secondary emphasis', () => {
                props.secondary = true;
                let tree = sd.shallowRender($(Element, props));
                let vdom = tree.getRenderOutput();

                expect(vdom.props.className).to.match(/secondary/);
            });
        });

        describe('should emphasize consequence', () => {
            it('has positive consequence', () => {
                props.positive = true;
                let tree = sd.shallowRender($(Element, props));
                let vdom = tree.getRenderOutput();

                expect(vdom.props.className).to.match(/positive/);
            });

            it('has negative consequence', () => {
                props.negative = true;
                let tree = sd.shallowRender($(Element, props));
                let vdom = tree.getRenderOutput();

                expect(vdom.props.className).to.match(/negative/);
            });
        });
    });

    describe('should animate', () => {
        it('animates horizontally', () => {
            props.animated = true;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/animated/);
        });

        it('animates vertically', () => {
            props.animated = 'vertical';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/vertical animated/);
        });

        it('animates by fading in/out', () => {
            props.animated = 'fade';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/fade animated/);
        });
    });

    describe('should be stateful', () => {
        beforeEach(function() {
            props = {};
        });

        it('has an active state', () => {
            props.active = true;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/active/);
        });

        it('has a disabled state', () => {
            props.disabled = true;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/disabled/);
        });

        it('has a loading state', () => {
            props.loading = true;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/loading/);
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

        it('can attach to the left of a another button', () => {
            props.attached = 'left';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/left attached/);
            expect(vdom.type).to.equal('div');
        });

        it('can attach to the right of a another button', () => {
            props.attached = 'right';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/right attached/);
            expect(vdom.type).to.equal('div');
        });
    });

    it('should be less pronounced', () => {
        props.basic = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/basic/);
    });

    it('should be noticable on dark backgrounds', () => {
        props.inverted = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/inverted/);
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


    it('should be compact', () => {
        props.compact = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/compact/);
    });

    it('should fill it\'s parent container', () => {
        props.fluid = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/fluid/);
    });

    it('should take a circular shape', () => {
        props.circular = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/circular/);
    });

    it('should allow a single icon as a child', () => {
        let tree = sd.shallowRender($(Element, props, <Icon name="cloud" />));
        let vdom = tree.getRenderOutput();

        expect(vdom.props).to.have.property('children');
        expect(vdom.props.children).to.deep.equal(<Icon name="cloud" />);
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

            let dom = sd.shallowRender($(Element, props)).getRenderOutput();

            // length = props.length + className + children
            //      4 = 2            + 1         + 1
            expect(Object.keys(dom.props).length).to.equal(4);
            expect(dom.props).to.have.property('data-test', 'test');
            expect(dom.props).to.have.property('dataTest', 'test');
        });
    });
});
