import React, { createElement as $ } from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { IconButton as Element, Button, Icon } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';


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
		sinon.test(function() {
			let spy = sinon.stub(console, 'error');

	        let tree = sd.shallowRender($(Element));
	        let vdom = tree.getRenderOutput();

			assert(spy.called);
		});
	});

	describe('should render in the DOM', () => {
		beforeEach(function() {
			props = {
				name: 'cloud'
			};
		});

		it('renders as <Button>', () => {
	        let tree = sd.shallowRender($(Element, props));
	        let vdom = tree.getRenderOutput();

			expect(vdom.props).has.property('icon', true);
			expect(vdom.type).to.equal(Button);
		});

		it('passes the custom component to <Button>', () => {
			props.component = 'div';
	        let tree = sd.shallowRender($(Element, props));
	        let vdom = tree.getRenderOutput();
	        let instance = tree.getMountedInstance();

			expect(vdom.props).has.property('component', 'div');
		});
	});

	it('should have a single icon child', () => {
	    let tree = sd.shallowRender($(Element, props));
	    let vdom = tree.getRenderOutput();
		let icon = vdom.props.children[0];

		expect(Object.keys(vdom.props.children)).to.have.length(1);
		expect(icon.type).to.deep.equal(Icon);
		expect(icon.props.name).to.equal('cloud');
	});

	it('should have a single icon child and a label', () => {
	    let tree = sd.shallowRender($(Element, props, 'Label'));
	    let vdom = tree.getRenderOutput();
		let icon = vdom.props.children[0];
		let text = vdom.props.children[1];

		expect(Object.keys(vdom.props.children)).to.have.length(2);
		expect(text).to.equal('Label');
		expect(icon.type).to.deep.equal(Icon);
		expect(icon.props.name).to.equal('cloud');
	});

	it('should allow the icon to change color', () => {
		props.iconColor = 'yellow';
	    let tree = sd.shallowRender($(Element, props));
	    let vdom = tree.getRenderOutput();
	    let icon = vdom.props.children[0];

		expect(icon.props.color).to.equal('yellow');
	});

	it('should allow the button to change color', () => {
		props.color = 'yellow';
	    let tree = sd.shallowRender($(Element, props));
	    let vdom = tree.getRenderOutput();
	    let instance = tree.getMountedInstance();

		expect(vdom.props.color).to.equal('yellow');
	});

    it('passes unused data props', () => {
        props['data-test'] = 'test';
        props['dataTest'] = 'test';
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        // length = parentDefaultProps + props.length + addProps(icon) + children
        //      7 = 3                  + 2            + 1              + 1
        expect(Object.keys(vdom.props).length).to.equal(7);
        expect(vdom.props).to.have.property('data-test', 'test');
        expect(vdom.props).to.have.property('dataTest', 'test');
    });
});
