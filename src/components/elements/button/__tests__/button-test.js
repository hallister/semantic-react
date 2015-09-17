import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Button as Element, Segment } from '../../../elements';
import { render, renderDeep, className, type, getOutput, getNode, TestProps } from '../../../test';

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
			render(props, Element);

			expect(className()).toMatch(/ui button/);
		});

		it('renders as a custom HTML element', () => {
			props.component = 'div';
			render(props, Element);

			expect(type()).toEqual('div');
		});	
	})

	describe('should have color variations', () => {
		beforeEach(function() {
			props = {};
		});

		describe('should emphasize prominence', () => {
			it('has primary emphasis', () => {
				props.primary = true;
				render(props, Element);

				expect(className()).toMatch(/primary/);
			});

			it('has secondary emphasis', () => {
				props.secondary = true;
				render(props, Element);

				expect(className()).toMatch(/secondary/);
			});
		});

		describe('should emphasize consequence', () => {
			it('has positive consequence', () => {
				props.positive = true;
				render(props, Element);

				expect(className()).toMatch(/positive/);
			});

			it('has negative consequence', () => {
				props.negative = true;
				render(props, Element);

				expect(className()).toMatch(/negative/);
			});
		});
	});

	describe('should animate', () => {
		it('animates horizontally', () => {
			props.animated = true;
			render(props, Element);

			expect(className()).toMatch(/animated/);
		});

		it('animates vertically', () => {
			props.animated = 'vertical';
			render(props, Element);

			expect(className()).toMatch(/vertical animated/);
		});

		it('animates by fading in/out', () => {
			props.animated = 'fade';
			render(props, Element);

			expect(className()).toMatch(/fade animated/);
		});
	});

	it('should be less pronounced', () => {
		props.basic = true;
		render(props, Element);

		expect(className()).toMatch(/basic/);
	});

	it('should be noticable on dark backgrounds', () => {
		props.inverted = true;
		render(props, Element);

		expect(className()).toMatch(/inverted/);
	});

	describe('should be stateful', () => {
		beforeEach(function() {
			props = {};
		});

		it('has an active state', () => {
			props.active = true;
			render(props, Element);

			expect(className()).toMatch(/active/);
		});

		it('has a disabled state', () => {
			props.disabled = true;
			render(props, Element);

			expect(className()).toMatch(/disabled/);
		});

		it('has a loading state', () => {
			props.loading = true;
			render(props, Element);

			expect(className()).toMatch(/loading/);
		});
	});

	it('should have various sizes', () => {
		props.size = 'small';
		render(props, Element);

		expect(className()).toMatch(/small/);
		expect(className()).not.toMatch(/size/);
	});

	describe('should float', () => {
		it('floats right', () => {
			props.floated = 'right';
			render(props, Element);

			expect(className()).toMatch(/right floated/);
		});

		it('floats left', () => {
			props.floated = 'left';
			render(props, Element);

			expect(className()).toMatch(/left floated/);
		});
	});

	it('should support colors', () => {
		props.color = 'yellow';
		render(props, Element);

		expect(className()).toMatch(/yellow/);
		expect(className()).not.toMatch(/color/);
	});

	it('should be compact', () => {
		props.compact = true;
		render(props, Element);

		expect(className()).toMatch(/compact/);
	});

	it('should fill it\'s parent container', () => {
		props.fluid = true;
		render(props, Element);

		expect(className()).toMatch(/fluid/);
	});

	it('should take a circular shape', () => {
		props.circular = true;
		render(props, Element);

		expect(className()).toMatch(/circular/);
	});

	describe('should attach to other objects', () => {
		it('can attach to the top of an attachable element', () => {
			let attached = TestUtils.renderIntoDocument(
				<Segment>
					<Element attached="top">
						Top
					</Element>
					<Segment attached="bottom">
						Bottom
					</Segment>
				</Segment>
			);

			let button = TestUtils.findRenderedDOMComponentWithClass(attached, 'button');

			expect(button.className).toMatch(/top attached/);
			expect(button.nodeName).toEqual('DIV');
		});

		it('can attach to the bottom of an attachable element', () => {
			let attached = TestUtils.renderIntoDocument(
				<Segment>
					<Segment attached="top">
						Bottom
					</Segment>
					<Element attached="bottom">
						Top
					</Element>
				</Segment>
			);

			let button = TestUtils.findRenderedDOMComponentWithClass(attached, 'button');

			expect(button.className).toMatch(/bottom attached/);
			expect(button.nodeName).toEqual('DIV');
		});

		it('can attach to the left or right of a another button', () => {
			let attached = TestUtils.renderIntoDocument(
				<Segment>
					<Element attached="left">
						Bottom
					</Element>
					<Element attached="right">
						Top
					</Element>
				</Segment>
			);

			let buttons = TestUtils.scryRenderedDOMComponentsWithClass(attached, 'button');

			expect(buttons.length).toEqual(2);

			expect(buttons[0].className).toMatch(/left attached/);
			expect(buttons[0].nodeName).toEqual('DIV');

			expect(buttons[1].className).toMatch(/right attached/);
			expect(buttons[1].nodeName).toEqual('DIV');	
		});
	});

	describe('it should properly pass props', () => {
		Object.keys(consumedProps).forEach(key => {
			props[key] = consumedProps[key];
		});

		let button = renderDeep(props, Element);

		it('consumes all used props', () => {
			expect(getNode(button).attributes.length).toEqual(2);
		});

		it('passes the className prop', () => {
			expect(getNode(button).className).toMatch(consumedProps['className']);
		});

		it('passes unused data props', () => {
			props['data-test'] = 'test';
			props['dataTest'] = 'test';

			let button = renderDeep(props, TestProps);

			expect(Object.keys(button.props).length).toEqual(2);
			expect(button.props['data-test']).toEqual('test');
			expect(button.props['dataTest']).toEqual('test');
		});

	});


});
