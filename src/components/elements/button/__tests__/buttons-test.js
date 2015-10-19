import React, { createElement as $ } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Buttons as Element, Button, Icon, IconButton } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let renderer = TestUtils.createRenderer();
let buttonsChildren = [
    <Button key="1">Button 1</Button>,
    <Button key="2">Button 2</Button>
];

let iconButtonsChildren = [
    <IconButton key="1" name="cloud" />,
    <IconButton key="2" name="arrow" />
];

let props = {};
let consumedProps = {
    attached: 'top',
    basic: true,
    className: 'testClass',
    color: 'red',
    compact: true,
    component: 'div',
    defaultClasses: true,
    equal: true,
    floated: 'right',
    icon: true,
    inverted: true,
    labeled: true,
    negative: true,
    positive: true,
    primary: true,
    secondary: true,
    size: 'small',
    vertical: true
};

describe('Buttons', () => {
    beforeEach(function() {
        props = {};
    });

    describe('should render in the DOM', () => {
        it('renders as <div>', () => {
            let tree = sd.shallowRender($(Element, props, buttonsChildren));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/ui buttons/);
            expect(vdom.type).to.equal('div');
        });

        it('renders as a custom HTML element', () => {
            props.component = 'span';
            let tree = sd.shallowRender($(Element, props, buttonsChildren));
            let vdom = tree.getRenderOutput();

            expect(vdom.type).to.equal('span')
        });
    });

    it('should position a group of buttons', () => {
        let tree = sd.shallowRender($(Element, props, buttonsChildren));
        let vdom = tree.getRenderOutput();

        React.Children.forEach(vdom.props.children, child => {
            expect(child.type).to.equal(Button);
        });

        expect(Object.keys(vdom.props.children)).to.have.length(2);
    });

    it('should position a group of buttons vertically', () => {
        props.vertical = true;
        let tree = sd.shallowRender($(Element, props, buttonsChildren));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/vertical/);
        expect(Object.keys(vdom.props.children)).to.have.length(2);
    });

    it('should position a group of icon buttons', () => {
        props.vertical = true;
        let tree = sd.shallowRender($(Element, props, iconButtonsChildren));
        let vdom = tree.getRenderOutput();

        React.Children.forEach(vdom.props.children, child => {
            expect(child.type).to.equal(IconButton);
        });

        expect(Object.keys(vdom.props.children)).to.have.length(2);
        expect(vdom.props.children[0].props).to.have.property('name', 'cloud');
        expect(vdom.props.children[1].props).to.have.property('name', 'arrow');
    });

    it('should position a group of buttons with equal widths', () => {
        props.equal = true;
        let tree = sd.shallowRender($(Element, props, iconButtonsChildren));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/two/);
    });

    it('should force an equal width group with one child to be fluid', () => {
        props.equal = true;
        let tree = sd.shallowRender($(Element, props, <Button/>));
        let vdom = tree.getRenderOutput();

        expect(vdom.props.className).to.match(/fluid/);
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
            expect(vdom.props).to.have.property('children', undefined);
            expect(vdom.props).to.have.property('className');
        });

        it('passes the className prop', () => {
            expect(vdom.props.className).to.match(regex);
        });

        it('passes unused data props', () => {
            props['data-test'] = 'test';
            props['dataTest'] = 'test';

            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            // length = props.length + className + children
            //      4 = 2            + 1         + 1
            expect(Object.keys(vdom.props).length).to.equal(4);
            expect(vdom.props).to.have.property('data-test', 'test');
            expect(vdom.props).to.have.property('dataTest', 'test');
        });
    });
});
