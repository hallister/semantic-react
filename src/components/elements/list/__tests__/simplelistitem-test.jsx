import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SimpleListItem from '../simplelistitem';
import Content from '../../simple/content';
import Icon from '../../icon/icon';
import Item from '../../../views/item/item';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

const consumedProps = {
    icon: 'test'
};

describe('elements/simplelistitem', () => {
    it('should render item', () => {
        const wrapper = shallow(<SimpleListItem/>);
        expect(wrapper.is(Item)).to.be.true;
    });

    it('Should render child content under item if icon prop wasn\'t given', () => {
        const wrapper = shallow(<SimpleListItem>Test</SimpleListItem>);
        expect(wrapper.children()).to.have.text('Test');
    });

    it('Should render icon and child content under content element if icon prop was given', () => {
        const wrapper = shallow(<SimpleListItem icon="test">Content</SimpleListItem>);
        expect(wrapper.childAt(0).is(Icon)).to.be.true;
        expect(wrapper.childAt(0)).to.have.prop('name', 'test');
        expect(wrapper.childAt(1).is(Content)).to.be.true;
        expect(wrapper.childAt(1).children()).to.have.text('Content');
    });

    itShouldConsumeOwnAndPassCustomProps(SimpleListItem, consumedProps);
});
