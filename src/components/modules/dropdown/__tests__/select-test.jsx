/* eslint-disable react/jsx-max-props-per-line */
/* global sinon */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Select from '../select';
import Option from '../option';
import { Label, Icon, Header } from '../../../elements';
import { Menu } from '../../../views';
import DropdownElement from '../dropdownelement';

describe.only('Select', () => {
    it('Should render as dropdown element', () => {
        let wrapper = shallow(<Select/>);
        expect(wrapper.type()).to.be.equal(DropdownElement);
    });

    it('Should have active state set to false by default', () => {
        let wrapper = shallow(<Select/>);
        expect(wrapper).to.have.state('active', false);
    });

    it('Should set active set from active property', () => {
        let wrapper = shallow(<Select active/>);
        expect(wrapper).to.have.state('active', true);
    });

    it('Should change state if active property was changed', () => {
        let wrapper = shallow(<Select active={false}/>);
        expect(wrapper).to.have.state('active', false);
        wrapper.setProps({
            active: true
        });
        expect(wrapper).to.have.state('active', true);
    });

    it('Should pass active state to dropdown element', () => {
        let wrapper = shallow(<Select active/>);
        expect(wrapper.find(DropdownElement)).to.have.prop('active', true);
        wrapper.setState({
            active: false
        });
        expect(wrapper.find(DropdownElement)).to.have.prop('active', false);
    });

    it('Could be searchable', () => {
        let wrapper = shallow(<Select search/>);
        expect(wrapper).to.have.className('search');
    });

    it('Could be formatted as selection', () => {
        let wrapper = shallow(<Select selection/>);
        expect(wrapper).to.have.className('selection');
    });

    it('Could allow multiple selection', () => {
        let wrapper = shallow(<Select multiple/>);
        expect(wrapper).to.have.className('multiple');
    });

    it('Should have empty selected state by default', () => {
        let wrapper = shallow(<Select/>);
        expect(wrapper).to.have.state('selected').empty;
    });

    describe('It should render input', () => {
        it('Should render hidden input', () => {
            let wrapper = shallow(<Select/>);
            expect(wrapper.find('input').filter({ type: 'hidden' })).to.be.exist;
        });

        it('Should assign name to hidden input if given', () => {
            let wrapper = shallow(<Select name="test"/>);
            let input = wrapper.find('input').filter({ type: 'hidden' });
            expect(input).to.have.prop('name', 'test');
            expect(input).to.have.prop('value', '');
        });

        it('Should assign value of current selected state to input value', () => {
            let wrapper = shallow(<Select name="test"/>);
            wrapper.setState({ selected: ['1'] });
            expect(wrapper.find('input').filter({ type: 'hidden' })).to.have.prop('value', '1');
            wrapper.setState({ selected: [1, 2] });
            expect(wrapper.find('input').filter({ type: 'hidden' })).to.have.prop('value', '1,2');
            wrapper.setState({ selected: ['test', 'test2'] });
            expect(wrapper.find('input').filter({ type: 'hidden' })).to.have.prop('value', 'test,test2');
        });
    });

    describe('It should render labels', () => {
        it('Should render label with content of selected menu items', () => {
            let wrapper = shallow(
                <Select multiple>
                    <Option value={1}>Simple val</Option>
                    <Option value={2}><h1>Internal content</h1></Option>
                    <Option value={3}>Not selected</Option>
                </Select>
            );
            wrapper.setState({
                selected: [1, 2]
            });
            expect(wrapper).to.have.exactly(2).descendants(Label);
            expect(wrapper.find(Label).at(0)).to.have.descendants(Icon);
            expect(wrapper.find(Label).at(0)).to.have.html().match(/Simple val/);

            expect(wrapper.find(Label).at(1)).to.have.descendants(Icon);
            expect(wrapper.find(Label).at(1)).to.have.html().match(/<h1>Internal content/);
        });

        it('Shouldn\'t render labels if dropdown is not multiple', () => {
            let wrapper = shallow(
                <Select>
                    <Option value={1}>Simple val</Option>
                    <Option value={2}><h1>Internal content</h1></Option>
                    <Option value={3}>Not selected</Option>
                </Select>
            );
            wrapper.setState({
                selected: [1]
            });
            expect(wrapper).to.have.not.descendants(Label);
        });
    });

    describe('It should render dropdown text', () => {
        describe('When dropdown is selection', () => {
            it('Should render placeholder with default text class when no value was selected', () => {
                let wrapper = shallow(<Select selection placeholder="Select one"/>);
                expect(wrapper.find('.default.text')).to.be.exist;
                expect(wrapper.find('.default.text')).to.have.html().match(/Select one/);
            });

            it('Shouldn\'t render text if placeholder prop wasn\'t given', () => {
                let wrapper = shallow(<Select selection/>);
                expect(wrapper.find('.default.text')).to.be.not.exist;
            });

            describe('When have selected value', () => {
                it('Should render text with content of corresponding menu item if not multiple', () => {
                    let wrapper = shallow(
                        <Select selection placeholder="Select one">
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: [2]
                    });
                    expect(wrapper.find('.default.text')).to.be.not.exist;
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);

                    // without placeholder
                    wrapper = shallow(
                        <Select selection>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: [2]
                    });
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);
                });

                it('Should render filtered text stub if search and search string is not empty', () => {
                    let wrapper = shallow(
                        <Select search selection placeholder="Select one">
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: [2],
                        searchString: 'kk'
                    });
                    expect(wrapper.find('.text.filtered')).to.be.exist;
                    
                });

                it('Should render placeholder with default text class anyway if multiple', () => {
                    let wrapper = shallow(
                        <Select multiple selection placeholder="Select one">
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: [2]
                    });
                    expect(wrapper.find('.default.text')).to.be.exist;
                    expect(wrapper.find('.default.text')).to.have.html().match(/Select one/);
                    
                    // same applies when search
                    wrapper.setProps({ search: true });
                    wrapper.setState({
                        searchString: 'kkk'
                    });
                    expect(wrapper.find('.default.text')).to.be.exist;
                    expect(wrapper.find('.default.text')).to.have.html().match(/Select one/);
                });
            });
            
        });
        
        describe('When dropdown is not selection', () => {
            it('Should render placeholder with text class when not value was selected', () => {
                let wrapper = shallow(<Select selection={false} placeholder="Select one"/>);
                expect(wrapper.find('.text')).to.be.exist;
                expect(wrapper.find('.text')).to.have.html().match(/Select one/);
                expect(wrapper.find('.default.text')).to.be.not.exist;
            });
            
            it('Shouldn\'t render text if placeholder prop wasn\'t given', () => {
                let wrapper = shallow(<Select selection={false}/>);
                expect(wrapper.find('.text')).to.be.not.exist;
                expect(wrapper.find('.default.text')).to.be.not.exist;
            });

            describe('When have selected value', () => {
                it('Should render text with content of corresponding menu item if not multiple', () => {
                    let wrapper = shallow(
                        <Select selection={false} placeholder="Select one">
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: [2]
                    });
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);

                    // without placeholder
                    wrapper = shallow(
                        <Select selection={false}>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: [2]
                    });
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);
                });

                it('Should render placeholder with text class anyway if multiple', () => {
                    let wrapper = shallow(
                        <Select selection={false} multiple placeholder="Select one">
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: [2]
                    });
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/Select one/);
                });
            });
        });
    });

    describe('It should render dropdown icon', () => {
        it('Should render dropdown icon by default', () => {
            let wrapper = shallow(<Select/>);
            expect(wrapper.find(Icon)).to.be.exist;
            expect(wrapper.find(Icon)).to.have.prop('name', 'dropdown');
        });

        it('Should render specified icon', () => {
            let wrapper = shallow(<Select icon="cloud"/>);
            expect(wrapper.find(Icon)).to.have.prop('name', 'cloud');
        });
    });

    describe('It should render menu', () => {
        it('Should render if state active', () => {
            let wrapper = shallow(<Select/>);
            wrapper.setState({
                active: true
            });
            expect(wrapper.find(Menu)).to.be.exist;
        });

        it('Shouldn\'t render it if state is not active', () => {
            let wrapper = shallow(<Select/>);
            wrapper.setState({
                active: false
            });
            expect(wrapper.find(Menu)).to.be.not.exist;
        });

        it('Should render children under Menu', () => {
            let wrapper = shallow(
                <Select>
                    <Option value={1}>First</Option>
                    <Option value={2}>Second</Option>
                </Select>
            );
            wrapper.setState({ active: true });
            expect(wrapper.find(Menu)).to.have.exactly(2).descendants(Option);
        });
    });

    describe('Should render search input', () => {
        it('Should render search input in dropdown', () => {
            let wrapper = shallow(<Select search/>);
            wrapper.setState({
                active: true
            });
            expect(wrapper.find('input').filter('.search')).to.be.exist;
            expect(wrapper.find(Menu).find('.search')).to.be.not.exist;
        });

        describe('Should render search input in menu if specified', () => {
            it('Should render search input in menu', () => {
                let wrapper = shallow(<Select active search searchPosition="menu"/>);
                expect(wrapper.find(Menu).find('.search.input')).to.be.exist;
                expect(wrapper.find(Menu).find('.search.input').find(Icon)).to.have.prop('name', 'search');
                expect(wrapper.find(Menu).find('.search.input').find('input')).to.be.exist;
                
            });

            it('Should render search header if specified', () => {
                let wrapper = shallow(<Select active search searchPosition="menu" searchHeader="Test"/>);
                expect(wrapper.find(Menu).find(Header)).to.have.html().match(/Test/);
                expect(wrapper.find(Menu).find('.search')).to.be.exist;
            });
        });

        describe('It should set width style', () => {
            it('Should set width style if searchPosition is dropdown', () => {
                let wrapper = shallow(<Select search multiple searchPosition="dropdown"/>);
                wrapper.setState({
                    searchString: '1'
                });
                expect(wrapper.find('input').filter('.search')).to.have.style('width', '1.0714em');
                wrapper.setState({
                    searchString: '12'
                });
                expect(wrapper.find('input').filter('.search')).to.have.style('width', '2.1428em');
            });

            it('Shouldn\'t set width style if searchPosition is menu', () => {
                let wrapper = shallow(<Select active search multiple searchPosition="menu"/>);
                wrapper.setState({
                    searchString: '1'
                });
                expect(wrapper.find(Menu).find('.search')).to.have.not.style('width');
            });

            it('Should\'t set width style for not multiple dropdown', () => {
                let wrapper = shallow(<Select search searchPosition="dropdown"/>);
                wrapper.setState({
                    searchString: '12'
                });
                expect(wrapper.find('input').filter('.search')).to.have.not.style('width');
            });
        });

        it('Shouldn\'t render search input if dropdown is not searchable', () => {
            let wrapper = shallow(<Select/>);
            expect(wrapper.find('.search')).to.be.not.exist;
        });
    });

    describe('It should process children', () => {
        it('Shouldn\'t render selected options when select is multiple', () => {
            let wrapper = shallow(
                <Select multiple>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );
            wrapper.setState({
                active: true,
                selected: [2, 3]
            });
            expect(wrapper.find(Menu)).to.have.exactly(2).descendants(Option);
            expect(wrapper.find(Menu).find(Option).at(0)).to.have.prop('value', 1);
            expect(wrapper.find(Menu).find(Option).at(1)).to.have.prop('value', 4);

            wrapper.setState({
                active: true,
                selected: [1]
            });
            expect(wrapper.find(Menu)).to.have.exactly(3).descendants(Option);
            expect(wrapper.find(Menu).find(Option).filter({ value: 1 })).to.be.not.exist;
        });

        it('Should render and mark active selected options', () => {
            let wrapper = shallow(
                <Select selection>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );
            wrapper.setState({
                active: true,
                selected: [3]
            });
            
            expect(wrapper.find(Menu)).to.have.exactly(4).descendants(Option);
            expect(wrapper.find(Option).filter({ value: 3 })).to.have.prop('active', true);
        });
    });


    describe('Should filter childrens if dropdown is searchable by search input', () => {
        it('Should filter by value', () => {
            let wrapper = shallow(
                <Select search>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );
            
            wrapper.setState({
                active: true,
                searchString: '1'
            });
            
            expect(wrapper.find(Menu).find(Option)).to.have.length(1);
            expect(wrapper.find(Menu).find(Option)).to.have.prop('value', 1);
            wrapper.setState({
                active: true,
                searchString: '2'
            });
            expect(wrapper.find(Menu).find(Option)).to.have.length(1);
            expect(wrapper.find(Menu).find(Option)).to.have.prop('value', 2);
        });
        
        it('Should filter by option content', () => {
            let wrapper = shallow(
                <Select search>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            wrapper.setState({
                active: true,
                searchString: 'On'
            });
            
            expect(wrapper.find(Menu).find(Option)).to.have.length(1);
            expect(wrapper.find(Menu).find(Option)).to.have.prop('value', 1);
            wrapper.setState({
                active: true,
                searchString: 'T'
            });
            expect(wrapper.find(Menu).find(Option)).to.have.length(2);
            expect(wrapper.find(Menu).find(Option).at(0)).to.have.prop('value', 2);
            expect(wrapper.find(Menu).find(Option).at(1)).to.have.prop('value', 3);
        });

        it('Should ignore case if specified', () => {
            let wrapper = shallow(
                <Select search searchIgnoreCase>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            wrapper.setState({
                active: true,
                searchString: 'ONE'
            });
            expect(wrapper.find(Menu).find(Option)).to.have.length(1);
            expect(wrapper.find(Menu).find(Option)).to.have.prop('value', 1);
        });

        it('Should display no results message if there are no search results', () => {
            let wrapper = shallow(
                <Select search searchIgnoreCase>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            wrapper.setState({
                active: true,
                searchString: 'DDDDDD'
            });
            
            expect(wrapper.find(Menu)).to.have.not.descendants(Option);
            expect(wrapper.find(Menu).find('.message')).to.be.exist;
            expect(wrapper.find(Menu).find('.message')).to.have.text('No Results found.');
        });

        it('No results message could be specified', () => {
            let wrapper = shallow(
                <Select search searchNoResultsMessage="testnoresults">
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            wrapper.setState({
                active: true,
                searchString: 'DDDDDD'
            });

            expect(wrapper.find(Menu).find('.message')).to.have.text('testnoresults');
        });
        
    });

    describe('When clicking on dropdown', () => {
        const eventStub = {
            stopPropagation: sinon.stub(),
            preventDefault: sinon.stub()
        };
        it('Should invert active state for single selection non search dropdown', () => {
            let wrapper = shallow(<Select/>);
            expect(wrapper).to.have.state('active', false);
            
            wrapper.simulate('click', eventStub);
            expect(wrapper).to.have.state('active', true);
            
            wrapper.simulate('click', eventStub);
            expect(wrapper).to.have.state('active', false);
        });

        describe('It shouldn\'t set active state to false if previous state was true', () => {
            it('For multiple dropdown', () => {
                let wrapper = shallow(<Select multiple/>);
                wrapper.setState({
                    active: true
                });
                wrapper.simulate('click', eventStub);
                expect(wrapper).to.have.state('active', true);
            });

            it('For search dropdown', () => {
                let wrapper = shallow(<Select search/>);
                wrapper.setState({
                    active: true
                });
                wrapper.simulate('click', eventStub);
                expect(wrapper).to.have.state('active', true);
            });
        });

        it('Should invert state for search dropdown with menu search position', () => {
            let wrapper = shallow(<Select search searchPosition="menu"/>);
            wrapper.setState({
                active: true
            });
            wrapper.simulate('click', eventStub);
            expect(wrapper).to.have.state('active', false);
        });
    });

    describe('When clicking outside', () => {
        it('Should set dropdown active state to false', () => {
            const container = document.createElement('div');
            container.id = 'test';
            document.body.appendChild(container);
            // Full DOM rendering here
            let wrapper = mount(
                <Select active/>,
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

        it('Should clear search string if dropdown is not multiple', () => {
            const container = document.createElement('div');
            container.id = 'test';
            document.body.appendChild(container);
            // Full DOM rendering here
            let wrapper = mount(
                <Select search active/>,
                { attachTo: container }
            );
            wrapper.setState({
                searchString: 'test'
            });
            
            const extraNode = document.createElement('button');
            document.body.appendChild(extraNode);
            let event = new MouseEvent('mousedown', { target: extraNode });
            document.dispatchEvent(event);
            expect(wrapper).to.have.state('searchString', '');
            document.body.removeChild(extraNode);
            document.body.removeChild(container);
            
        });
    });

    // Here FULL DOM since select is checking children count for rendered menu via ref
    describe('When clicking on option', () => {
        describe('If dropdown is multiple', () => {
            it('Should update selected state but not active state', () => {
                let wrapper = mount(
                    <Select active multiple>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                expect(wrapper).to.have.state('selected').deep.equal([]);
                expect(wrapper).to.have.state('active', true);
                wrapper.find(Menu).prop('onMenuItemClick')('test');
                expect(wrapper).to.have.state('selected').deep.equal(['test']);
                expect(wrapper).to.have.state('active', true);
            });

            it('Should update selected state and set active state if there is only one child in menu', () => {
                let wrapper = mount(
                    <Select active multiple>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                wrapper.setState({
                    selected: ['test']
                });
                expect(wrapper).to.have.state('selected').deep.equal(['test']);
                expect(wrapper).to.have.state('active', true);
                
                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                
                expect(wrapper).to.have.state('selected').deep.equal(['test', 'test2']);
                expect(wrapper).to.have.state('active', false);
            });

            it('Should clean searchString in state only if there is only one child in menu', () => {
                let wrapper = mount(
                    <Select active search multiple>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                wrapper.setState({
                    selected: ['test'],
                    searchString: 'test'
                });
                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                expect(wrapper).to.have.state('searchString', '');
                
                wrapper = mount(
                    <Select active search multiple>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                        <Option value="test3">Test3</Option>
                    </Select>
                );
                wrapper.setState({
                    selected: ['test'],
                    searchString: 'test'
                });
                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                expect(wrapper).to.have.state('searchString', 'test');
            });
            
        });

        describe('If dropdown is not multiple', () => {
            it('should set selected state to the new value and active state to false', () => {
                let wrapper = mount(
                    <Select active>
                        <Option value="test">Test</Option>
                    </Select>
                );
                
                expect(wrapper).to.have.state('selected').deep.equal([]);
                expect(wrapper).to.have.state('active', true);
                
                wrapper.find(Menu).prop('onMenuItemClick')('test');
                
                expect(wrapper).to.have.state('selected').deep.equal(['test']);
                expect(wrapper).to.have.state('active', false);
            });

            it('Should replace old value', () => {
                let wrapper = mount(
                    <Select active>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                wrapper.setState({
                    active: true,
                    selected: ['test']
                });

                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                expect(wrapper).to.have.state('selected').deep.equal(['test2']);
            });

            it('Should clean searchString', () => {
                let wrapper = mount(
                    <Select active search selection>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                wrapper.setState({
                    active: true,
                    selected: ['test'],
                    searchString: 'test'
                });

                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                expect(wrapper).to.have.state('searchString', '');
            });
        });

        it('Should fire onSelectChange callback with new selected values', () => {
            let onSelectChangeStub = sinon.stub();
            let wrapper = shallow(
                <Select active multiple onSelectChange={onSelectChangeStub}>
                    <Option value="test">Test</Option>
                    <Option value="test2">Test2</Option>
                </Select>
            );
            wrapper.find(Menu).prop('onMenuItemClick')('test');
            expect(onSelectChangeStub).to.have.been.calledWith(['test']);
            wrapper.find(Menu).prop('onMenuItemClick')('test2');
            expect(onSelectChangeStub).to.have.been.calledWith(['test', 'test2']);
        });
    });

    describe('When clicking on close label on selected item', () => {
        it('Should remove item from selected state', () => {
            let wrapper = shallow(
                <Select active multiple>
                    <Option value="test">Test</Option>
                    <Option value="test2">Test2</Option>
                    <Option value="test3">Test3</Option>
                    <Option value="test4">Test4</Option>
                </Select>
            );
            wrapper.setState({
                selected: ['test2', 'test3']
            });
            
            wrapper.find(Label).at(0).find(Icon).simulate('click');
            expect(wrapper).to.have.state('selected').deep.equal(['test3']);
        });
    });

    describe('When key down on search input', () => {
        let clock;
        beforeEach(() => {
            clock = sinon.useFakeTimers();
        });
        
        afterEach(() => {
            clock.restore();
        });
        
        describe('When backspace key was pressed', () => {
            it('Should remove one character from search string', () => {
                let wrapper = mount(
                    <Select active multiple search>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                wrapper.setState({
                    selected: ['test2', 'test3'],
                    searchString: 'long'
                });

                wrapper.instance().searchRef.value = 'lon';
                wrapper.find('input').filter('.search').simulate('keyup', { which: 8 });
                clock.tick(200);
                expect(wrapper).to.have.state('searchString', 'lon');
            });

            describe('When search string is empty', () => {
                it('Should remove last selected option if presented', () => {
                    let wrapper = mount(
                        <Select active multiple search>
                            <Option value="test">Test</Option>
                            <Option value="test2">Test2</Option>
                            <Option value="test3">Test3</Option>
                            <Option value="test4">Test4</Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: ['test2', 'test3']
                    });
                    
                    wrapper.find('input').filter('.search').simulate('keyup', { which: 8 });
                    clock.tick(200);
                    expect(wrapper).to.have.state('selected').deep.equal(['test2']);
                });

                it('Shouldn\'t remove last select option if dropdown is not multiple', () => {
                    let wrapper = mount(
                        <Select active search>
                            <Option value="test">Test</Option>
                            <Option value="test2">Test2</Option>
                            <Option value="test3">Test3</Option>
                            <Option value="test4">Test4</Option>
                        </Select>
                    );
                    wrapper.setState({
                        selected: ['test2']
                    });
                    wrapper.find('input').filter('.search').simulate('keyup', { which: 8 });
                    clock.tick(200);
                    expect(wrapper).to.have.state('selected').deep.equal(['test2']);
                });
            });
        });

        describe('When enter key was pressed', () => {
            it('Should get first value from first menu child and call onMenuItemClick with this value', () => {
                let wrapper = mount(
                    <Select active search>
                        <Option value="ddd">DDD</Option>
                        <Option value="test1">Test</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                wrapper.setState({
                    searchString: 'test'
                });
                let spy = sinon.stub(wrapper.instance(), 'onMenuItemClick');

                wrapper.find('input').filter('.search').simulate('keyup', { which: 13 });
                clock.tick(200);
                expect(spy).to.have.been.calledWith('test1');
                expect(wrapper).to.have.state('searchString', '');
            });
        });

        describe('When other key was pressed', () => {
            it('Should set search string from search input', () => {
                let wrapper = mount(
                    <Select active multiple search>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                wrapper.setState({
                    selected: ['test2', 'test3']
                });
                
                expect(wrapper).to.have.state('searchString', '');
                wrapper.instance().searchRef.value = 'test';
                wrapper.find('input').filter('.search').simulate('keyup', { which: 64 });
                clock.tick(200);
                expect(wrapper).to.have.state('searchString', 'test');
                wrapper.instance().searchRef.value = 'test5';
                wrapper.find('input').filter('.search').simulate('keyup', { which: 64 });
                clock.tick(200);
                expect(wrapper).to.have.state('searchString', 'test5');
            });
        });
    });
});