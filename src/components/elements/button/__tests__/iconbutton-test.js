import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { IconButton as Element, Segment } from '../../../elements';
import { render, renderStateless, renderDeep, getNode, TestProps } from '../../../test';

let props = {
	name: 'cloud'
};

let consumedProps = {
    iconColor: 'red',
    name: 'test'
};

describe('IconButton', () => {
	beforeEach(function() {
		props = {
			name: 'cloud'
		};
	});

	it('should expect a name', () => {
		spyOn(console, 'error');

		renderStateless({}, Element);

		expect(console.error).toHaveBeenCalled();
	});

	describe('should render in the DOM', () => {
		beforeEach(function() {
			props = {
				name: 'cloud'
			};
		});

		it('renders as <div>', () => {
			let button = renderStateless(props, Element);

			expect(getNode(button).className).toMatch(/ui icon button/);
		});

		it('renders as a custom HTML element', () => {
			props.component = 'button';
			let button = renderStateless(props, Element);

			expect(getNode(button).nodeName).toEqual('BUTTON');
		});	
	});

	it('should have a single icon child', () => {
		let button = renderStateless(props, Element);
		let icon = button.children[0];

		expect(button.children.length).toEqual(1);
		expect(icon.nodeName).toEqual('I');
		expect(icon.className).toMatch(props.name);
	});

	it('should allow the icon to change color', () => {
		props.iconColor = 'yellow';
		let button = renderStateless(props, Element);
		let icon = button.children[0];

		expect(icon.className).toMatch(/yellow/);
	});

	it('should allow the button to change color', () => {
		props.color = 'yellow';
		let button = renderStateless(props, Element);

		expect(button.className).toMatch(/yellow/);
	});

	it('passes unused data props', () => {
		props['data-test'] = 'test';
		props['dataTest'] = 'test';

		let button = renderDeep(props, TestProps);

		expect(Object.keys(button.props).length).toEqual(3);
		expect(button.props['data-test']).toEqual('test');
		expect(button.props['dataTest']).toEqual('test');
	});
});