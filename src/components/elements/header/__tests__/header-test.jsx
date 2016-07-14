/* eslint-env node, mocha */

import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import {itShouldConsumeOwnAndPassCustomProps} from '../../../test-utils';
import Icon from '../../icon/icon';
import Image from '../../image/image';
import Header from '../header';


let consumedProps = {
    aligned: 'right',
    attached: true,
    color: 'red',
    component: 'div',
    defaultClasses: true,
    disabled: true,
    divider: true,
    icon: 'users',
    iconComponent: Icon,
    emphasis: 'block',
    floated: 'right',
    inverted: true,
    item: true,
    size: 'small'
};

describe('Header', () => {
    describe('should render in the DOM', () => {

        it('renders as <div>', () => {
            let wrapper = shallow(<Header />);
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('ui header');
        });

        it('renders as a custom HTML element', () => {
            let wrapper = shallow(<Header component="h1"/>);
            expect(wrapper).to.have.tagName('h1');
        });
    });

    describe('should allow emphasis', () => {
        it('has a dividing emphasis', () => {
            let wrapper = shallow(<Header emphasis="dividing"/>);
            expect(wrapper).to.have.className('dividing');
        });

        it('has a block emphasis', () => {
            let wrapper = shallow(<Header emphasis="block"/>);
            expect(wrapper).to.have.className('block');
        });
    });

    describe('should float', () => {
        it('floats right', () => {
            let wrapper = shallow(<Header floated="right"/>);
            expect(wrapper).to.have.className('right floated');
        });

        it('floats left', () => {
            let wrapper = shallow(<Header floated="left"/>);
            expect(wrapper).to.have.className('left floated');
        });
    });

    describe('should attach to other objects', () => {
        it('can attach to the top of an attachable element', () => {
            let wrapper = shallow(<Header attached="top"/>);
            expect(wrapper).to.have.className('top attached');
            expect(wrapper).to.have.tagName('div');
        });

        it('can attach to the bottom of an attachable element', () => {
            let wrapper = shallow(<Header attached="bottom"/>);
            expect(wrapper).to.have.className('bottom attached');
            expect(wrapper).to.have.tagName('div');
        });
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Header inverted/>);
        expect(wrapper).to.have.className('inverted');
    });

    it('should appear disabled', () => {
        let wrapper = shallow(<Header disabled/>);
        expect(wrapper).to.have.className('disabled');
    });

    it('should be a dividing header', () => {
        let wrapper = shallow(<Header divider/>);
        expect(wrapper).to.have.className('divider');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Header size="small"/>);
        expect(wrapper).to.have.className('small');
        expect(wrapper).to.have.not.className('size');
    });

    it('should support colors', () => {
        let wrapper = shallow(<Header color="yellow"/>);
        expect(wrapper).to.have.className('yellow');
        expect(wrapper).to.have.not.className('color');
    });

    describe('It could be aligned', () => {
        it('right', () => {
            let wrapper = shallow(<Header aligned="right"/>);
            expect(wrapper).to.have.className('right aligned');
        });

        it('left', () => {
            let wrapper = shallow(<Header aligned="left"/>);
            expect(wrapper).to.have.className('left aligned');
        });

        it('justified', () => {
            let wrapper = shallow(<Header aligned="justified"/>);
            expect(wrapper).to.have.className('justified');
            expect(wrapper).to.have.not.className('aligned');
        });

        it('center', () => {
            let wrapper = shallow(<Header aligned="center"/>);
            expect(wrapper).to.have.className('center aligned');
        });
    });

    describe('It could be icon header', () => {
        it('Renders as icon header', () => {
            let wrapper = shallow(<Header icon="users"/>);
            expect(wrapper).to.have.className('ui icon header');
            expect(wrapper.find(Icon)).to.be.exist;
            expect(wrapper.find(Icon)).to.have.prop('name', 'users');
        });

        it('Allows to use custom icon component', () => {
            let wrapper = shallow(<Header icon="users" iconComponent={(props) => <Icon circular {...props}/>}/>);
            expect(wrapper).to.have.className('ui icon header');
            expect(wrapper.find('iconComponent')).to.be.exist;
            let iconComponent = wrapper.find('iconComponent').shallow();
            expect(iconComponent).to.have.prop('name', 'users');
            expect(iconComponent).to.have.prop('circular', true);
        });
    });

    it('Could be used as menu item', () => {
        let wrapper = shallow(<Header item/>, {context: {isMenuChild: true}});
        expect(wrapper).to.have.className('item');
    });

    describe('It doesn\'t render ui class name', () => {
        it('When in context of list', () => {
            let wrapper = shallow(<Header/>, {context: {isListChild: true}});
            expect(wrapper).to.have.not.className('ui')
        });

        it('When in context of another header', () => {
            let wrapper = shallow(<Header/>, {context: {isHeaderChild: true}});
            expect(wrapper).to.have.not.className('ui')
        });

        it('WHen in context of menu', () => {
            let wrapper = shallow(<Header/>, {context: {isMenuChild: true}});
            expect(wrapper).to.have.not.className('ui')
        });

        it('When in context of card', () => {
            let wrapper = shallow(<Header/>, {context: {isCardChild: true}});
            expect(wrapper).to.have.not.className('ui')
        });

        it('When in context of modal', () => {
            let wrapper = shallow(<Header/>, {context: {isModalChild: true}});
            expect(wrapper).to.have.not.className('ui')
        });

        it('When in context of items', () => {
            let wrapper = shallow(<Header/>, {context: {isItemsChild: true}});
            expect(wrapper).to.have.not.className('ui')
        });

        it('Renders ui class name when in context of modal and icon header', () => {
            let wrapper = shallow(<Header icon="users"/>, {context: {isModalChild: true}});
            expect(wrapper).to.have.className('ui');
        });

        it('Renders ui class name when in context of modal and header has image or icon content', () => {
            let wrapper = shallow(
                <Header><Icon name="users"/>Test</Header>,
                {context: {isModalChild: true}}
            );
            expect(wrapper).to.have.className('ui');

            wrapper = shallow(
                <Header><Image src="http://test.com"/>Test</Header>,
                {context: {isModalChild: true}}
            );
            expect(wrapper).to.have.className('ui');
        });
    });
    
    // Use full dom rendering here since we need context of header inside in header
    describe('When header inside another header', () => {
        it('Should has sub class name', () => {
            let wrapper = mount(
                <Header><Header/></Header>
            );
            expect(wrapper.childAt(0)).to.have.className('sub');
            expect(wrapper.childAt(0)).to.have.not.className('ui');
        });
    })

    itShouldConsumeOwnAndPassCustomProps(Header, consumedProps);
});
