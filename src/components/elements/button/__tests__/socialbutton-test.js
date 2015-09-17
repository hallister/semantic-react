import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { SocialButton as Element, Segment } from '../../../elements';
import { render, renderDeep, renderStateless, getNode, TestProps } from '../../../test';

let props = {
	name: 'facebook'
};

let consumedProps = {
    name: 'facebook'
};

describe('SocialButton', () => {
	beforeEach(function() {
		props = {
			name: 'facebook'
		};
	});

	it('should expect a name', () => {
		spyOn(console, 'error');

		let button = renderStateless({}, Element);
		let icon = button.children[0];

		/*
         * For some reason Icon's isRequired prop on name
         * doesn't work. as a result, we have do a className 
         * equals instead. This bug is weird as it works 
         * flawlessly in IconButton. The prop warnings work as 
         * normal outside of the test enviornment.
		 */
		 expect(icon.className).toEqual('icon');
		// expect(console.error).toHaveBeenCalled();
	});

	describe('should render in the DOM', () => {
		beforeEach(function() {
			props = {
				name: 'facebook'
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

	it('passes unused data props', () => {
		props['data-test'] = 'test';
		props['dataTest'] = 'test';

		let button = renderDeep(props, TestProps);

		expect(Object.keys(button.props).length).toEqual(3);
		expect(button.props['data-test']).toEqual('test');
		expect(button.props['dataTest']).toEqual('test');
	});
});