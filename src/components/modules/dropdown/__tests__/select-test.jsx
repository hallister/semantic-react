/* eslint-disable react/jsx-max-props-per-line */
/* global sinon */
import React from 'react';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Select from '../select';
import Option from '../option';
import { Label, Icon, Header } from '../../../elements';
import { Menu } from '../../../views';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';
import DropdownElement from '../dropdownelement';

const consumedProps = {
    enter: 'scale in',
    leave: 'scale out',
    enterDuration: 100,
    leaveDuration: 100,
    name: 'test',
    icon: 'test',
    placeholder: 'test',
    search: true,
    searchGlyphWidth: 3,
    searchIgnoreCase: true,
    searchPosition: 'dropdown',
    searchHeader: 'test',
    searchNoResultsMessage: 'tet',
    searchString: 'test',
    selected: ['tet'],
    selection: true,
    multiple: true,
    onSelectChange: () => {},
    onRequestClose: () => {},
    onSearchStringChange: () => {}
};

describe('Select', () => {
    it('Should render as dropdown element', () => {
        let wrapper = shallow(<Select/>);
        expect(wrapper.type()).to.be.equal(DropdownElement);
    });

    it('Should pass active property to dropdown element', () => {
        let wrapper = shallow(<Select active/>);
        expect(wrapper.find(DropdownElement)).to.have.prop('active', true);
        wrapper.setProps({
            active: false
        });
        expect(wrapper.find(DropdownElement)).to.have.prop('active', false);
    });
    

    it('Could be formatted as selection', () => {
        let wrapper = shallow(<Select selection/>);
        expect(wrapper).to.have.className('selection');
    });

    it('Could allow multiple selection', () => {
        let wrapper = shallow(<Select multiple/>);
        expect(wrapper).to.have.className('multiple');
    });

    it('Could be searchable', () => {
        let wrapper = shallow(<Select search/>);
        expect(wrapper).to.have.className('search');
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
        });

        it('Should assign value of current selected prop to input value', () => {
            let wrapper = shallow(<Select name="test" selected={[1]}/>);
            expect(wrapper.find('input').filter({ type: 'hidden' })).to.have.prop('value', '1');
            wrapper.setProps({ selected: [1, 2] });
            expect(wrapper.find('input').filter({ type: 'hidden' })).to.have.prop('value', '1,2');
            wrapper.setProps({ selected: ['test', 'test2'] });
            expect(wrapper.find('input').filter({ type: 'hidden' })).to.have.prop('value', 'test,test2');
        });
    });

    describe('It should render labels', () => {
        it('Should render label with content of selected menu items', () => {
            let wrapper = shallow(
                <Select multiple selected={[1, 2]}>
                    <Option value={1}>Simple val</Option>
                    <Option value={2}><h1>Internal content</h1></Option>
                    <Option value={3}>Not selected</Option>
                </Select>
            );
            expect(wrapper).to.have.exactly(2).descendants(Label);
            expect(wrapper.find(Label).at(0)).to.have.html().match(/Simple val/);
        });

        it('Shouldn\'t render labels if dropdown is not multiple', () => {
            let wrapper = shallow(
                <Select selected={[1]}>
                    <Option value={1}>Simple val</Option>
                    <Option value={2}><h1>Internal content</h1></Option>
                    <Option value={3}>Not selected</Option>
                </Select>
            );
            expect(wrapper).to.have.not.descendants(Label);
        });
    });

    describe('It should render dropdown text', () => {
        describe('When dropdown is selection', () => {
            it('Should render placeholder with default text class when no value was selected', () => {
                let wrapper = shallow(<Select placeholder="Select one" selection/>);
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
                        <Select placeholder="Select one" selected={[2]} selection>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    expect(wrapper.find('.default.text')).to.be.not.exist;
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);

                    // without placeholder
                    wrapper = shallow(
                        <Select selected={[2]} selection>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);
                });

                it('Should render filtered text stub if search and search string is not empty', () => {
                    let wrapper = shallow(
                        <Select placeholder="Select one" search searchString="kk" selected={[2]} selection>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    expect(wrapper.find('.text.filtered')).to.be.exist;

                });

                it('Should render placeholder with default text class anyway if multiple', () => {
                    let wrapper = shallow(
                        <Select multiple placeholder="Select one" selected={[]} selection>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    expect(wrapper.find('.default.text')).to.be.exist;
                    expect(wrapper.find('.default.text')).to.have.html().match(/Select one/);
                });

                it('Should hide placeholder if searchString exists', () => {
                    let wrapper = shallow(
                        <Select placeholder="Select one" search selected={[]} selection>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    expect(wrapper.find('.default.text')).to.be.exist;
                    expect(wrapper.find('.default.text')).to.have.html().match(/Select one/);
                    wrapper.setProps({
                        searchString: 'text'
                    });
                    expect(wrapper.find('.default.text')).to.be.not.exist;
                });
            });
            
        });
        
        describe('When dropdown is not selection', () => {
            it('Should render placeholder with text class when not value was selected', () => {
                let wrapper = shallow(<Select placeholder="Select one" selection={false}/>);
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
                        <Select placeholder="Select one" selected={[2]} selection={false}>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);

                    // without placeholder
                    wrapper = shallow(
                        <Select selected={[2]} selection={false}>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
                    expect(wrapper.find('.text')).to.be.exist;
                    expect(wrapper.find('.text')).to.have.html().match(/<h1>Complex<\/h1>/);
                });

                it('Should render placeholder with text class anyway if multiple', () => {
                    let wrapper = shallow(
                        <Select multiple placeholder="Select one" selected={[2]} selection={false}>
                            <Option value={1}>Simple val</Option>
                            <Option value={2}><h1>Complex</h1></Option>
                        </Select>
                    );
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
        it('Should render if given active prop', () => {
            let wrapper = shallow(<Select active/>);
            expect(wrapper.find(Menu)).to.be.exist;
        });

        it('Should render children under Menu', () => {
            let wrapper = shallow(
                <Select active>
                    <Option value={1}>First</Option>
                    <Option value={2}>Second</Option>
                </Select>
            );
            expect(wrapper.find(Menu)).to.have.exactly(2).descendants(Option);
        });
    });

    describe('Should render search input', () => {
        it('Should render search input in dropdown', () => {
            let wrapper = shallow(<Select search/>);
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
                let wrapper = shallow(<Select active search searchHeader="Test" searchPosition="menu"/>);
                expect(wrapper.find(Menu).find(Header)).to.have.html().match(/Test/);
                expect(wrapper.find(Menu).find('.search')).to.be.exist;
            });
        });

        it('Should assign searchString to input value', () => {
            let wrapper = shallow(<Select active search searchString="test"/>);
            expect(wrapper.find('input').filter('.search')).to.have.value('test')
        });

        describe('It should set width style', () => {
            it('Should set width style if searchPosition is dropdown', () => {
                let wrapper = shallow(<Select multiple search searchPosition="dropdown" searchString="1"/>);
                expect(wrapper.find('input').filter('.search')).to.have.style('width', '1.0714em');
                
                wrapper.setProps({
                    searchString: '12'
                });
                expect(wrapper.find('input').filter('.search')).to.have.style('width', '2.1428em');
            });

            it('Shouldn\'t set width style if searchPosition is menu', () => {
                let wrapper = shallow(<Select active multiple search searchPosition="menu" searchString="1"/>);
                expect(wrapper.find(Menu).find('.search')).to.have.not.style('width');
            });

            it('Should\'t set width style for not multiple dropdown', () => {
                let wrapper = shallow(<Select search searchPosition="dropdown" searchString="12"/>);
                expect(wrapper.find('input').filter('.search')).to.have.not.style('width');
            });
        });

        it('Shouldn\'t render search input if dropdown is not searchable', () => {
            let wrapper = shallow(<Select active/>);
            expect(wrapper.find('.search')).to.be.not.exist;
        });
    });

    describe('It should process children', () => {
        it('Shouldn\'t render selected options when select is multiple', () => {
            let wrapper = shallow(
                <Select active multiple selected={[2, 3]}>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );
            let menuWrapper = wrapper.find(Menu);
            expect(menuWrapper).to.have.exactly(2).descendants(Option);
            expect(menuWrapper.find(Option).at(0)).to.have.prop('value', 1);
            expect(menuWrapper.find(Option).at(1)).to.have.prop('value', 4);

            wrapper.setProps({
                active: true,
                selected: [1]
            });
            menuWrapper = wrapper.find(Menu);
            expect(menuWrapper).to.have.exactly(3).descendants(Option);
            expect(menuWrapper.find(Option).filter({ value: 1 })).to.be.not.exist;
        });

        it('Should render and mark active selected options', () => {
            let wrapper = shallow(
                <Select active selected={[3]} selection>
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );
            expect(wrapper.find(Menu)).to.have.exactly(4).descendants(Option);
            expect(wrapper.find(Option).filter({ value: 3 })).to.have.prop('active', true);
        });
    });


    describe('Should filter childrens if dropdown is searchable by search input', () => {
        it('Should filter by value', () => {
            let wrapper = shallow(
                <Select active search searchString="1">
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            let menuWrapper = wrapper.find(Menu);
            expect(menuWrapper.find(Option)).to.have.length(1);
            expect(menuWrapper.find(Option)).to.have.prop('value', 1);
            
            wrapper.setProps({
                active: true,
                searchString: '2'
            });
            menuWrapper = wrapper.find(Menu);
            expect(menuWrapper.find(Option)).to.have.length(1);
            expect(menuWrapper.find(Option)).to.have.prop('value', 2);
        });
        
        it('Should filter by option content', () => {
            let wrapper = shallow(
                <Select active search searchString="On">
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );
            let menuWrapper = wrapper.find(Menu);
            expect(menuWrapper.find(Option)).to.have.length(1);
            expect(menuWrapper.find(Option)).to.have.prop('value', 1);
            
            wrapper.setProps({
                active: true,
                searchString: 'T'
            });
            menuWrapper = wrapper.find(Menu);
            expect(menuWrapper.find(Option)).to.have.length(2);
            expect(menuWrapper.find(Option).at(0)).to.have.prop('value', 2);
            expect(menuWrapper.find(Option).at(1)).to.have.prop('value', 3);
        });

        it('Should ignore case if specified', () => {
            let wrapper = shallow(
                <Select active search searchIgnoreCase searchString="ONE">
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            expect(wrapper.find(Menu).find(Option)).to.have.length(1);
            expect(wrapper.find(Menu).find(Option)).to.have.prop('value', 1);
        });

        it('Should display no results message if there are no search results', () => {
            let wrapper = shallow(
                <Select active search searchIgnoreCase searchString="DDDDDD">
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            expect(wrapper.find(Menu)).to.have.not.descendants(Option);
            expect(wrapper.find(Menu).find('.message')).to.be.exist;
            expect(wrapper.find(Menu).find('.message')).to.have.text('No Results found.');
        });

        it('No results message could be specified', () => {
            let wrapper = shallow(
                <Select active search searchNoResultsMessage="testnoresults" searchString="DSFDSFD">
                    <Option value={1}>One</Option>
                    <Option value={2}>Two</Option>
                    <Option value={3}>Three</Option>
                    <Option value={4}>Four</Option>
                </Select>
            );

            expect(wrapper.find(Menu).find('.message')).to.have.text('testnoresults');
        });
        
    });


    // Here FULL DOM since select is checking children count for rendered menu via ref
    describe('When clicking on option', () => {
        let onRequestCloseSpy;
        let onSelectChangeSpy;
        let onSearchStringChangeSpy;
        beforeEach(() => {
            onRequestCloseSpy = sinon.spy();
            onSelectChangeSpy = sinon.spy();
            onSearchStringChangeSpy = sinon.spy();
        });
        describe('If dropdown is multiple', () => {
            
            it('Should fire onSelectChange callback with new selections and total children count', () => {
                let wrapper = mount(
                    <Select active multiple onRequestClose={onRequestCloseSpy} onSelectChange={onSelectChangeSpy}>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                wrapper.find(Menu).prop('onMenuItemClick')('test');
                expect(onSelectChangeSpy).to.have.been.calledWith(['test'], 2);
                expect(onRequestCloseSpy).to.have.not.been.called;
                
                onSelectChangeSpy.reset();
                onRequestCloseSpy.reset();
                
                wrapper.setProps({
                    selected: ['test']
                });
                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                expect(onSelectChangeSpy).to.have.been.calledWith(['test', 'test2'], 1);
            });


            describe('When dropdown is searchable', () => {
                it('Should call onSearchStringChange callback with empty string if there is only one child in menu', () => {
                    let wrapper = mount(
                        <Select active
                                multiple
                                onRequestClose={onRequestCloseSpy}
                                onSearchStringChange={onSearchStringChangeSpy}
                                onSelectChange={onSelectChangeSpy}
                                search
                                searchString="test"
                                selected={['test']}
                        >
                            <Option value="test">Test</Option>
                            <Option value="test2">Test2</Option>
                        </Select>
                    );
                    wrapper.find(Menu).prop('onMenuItemClick')('test2');
                    expect(onSearchStringChangeSpy).to.have.been.calledWith('');
                    
                    onSearchStringChangeSpy.reset();
                    wrapper = mount(
                        <Select active 
                                multiple
                                onRequestClose={onRequestCloseSpy}
                                onSearchStringChange={onSearchStringChangeSpy}
                                onSelectChange={onSelectChangeSpy}
                                search
                                searchString="test"
                                selected={['test']}
                        >
                            <Option value="test">Test</Option>
                            <Option value="test2">Test2</Option>
                            <Option value="test3">Test3</Option>
                        </Select>
                    );
                    wrapper.find(Menu).prop('onMenuItemClick')('test2');
                    expect(onSearchStringChangeSpy).to.not.have.been.called;
                });
            });

            
        });

        describe('If dropdown is not multiple', () => {
            it('It should fire onSelectChange with new value and total children count', () => {
                let wrapper = mount(
                    <Select active onRequestClose={onRequestCloseSpy} onSelectChange={onSelectChangeSpy}>
                        <Option value="test">Test</Option>
                    </Select>
                );
                
                wrapper.find(Menu).prop('onMenuItemClick')('test');
                expect(onSelectChangeSpy).to.have.been.calledWith(['test'], 1);
            });

            it('Should call onSelectChange with the new value', () => {
                let wrapper = mount(
                    <Select active onSelectChange={onSelectChangeSpy} selected={['test']}>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                expect(onSelectChangeSpy).to.have.been.calledWith(['test2'], 2);
            });

            it('Should call onSearchStringChange with empty string', () => {
                let wrapper = mount(
                    <Select active 
                            onSearchStringChange={onSearchStringChangeSpy}
                            search
                            searchString="test"
                            selected={['test']}
                            selection
                    >
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                    </Select>
                );
                wrapper.find(Menu).prop('onMenuItemClick')('test2');
                expect(onSearchStringChangeSpy).to.have.been.calledWith('');
            });
        });
    });

    describe('When clicking on close label on selected item', () => {

        it('Should call onSelectChange callback without removed item', () => {
            let onSelectChangeSpy = sinon.spy();
            let wrapper = shallow(
                <Select active multiple onSelectChange={onSelectChangeSpy} selected={['test2', 'test3']}>
                    <Option value="test">Test</Option>
                    <Option value="test2">Test2</Option>
                    <Option value="test3">Test3</Option>
                    <Option value="test4">Test4</Option>
                </Select>
            );
            wrapper.find(Label).at(0).find(Icon).simulate('click');
            expect(onSelectChangeSpy).to.have.been.calledWith(['test3']);
        });
    });

    describe('When key down on search input', () => {
        let onSelectChangeSpy;
        beforeEach(() => {
            onSelectChangeSpy = sinon.spy();
        });
        describe('When backspace key was pressed', () => {
            it('Should call onSelectChange callback with removed last item if there are few selected values', () => {
                let wrapper = mount(
                    <Select active multiple onSelectChange={onSelectChangeSpy} search selected={['test2', 'test3']}>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                wrapper.find('input').filter('.search').simulate('keydown', { which: 8 });
                expect(onSelectChangeSpy).to.have.been.calledWith(['test2']);
            });

            it('Shouldn\'t call onSelectChange if there is no selected value', () => {
                let wrapper = mount(
                    <Select active multiple onSelectChange={onSelectChangeSpy} search>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                wrapper.find('input').filter('.search').simulate('keydown', { which: 8 });
                expect(onSelectChangeSpy).to.not.have.been.called;
            });

            it('Shouldn\'t call onSelectChange if dropdown is not multiple', () => {
                let wrapper = mount(
                    <Select active onSelectChange={onSelectChangeSpy} search selected={['test2']}>
                        <Option value="test">Test</Option>
                        <Option value="test2">Test2</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                wrapper.find('input').filter('.search').simulate('keydown', { which: 8 });
                expect(onSelectChangeSpy).to.not.have.been.called;
            });
        });

        describe('When enter key was pressed', () => {
            it('Should get first value from first menu child and call onMenuItemClick with this value', () => {
                let wrapper = mount(
                    <Select active search searchString="test">
                        <Option value="ddd">DDD</Option>
                        <Option value="test1">Test</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                let spy = sinon.stub(wrapper.instance(), 'onMenuItemClick');

                wrapper.find('input').filter('.search').simulate('keydown', { which: 13 });
                expect(spy).to.have.been.calledWith('test1');
            });
        });

        describe('When enter key was pressed', () => {
            it('Should get searchString as value if allowAdditions is true', () => {
                let wrapper = mount(
                    <Select active search searchString="search" onSelectChange={onSelectChangeSpy} allowAdditions>
                        <Option value="ddd">DDD</Option>
                        <Option value="test1">Test</Option>
                        <Option value="test3">Test3</Option>
                        <Option value="test4">Test4</Option>
                    </Select>
                );
                let spy = sinon.stub(wrapper.instance(), 'onMenuItemClick');

                wrapper.find('input').filter('.search').simulate('keydown', { which: 13 });
                expect(onSelectChangeSpy).to.have.been.calledWith(['search']);
            });
        });
    });

    describe('When search input changes', () => {
        it('Should call onSearchStringChange with new search value', () => {
            let onSearchStringChangeSpy = sinon.spy();
            let wrapper = mount(
                <Select active onSearchStringChange={onSearchStringChangeSpy} search searchString="test">
                    <Option value="ddd">DDD</Option>
                    <Option value="test1">Test</Option>
                    <Option value="test3">Test3</Option>
                    <Option value="test4">Test4</Option>
                </Select>
            );
            wrapper.find('input').filter('.search').simulate('change', { target: { value: 'tes' } });
            expect(onSearchStringChangeSpy).to.have.been.calledWith('tes');
        });
    });
    
    describe('When clicking outside', () => {
        let container;
        let extraNode;
        let onRequestClose;
        beforeEach(() => {
            onRequestClose = sinon.spy();
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
            mount(
                <Select active onRequestClose={onRequestClose}/>,
                { attachTo: container }
            );

            document.body.appendChild(extraNode);
            let event = new window.MouseEvent('mousedown', { target: extraNode });
            document.dispatchEvent(event);
            expect(onRequestClose).to.have.been.called;
        });

        it('Shouldn\'t call onRequestClose callback when clicking on the select itself', () => {
            let wrapper = mount(
                <Select active onRequestClose={onRequestClose}/>,
                { attachTo: container }
            );
            let selectNode = ReactTestUtils.findRenderedDOMComponentWithClass(wrapper.instance(), 'ui dropdown');
            let event = new window.MouseEvent('mousedown', { target: selectNode });
            selectNode.dispatchEvent(event);
            expect(onRequestClose).to.have.not.been.called;
        });
    });
    
    itShouldConsumeOwnAndPassCustomProps(Select, consumedProps);
});
