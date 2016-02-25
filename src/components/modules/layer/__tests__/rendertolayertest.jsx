/* eslint-env node, mocha */
/* global sinon */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { RenderToLayer } from '../render-to-layer';

let TestComponent = () => <h1>SPARTA!</h1>;

// Need to use FULL DOM rendering here
describe('RenderToLayer', () => {
    let wrapper;
    afterEach(() => {
        wrapper.unmount();
    });
    it('It should render empty layer div if render prop doesn\'t return proper component', () => {
        wrapper = mount(<RenderToLayer open
                             render={() => {}} />);
        expect(document.body.getElementsByTagName('div').length).to.equal(1);
        expect(document.body.getElementsByTagName('div').item(0).children.length).to.equal(0);
        document.body.children
    });

    it('It should render provided content into div appended to body', () => {
        wrapper = mount(<RenderToLayer open
                                       render={() => <TestComponent />} />);
        expect(document.body.getElementsByTagName('div').length).to.equal(1);
        expect(document.body.getElementsByTagName('h1').length).to.equal(1);
        expect(document.body.getElementsByTagName('h1').item(0).textContent).to.equal('SPARTA!')
    });

    it('Should unrender layer when prop open was changed to false', () => {
        wrapper = mount(<RenderToLayer open
                                       render={() => <TestComponent />} />);
        expect(document.body.getElementsByTagName('h1').length).to.equal(1);
        wrapper.setProps({ open: false });
        expect(document.body.getElementsByTagName('h1').length).to.equal(0);
        expect(document.body.getElementsByTagName('div').length).to.equal(0);
    });

    it('Should create invisible layer which prevents clicking to other elements', () => {
        wrapper = mount(<RenderToLayer open
                                       render={() => <TestComponent />} />);

        expect(document.body.getElementsByTagName('div').item(0).style.top).to.equal('0px');
        expect(document.body.getElementsByTagName('div').item(0).style.bottom).to.equal('0px');
        expect(document.body.getElementsByTagName('div').item(0).style.right).to.equal('0px');
        expect(document.body.getElementsByTagName('div').item(0).style.left).to.equal('0px');
    });

    it('Shouldn\'t create invisible layer when useLayerForClickAway=false', () => {

        let button = document.createElement('button');
        let buttonClickSpy = sinon.spy();
        button.onclick = buttonClickSpy;
        document.body.appendChild(button);

        wrapper = mount(<RenderToLayer open
                                       render={() => <TestComponent />}
                                       useLayerForClickAway={false} />);

        // cannot use TestUtils and wrapper.simulate() here
        let event = new MouseEvent('click', { view: window });
        button.dispatchEvent(event);
        expect(buttonClickSpy).to.have.been.called;
    });
});