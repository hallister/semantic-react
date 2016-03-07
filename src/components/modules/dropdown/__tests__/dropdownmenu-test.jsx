/* eslint-disable react/jsx-max-props-per-line */
/* global sinon */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { Icon, Text, Button } from '../../../elements';
import { Menu, MenuItem } from '../../../views';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import DropdownMenu from '../dropdownmenu';
import DropdownElement from '../dropdownelement';

const fakeEvent = {
    preventDefault: sinon.stub(),
    stopPropagation: sinon.stub()
};

const consumedProps = {
    enterAnimation: {},
    icon: 'test',
    label: 'test',
    leaveAnimation: {},
    menuComponent: 'a',
    onMenuItemClick: () => {}
};

describe.only('DropdownMenu', () => {
    it('Should render dropdown element', () => {
        let wrapper = shallow(<DropdownMenu/>);
        expect(wrapper.type()).to.be.equal(DropdownElement);
    });

    it('Should render dropdown icon by default', () => {
        let wrapper = shallow(<DropdownMenu/>);
        expect(wrapper.find(Icon)).to.be.exist;
        expect(wrapper.find(Icon)).to.have.prop('name', 'dropdown');
    });

    it('Should have state active in false by default', () => {
        let wrapper = shallow(<DropdownMenu/>);
        expect(wrapper).to.have.state('active', false); 
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
            let wrapper = shallow(<DropdownMenu label="Dropdown" icon="cloud" component={Button}/>);
            expect(wrapper).to.have.prop('component', Button);
            expect(wrapper).to.not.contain(<Text>Dropdown</Text>);
            expect(wrapper.find(Icon)).to.not.exist;
        });

        it('Should render icon and label if component is the html element', () => {
            let wrapper = shallow(<DropdownMenu label="Dropdown" icon="cloud" component="a"/>);
            expect(wrapper).to.have.prop('component', 'a');
            expect(wrapper).to.contain(<Text>Dropdown</Text>);
            expect(wrapper.find(Icon)).to.exist;
        });
    });

    describe('When dropdown active', () => {
        it('Should render menu', () => {
            let wrapper = shallow(<DropdownMenu active/>);
            expect(wrapper.find(Menu)).to.be.exist;
            expect(wrapper.find(Menu)).to.have.style('overflow', 'hidden');
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
    });

    it('Will change state if active prop was changed', () => {
        let wrapper = shallow(<DropdownMenu/>);
        expect(wrapper).to.have.state('active', false);
        wrapper.setProps({ active: true });
        expect(wrapper).to.have.state('active', true);
    });

    describe('When clicking on dropdown element', () => {
        it('Should invert state', () => {
            let wrapper = shallow(<DropdownMenu/>);
            expect(wrapper).to.have.state('active', false);
            wrapper.simulate('click', fakeEvent);
            expect(wrapper).to.have.state('active', true);
            
            wrapper = shallow(<DropdownMenu active/>);
            wrapper.simulate('click', fakeEvent);
            expect(wrapper).to.have.state('active', false);
        });
    });

    describe('When menu item clicked', () => {
        it('Should send active state to false', () => {
            let wrapper = shallow(
                <DropdownMenu active>
                    <MenuItem menuValue={1}>First</MenuItem>
                </DropdownMenu>
            );
            expect(wrapper).to.have.state('active', true);
            wrapper.find(Menu).prop('onMenuItemClick')(1);
            expect(wrapper).to.have.state('active', false);
        });

        it('Should fire onMenuItemClick prop callback', () => {
            let callbackStub = sinon.stub();
            let wrapper = shallow(
                <DropdownMenu active onMenuItemClick={callbackStub}>
                    <MenuItem menuValue={1}>First</MenuItem>
                </DropdownMenu>
            );
            wrapper.find(Menu).prop('onMenuItemClick')(1);
            expect(callbackStub).to.have.been.called;
        });
    });

    describe('When clicking outside of menu', () => {
        it('Should set active state to false', () => {
            const container = document.createElement('div');
            container.id = 'test';
            document.body.appendChild(container);
            // Full DOM rendering here
            let wrapper = mount(
                <DropdownMenu active>
                    <MenuItem menuValue={1}>First</MenuItem>
                </DropdownMenu>,
                { attachTo: container }
            );

            expect(wrapper).to.have.state('active', true);
            const extraNode = document.createElement('button');
            document.body.appendChild(extraNode);
            let event = new MouseEvent('mousedown', { target: extraNode });
            document.dispatchEvent(event);
            expect(wrapper).to.have.state('active', false);
            document.body.removeChild(extraNode);
            document.body.removeChild(container);
        });
    });
    
    itShouldConsumeOwnAndPassCustomProps(DropdownMenu, consumedProps);
});
