/* global sinon */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Menu } from '../menu';
import { Dropdown } from '../../../modules';
import MenuItem from '../menuitem';

describe('Menu', () => {
    it('It renders as div by default', () => {
        let wrapper = shallow(<Menu />);
        expect(wrapper).to.have.tagName('div');
        expect(wrapper).to.have.className('ui menu');
    });
    
    it('It renders as custom component', () => {
        let wrapper = shallow(<Menu component="ul"/>);
        expect(wrapper).to.have.tagName('ul');
        expect(wrapper).to.have.className('ui menu');
    });
    
    it('Could be right menu', () => {
        let wrapper = shallow(<Menu right/>);
        expect(wrapper).to.have.className('right');
    });
    
    it('Could be borderless', () => {
        let wrapper = shallow(<Menu borderless/>);
        expect(wrapper).to.have.className('borderless');
    });
    
    it('Could be attached at top', () => {
        let wrapper = shallow(<Menu attached="top"/>);
        expect(wrapper).to.have.className('top attached');
    });
    
    it('Could be attached at bottom', () => {
        let wrapper = shallow(<Menu attached="bottom"/>);
        expect(wrapper).to.have.className('bottom attached');
    });
    
    it('Could be inverted', () => {
        let wrapper = shallow(<Menu inverted/>);
        expect(wrapper).to.have.className('inverted');
    });
    
    it('Could be pagination menu', () => {
        let wrapper = shallow(<Menu pagination/>);
        expect(wrapper).to.have.className('pagination');
    });
    
    it('Could be pointing', () => {
        let wrapper = shallow(<Menu pointing/>);
        expect(wrapper).to.have.className('pointing');
    });
    
    it('Could be secondary', () => {
        let wrapper = shallow(<Menu secondary/>);
        expect(wrapper).to.have.className('secondary');
    });
    
    it('Could be tabular', () => {
        let wrapper = shallow(<Menu tabular/>);
        expect(wrapper).to.have.className('tabular');
    });
    
    it('Could be vertical', () => {
        let wrapper = shallow(<Menu vertical/>);
        expect(wrapper).to.have.className('vertical');
    });
    
    it('Could be fluid', () => {
        let wrapper = shallow(<Menu fluid/>);
        expect(wrapper).to.have.className('fluid');
    });
    
    it('Could be fixed', () => {
        let wrapper = shallow(<Menu fixed/>);
        expect(wrapper).to.have.className('fixed');
    });
    
    it('Could be fitted', () => {
        let wrapper = shallow(<Menu fitted/>);
        expect(wrapper).to.have.className('fitted');
    });
    
    it('Could be fitted horizontally', () => {
        let wrapper = shallow(<Menu fitted="horizontally"/>);
        expect(wrapper).to.have.className('horizontally fitted');
    });
    
    it('Could be fitted vertically', () => {
        let wrapper = shallow(<Menu fitted="vertically"/>);
        expect(wrapper).to.have.className('vertically fitted');
    });
    
    it('Could be text menu', () => {
        let wrapper = shallow(<Menu text/>);
        expect(wrapper).to.have.className('text');
    });
    
    describe('Could be item equal width menu', () => {
        it('Should have <number> item class when even prop was specified', () => {
            let wrapper = shallow(<Menu even><MenuItem /><MenuItem /></Menu>);
            expect(wrapper).to.have.className('item menu two');
        });
        
        it('Shouldn\'t have <number> item calss when there are no MenuItems childs', () => {
            let wrapper = shallow(<Menu even />);
            expect(wrapper).to.have.not.className('item');
        });
    });
    
    describe('Shouldn\'t have default ui class', () => {
        it('When menu is a child of another menu', () => {
            let wrapper = shallow(<Menu><Menu /></Menu>);
            expect(wrapper).to.have.className('ui');
            expect(wrapper.children()).to.have.not.className('ui');
        });
        
        it('When menu is a child of dropdown', () => {
            let wrapper = shallow(<Dropdown><Menu /></Dropdown>);
            expect(wrapper.find(Menu)).to.have.not.className('ui');
        });
    });
    
    describe('When menuValue property provided', () => {
        let childrens = [];
        childrens.push(<MenuItem className="first"
                                 key={1} 
                                 menuValue={1}>First</MenuItem>);
        childrens.push(<MenuItem className="second"
                                 key={2} 
                                 menuValue={2}>Second</MenuItem>);
        childrens.push(<MenuItem className="third"
                                 key={3} 
                                 menuValue={3}>Third</MenuItem>);
        
        it('Should set activeItem state to the provided value', () => {
            let wrapper = shallow(<Menu menuValue={1}>{childrens}</Menu>);
            expect(wrapper).to.have.state('activeItem', 1);
        });
        
        it('Should add click handlers to MenuItem childs', () => {
            let wrapper = shallow(<Menu menuValue={1}>{childrens}</Menu>);
            expect(wrapper).to.have.exactly(3).descendants(MenuItem);
            expect(wrapper.find(MenuItem).at(0)).to.have.prop('onClick');
            expect(wrapper.find(MenuItem).at(1)).to.have.prop('onClick');
            expect(wrapper.find(MenuItem).at(2)).to.have.prop('onClick');
        });
        
        it('Should render MenuItem as active when MenuItem value is matched by provided value', () => {
            let wrapper = shallow(<Menu menuValue={1}>{childrens}</Menu>);
            expect(wrapper.find(MenuItem).at(0)).to.have.prop('active', true);
            wrapper = shallow(<Menu menuValue={3}>{childrens}</Menu>);
            expect(wrapper.find(MenuItem).at(2)).to.have.prop('active', true);
            expect(wrapper.find(MenuItem).at(0)).to.have.prop('active', false);
        });
        
        describe('When clicking on active MenuItem', () => {
            let eventStub = {
                stopPropagation: sinon.stub(),
                preventDefault: sinon.stub()
            };
            it('Should fire onMenuItemClick callback', () => {
                let onMenuItemClickStub = sinon.stub();
                let wrapper = shallow(
                    <Menu menuValue={1}
                          onMenuItemClick={onMenuItemClickStub}
                    >
                        {childrens}
                    </Menu>
                );
                
                wrapper.find('.first').simulate('click', eventStub);
                expect(onMenuItemClickStub).to.have.been.called;
                
            });
            
            it('Shouldn\'t fire onMenuChange callback', () => {
                let onMenuChangeStub = sinon.stub();
                let wrapper = shallow(
                    <Menu menuValue={1}
                          onMenuChange={onMenuChangeStub}
                    >
                        {childrens}
                    </Menu>
                );

                wrapper.find('.first').simulate('click', eventStub);
                expect(onMenuChangeStub).to.have.not.been.called;
            });
        });
        
        describe('When clicking on non-active MenuItem', () => {
            let eventStub = {
                stopPropagation: sinon.stub(),
                preventDefault: sinon.stub()
            };
            it('Should fire onMenuItemSelect callback', () => {
                let onMenuItemClickStub = sinon.stub();
                let wrapper = shallow(
                    <Menu menuValue={1}
                          onMenuItemClick={onMenuItemClickStub}
                    >
                        {childrens}
                    </Menu>
                );

                wrapper.find('.second').simulate('click', eventStub);
                expect(onMenuItemClickStub).to.have.been.called;
            });

            it('Should fire onMenuChange callback', () => {
                let onMenuChangeStub = sinon.stub();
                let wrapper = shallow(
                    <Menu menuValue={1}
                          onMenuChange={onMenuChangeStub}
                    >
                        {childrens}
                    </Menu>
                );

                wrapper.find('.second').simulate('click', eventStub);
                expect(onMenuChangeStub).to.have.been.called;
            });
            it('Should set activeItem to the new value and rerended active menuitem', () => {
                let wrapper = shallow(
                    <Menu menuValue={1}>
                        {childrens}
                    </Menu>
                );

                wrapper.find('.second').simulate('click', eventStub);
                expect(wrapper).to.have.state('activeItem', 2);
                wrapper.update();
                expect(wrapper.find(MenuItem).at(0)).to.have.prop('active', false);
                expect(wrapper.find(MenuItem).at(1)).to.have.prop('active', true);
            });
        });
        
    });
});