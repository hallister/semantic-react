/* eslint-env node, mocha */

import { createElement as $ } from 'react';
import { SubHeader as Element, Header } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let props = {};

let consumedProps = {
    className: 'testClass',
    component: 'div',
    defaultClasses: true
};

describe('SubHeader', () => {
    beforeEach(function() {
        props = {};
    });

    describe('should render in the DOM', () => {

        it('renders as <Header>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/sub/);
            expect(vdom.type).to.equal(Header);
        });

        it('renders as a custom HTML element', () => {
            props.component = 'div';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('div');
        });
    })

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
