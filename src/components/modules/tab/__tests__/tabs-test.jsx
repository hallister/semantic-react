import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Tabs from '../tabs';
import Tab from '../tab';
import TabMenu from '../tabmenu';
import MenuItem from '../../../views/menu/menuitem';

describe('modules/tab/tabs', () => {
    it('Should be rendered in dom', () => {
        const wrapper = shallow(<Tabs activeTab={1}/>);
        expect(wrapper).to.have.tagName('div');
    });

    it('renders menu with menuValue equals to activeTab', () => {
        const wrapper = shallow(
            <Tabs activeTab={1}>
                <TabMenu>
                    <MenuItem menuValue={1}></MenuItem>
                </TabMenu>
            </Tabs>
        );
        expect(wrapper.find(TabMenu)).to.have.prop('menuValue', 1);
        expect(wrapper.find(TabMenu)).to.have.prop('onMenuChange');
    });

    it('renders tabs and set active tab', () => {
        const wrapper = shallow(
            <Tabs activeTab={2}>
                <TabMenu>
                    <MenuItem menuValue={1}></MenuItem>
                    <MenuItem menuValue={2}></MenuItem>
                </TabMenu>
                <Tab value={1}>First</Tab>
                <Tab value={2}>Second</Tab>
            </Tabs>
        );

        expect(wrapper).to.have.exactly(2).descendants(Tab);
        expect(wrapper.find(Tab).at(0)).to.have.prop('active', false);
        expect(wrapper.find(Tab).at(1)).to.have.prop('active', true);
    });

    describe('When menu value is being changed', () => {
        it('should call onTabChange', () => {
            const spy = sinon.spy();
            const wrapper = shallow(
                <Tabs activeTab={2} onTabChange={spy}>
                    <TabMenu>
                        <MenuItem menuValue={1}></MenuItem>
                        <MenuItem menuValue={2}></MenuItem>
                    </TabMenu>
                    <Tab value={1}>First</Tab>
                    <Tab value={2}>Second</Tab>
                </Tabs>
            );
            wrapper.find(TabMenu).prop('onMenuChange')(1);
            expect(spy).to.have.been.calledWith(1);
        });

        it('Shouldnt call onTabChange if index is same or null', () => {
            const spy = sinon.spy();
            const wrapper = shallow(
                <Tabs activeTab={2} onTabChange={spy}>
                    <TabMenu>
                        <MenuItem menuValue={1}></MenuItem>
                        <MenuItem menuValue={2}></MenuItem>
                    </TabMenu>
                    <Tab value={1}>First</Tab>
                    <Tab value={2}>Second</Tab>
                </Tabs>
            );
            wrapper.find(TabMenu).prop('onMenuChange')(null);
            expect(spy).to.have.not.been.called;
            wrapper.find(TabMenu).prop('onMenuChange')(2);
            expect(spy).to.have.not.been.called;
        });
    });
});
