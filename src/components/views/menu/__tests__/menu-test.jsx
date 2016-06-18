/* eslint-disable react/jsx-max-props-per-line */
/* global sinon */
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Menu from '../menu';
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

    it('Could be borderless', () => {
        let wrapper = shallow(<Menu borderless/>);
        expect(wrapper).to.have.className('borderless');
    });

    it('Could be colored', () => {
        let wrapper = shallow(<Menu color="blue"/>);
        expect(wrapper).to.have.className('blue');
    });

    it('Could be left fixed', () => {
        let wrapper = shallow(<Menu fixed="left"/>);
        expect(wrapper).to.have.className('left fixed');
    });

    it('Could be right fixed', () => {
        let wrapper = shallow(<Menu fixed="right"/>);
        expect(wrapper).to.have.className('right fixed');
    });

    it('Could be top fixed', () => {
        let wrapper = shallow(<Menu fixed="top"/>);
        expect(wrapper).to.have.className('top fixed');
    });

    it('Could be bottom fixed', () => {
        let wrapper = shallow(<Menu fixed="bottom"/>);
        expect(wrapper).to.have.className('bottom fixed');
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

    describe('It could be floated', () => {
        it('Left', () => {
            let wrapper = shallow(<Menu floated="left"/>);
            expect(wrapper).to.have.className('left');
        });

        it('Right', () => {
            let wrapper = shallow(<Menu floated="right"/>);
            expect(wrapper).to.have.className('right');
        });
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
            let wrapper = shallow(<Menu />, { context: { isDropdownChild: true } });
            expect(wrapper).to.have.not.className('ui');
        });
    });

    it('It should add click handlers to menu items', () => {
        let wrapper = shallow(
            <Menu>
                <MenuItem menuValue={1}>First</MenuItem>
                <MenuItem menuValue={2}>Second</MenuItem>
            </Menu>);
        expect(wrapper.find(MenuItem).at(0)).to.have.prop('onClick');
        expect(wrapper.find(MenuItem).at(1)).to.have.prop('onClick');
    });


    it('If child item has active property it should pass it untouched', () => {
        let wrapper = shallow(
            <Menu>
                <MenuItem active menuValue={1}>First</MenuItem>
                <MenuItem active menuValue={2}>Second</MenuItem>
            </Menu>
        );
        expect(wrapper.find(MenuItem).at(0)).to.have.prop('active', true);
        expect(wrapper.find(MenuItem).at(1)).to.have.prop('active', true);
    });

    describe('When clicking on active MenuItem', () => {
        let eventStub = {
            stopPropagation: sinon.stub(),
            preventDefault: sinon.stub()
        };
        it('Should call onMenuItemClick callback', () => {
            let onMenuItemClickStub = sinon.stub();
            let wrapper = shallow(
                <Menu onMenuItemClick={onMenuItemClickStub}>
                    <MenuItem menuValue={1}>Test</MenuItem>
                </Menu>
            );

            wrapper.find(MenuItem).simulate('click', eventStub);
            expect(onMenuItemClickStub).to.have.been.called;
        });

        it('Shouldn\'t call onMenuItemClick callback if menu item doesn\'t have menuValue property', () => {
            let onMenuItemClickStub = sinon.stub();
            let wrapper = shallow(
                <Menu onMenuItemClick={onMenuItemClickStub}>
                    <MenuItem>Test</MenuItem>
                </Menu>
            );

            wrapper.find(MenuItem).simulate('click', eventStub);
            expect(onMenuItemClickStub).to.have.not.been.called;
        });
    });

    describe('When menuValue property provided', () => {
        let childrens = [];
        childrens.push(<MenuItem className="first"
                                 key={1}
                                 menuValue={1}
                       >First</MenuItem>
        );
        childrens.push(<MenuItem className="second"
                                 key={2}
                                 menuValue={2}
                       >Second</MenuItem>
        );
        childrens.push(<MenuItem className="third"
                                 key={3}
                                 menuValue={3}
                       >Third</MenuItem>
        );


        it('Should render MenuItem as active when MenuItem value is matched by provided value', () => {
            let wrapper = shallow(<Menu menuValue={1}>{childrens}</Menu>);
            expect(wrapper.find(MenuItem).at(0)).to.have.prop('active', true);
            wrapper = shallow(<Menu menuValue={3}>{childrens}</Menu>);
            expect(wrapper.find(MenuItem).at(2)).to.have.prop('active', true);
            expect(wrapper.find(MenuItem).at(0)).to.have.prop('active', false);
        });

        it('Should work if array was given', () => {
            let wrapper = shallow(<Menu menuValue={[2, 3]}>{childrens}</Menu>);
            expect(wrapper.find(MenuItem).at(0)).to.have.prop('active', false);
            expect(wrapper.find(MenuItem).at(1)).to.have.prop('active', true);
            expect(wrapper.find(MenuItem).at(2)).to.have.prop('active', true);
        });

        describe('When clicking on menu item', () => {
            let eventStub = {
                stopPropagation: sinon.stub(),
                preventDefault: sinon.stub()
            };
            describe('When single menuValue was provided to Menu', () => {
                it('Should call onMenuChange callback if menu item value doesn\'t match with provided value in menu', () => {
                    let onMenuChangeStub = sinon.stub();
                    let wrapper = shallow(<Menu menuValue={1} onMenuChange={onMenuChangeStub}>{childrens}</Menu>);
                    wrapper.find('.second').simulate('click', 2, eventStub);
                    expect(onMenuChangeStub).to.have.been.calledWith(2);
                });

                it('Should call onMenuChange callback with null if menu item value is equal to provided value in menu', () => {
                    let onMenuChangeStub = sinon.stub();
                    let wrapper = shallow(<Menu menuValue={1} onMenuChange={onMenuChangeStub}>{childrens}</Menu>);
                    wrapper.find('.first').simulate('click', 1, eventStub);
                    expect(onMenuChangeStub).to.have.been.calledWith(null);
                });
            });

            describe('When array of menuValue was given to Menu', () => {
                it('Should call onMenuChange callback with original array and new menuValue if it wasn\'t presented in given array', () => {
                    let onMenuChangeStub = sinon.stub();
                    let wrapper = shallow(<Menu menuValue={[1, 2]} onMenuChange={onMenuChangeStub}>{childrens}</Menu>);
                    wrapper.find('.third').simulate('click', 3, eventStub);
                    expect(onMenuChangeStub).to.have.been.calledWith([1, 2, 3]);

                    wrapper = shallow(<Menu menuValue={[]} onMenuChange={onMenuChangeStub}>{childrens}</Menu>);
                    wrapper.find('.second').simulate('click', 2, eventStub);
                    expect(onMenuChangeStub).to.have.been.calledWith([2]);
                });

                it('Should call onMenuChange callback with original array with removed menuValue', () => {
                    let onMenuChangeStub = sinon.stub();
                    let wrapper = shallow(<Menu menuValue={[1, 2]} onMenuChange={onMenuChangeStub}>{childrens}</Menu>);
                    wrapper.find('.first').simulate('click', 1, eventStub);
                    expect(onMenuChangeStub).to.have.been.calledWith([2]);
                    wrapper.setProps({
                        menuValue: [2]
                    });
                    wrapper.find('.second').simulate('click', 2, eventStub);
                    expect(onMenuChangeStub).to.have.been.calledWith([]);
                });
            });
        });
    });
});
