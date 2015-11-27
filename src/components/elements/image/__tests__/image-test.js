/* eslint-env node, mocha */
/* global sinon */
import { createElement as $ } from 'react';
import { Image as Element } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let props = {
    src: 'test.png'
};

let consumedProps = {
    aligned: 'top',
    avatar: true,
    bordered: true,
    centered: true,
    className: 'testClass',
    component: 'div',
    content: true,
    defaultClasses: true,
    disabled: true,
    fluid: true,
    floated: 'right',
    src: 'test.png',
    shape: 'circular',
    spaced: 'right',
    size: 'small',
    visible: 'hidden'
};

describe('Image', () => {
    beforeEach(function() {
        props = {
            src: 'test.png'
        };
    });

    it('should expect a src', () => {
        sinon.test(function() {
            let spy = sinon.stub(console, 'error');
            sd.shallowRender($(Element, {}));
            spy.should.have.been.called();
            expect(1).to.equal(2);
        });
    });

    describe('should render in the DOM', () => {
        it('renders as <img>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.eq('ui image');
            expect(vdom.type).to.equal('img');
        });

        it('renders as a custom HTML element', () => {
            props.component = 'div';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('div');
        });
    });

    describe('should float', () => {
        it('should float right', () => {
            props.floated = 'right';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/right floated/);
        });

        it('should float left', () => {
            props.floated = 'left';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/left floated/);
        });
    });

    describe('should be visible or hidden', () => {
        it('should be visible when visible=visible', () => {
            props.visible = 'visible';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/visible/);
        });

        it('should be visible when visible=true', () => {
            props.visible = true;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/visible/);
        });

        it('should be hidden when visible=hidden', () => {
            props.visible = 'hidden';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).not.to.match(/visible/);
        });

        it('should be hidden when visible=false', () => {
            props.visible = false;
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).not.to.match(/visible/);
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

    it('should have content', () => {
        // console.log('Not currently functioning');
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

    describe('should support spacing', () => {
        it('should be left spaced', () => {
            props.spaced = 'left';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/left spaced/);
        });

        it('should be left spaced', () => {
            props.spaced = 'right';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/right spaced/);
        });
    });

    describe('should be alignable', () => {
        it('should be aligned to top', () => {
            props.aligned = 'top';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/top aligned/);
        });

        it('should be aligned to the middle', () => {
            props.aligned = 'middle';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/middle aligned/);
        });

        it('should be aligned to the bottom', () => {
            props.aligned = 'bottom';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/bottom aligned/);
        });
    });

    it('should have fluid filling', () => {
        props.fluid = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/fluid/);
    });

    it('should appear centered', () => {
        props.centered = true;
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/centered/);
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
