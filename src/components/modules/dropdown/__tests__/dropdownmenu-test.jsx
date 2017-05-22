/* eslint-disable react/jsx-max-props-per-line */
/* global sinon */
import React from 'react';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Icon, Text, Button } from '../../../elements';
import { Menu, MenuItem } from '../../../views';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import DropdownMenu from '../dropdownmenu';
import DropdownElement from '../dropdownelement';

const consumedProps = {
    enter: 'scale in',
    leave: 'scale out',
    enterDuration: 100,
    leaveDuration: 100,
    icon: 'test',
    label: 'test',
    menuComponent: 'a',
    menuValue: ['test'],
    onMenuItemClick: () => {},
    onMenuChange: () => {},
    onRequestClose: () => {}
};

describe('DropdownMenu', () => {
    it('Should render dropdown element', () => {
        let wrapper = shallow(<DropdownMenu/>);
        expect(wrapper.type()).to.be.equal(DropdownElement);
    });

    it('Should render dropdown icon by default', () => {
        let wrapper = shallow(<DropdownMenu/>);
        expect(wrapper.find(Icon)).to.be.exist;
        expect(wrapper.find(Icon)).to.have.prop('name', 'dropdown');
    });

    it('Could render specified icon', () => {
        let wrapper = shallow(<DropdownMenu icon="cloud"/>);
        expect(wrapper.find(Icon)).to.have.prop('name', 'cloud');
    });

    it('Could render specified label', () => {
        let wrapper = shallow(<DropdownMenu label="Dropdown"/>);
        expect(wrapper).to.contain(<Text>Dropdown</Text>);
    });


    describe('When component was specified', () => {
        it('Shouldn\'t render icon and label if component is custom one', () => {
            let wrapper = shallow(<DropdownMenu component={Button} icon="cloud" label="Dropdown"/>);
            expect(wrapper).to.have.prop('component', Button);
            expect(wrapper).to.not.contain(<Text>Dropdown</Text>);
            expect(wrapper.find(Icon)).to.not.exist;
        });

        it('Should render icon and label if component is the html element', () => {
            let wrapper = shallow(<DropdownMenu component="a" icon="cloud" label="Dropdown"/>);
            expect(wrapper).to.have.prop('component', 'a');
            expect(wrapper).to.contain(<Text>Dropdown</Text>);
            expect(wrapper.find(Icon)).to.exist;
        });
    });

    describe('When dropdown is not active', () => {
        it('Shouldn\'t render the menu', () => {
            let wrapper = shallow(<DropdownMenu/>);
            expect(wrapper.find(Menu)).to.not.be.exist;
        });
    });

    describe('When dropdown active', () => {
        it('Should render menu', () => {
            let wrapper = shallow(<DropdownMenu active/>);
            expect(wrapper.find(Menu)).to.be.exist;
            expect(wrapper.find(Menu)).to.have.prop('onMenuItemClick', wrapper.instance().onMenuItemClick);
        });

        it('Should pass active prop to dropdown element', () => {
            let wrapper = shallow(<DropdownMenu active/>);
            expect(wrapper.find(DropdownElement)).to.have.prop('active', true);
        });

        it('Could render different component as menu', () => {
            let wrapper = shallow(<DropdownMenu active menuComponent="section"/>);
            expect(wrapper.find('section')).to.be.exist;
        });

        it('Should attach callbacks to the menu', () => {
            let onMenuItemClickStub = sinon.stub();
            let onMenuChangeStub = sinon.stub();
            let wrapper = shallow(<DropdownMenu active onMenuChange={onMenuChangeStub} onMenuItemClick={onMenuItemClickStub}/>);
            expect(wrapper.find(Menu)).to.have.prop('onMenuItemClick', onMenuItemClickStub);
            expect(wrapper.find(Menu)).to.have.prop('onMenuChange', onMenuChangeStub);
        });

        it('Should pass menuValue to menu', () => {
            let wrapper = shallow(<DropdownMenu active menuValue={1}/>);
            expect(wrapper.find(Menu)).to.have.prop('menuValue', 1);
            
            wrapper.setProps({
                menuValue: [1, 2]
            });
            expect(wrapper.find(Menu)).to.have.prop('menuValue').deep.equal([1, 2]);
        });
    });


    describe('When clicking outside of menu', () => {
        let container;
        let extraNode;
        beforeEach(() => {
            container = document.createElement('div');
            container.id = 'test';
            document.body.appendChild(container);
            extraNode = document.createElement('button');
            document.body.appendChild(extraNode);
        });
        afterEach(() => {
            document.body.removeChild(extraNode);
            document.body.removeChild(container);
        });
        it('Should call onRequestClose callback', () => {
            const callbackSpy = sinon.spy();
            // Full DOM rendering here
            mount(
                <DropdownMenu active onRequestClose={callbackSpy}>
                    <MenuItem menuValue={1}>First</MenuItem>
                </DropdownMenu>,
                { attachTo: container }
            );

            let event = new MouseEvent('mousedown', { target: extraNode });
            document.dispatchEvent(event);
            expect(callbackSpy).to.have.been.called;
            
        });

        it('Shouldn\'t call onRequestClose callback when clicking on the dropdown itself', () => {
            const callbackSpy = sinon.spy();
            let wrapper = mount(
                <DropdownMenu active onRequestClose={callbackSpy}>
                    <MenuItem menuValue={1}>First</MenuItem>
                </DropdownMenu>,
                { attachTo: container }
            );
            let dropdownNode = ReactTestUtils.findRenderedDOMComponentWithClass(wrapper.instance(), 'ui dropdown');
            let event = new MouseEvent('mousedown', { target: dropdownNode });
            dropdownNode.dispatchEvent(event);
            expect(callbackSpy).to.have.not.been.called;
        });
    });
    
    itShouldConsumeOwnAndPassCustomProps(DropdownMenu, consumedProps);
});
