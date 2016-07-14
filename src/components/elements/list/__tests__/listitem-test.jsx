import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ListItem from '../listitem';
import List from '../list';
import Image from '../../image/image';
import Icon from '../../icon/icon';
import Button from '../../button/button';
import Content from '../../simple/content';

describe('elements/list/listitem', () => {
    describe('should be rendered in dom', () => {
        it('renders as div by default', () => {
            const wrapper = shallow(<ListItem/>);
            expect(wrapper).to.have.tagName('div');
            expect(wrapper).to.have.className('item');
        });

        it('renders as custom component', () => {
            const wrapper = shallow(<ListItem component="a"/>);
            expect(wrapper).to.have.tagName('a');
        });

        it('renders as a if in link list context', () => {
            const wrapper = shallow(<ListItem/>, { context: { isLinkList: true } });
            expect(wrapper).to.have.tagName('a');
        });
    });

    it('can be active only in link list context', () => {
        let wrapper = shallow(<ListItem active/>, { context: { isLinkList: true } });
        expect(wrapper).to.have.className('active');

        wrapper = shallow(<ListItem active/>);
        expect(wrapper).to.have.not.className('active');
    });

    describe('Renders image component', () => {
        it('Doesn\'t render if image prop wasn\'t provided', () => {
            const wrapper = shallow(<ListItem/>);
            expect(wrapper.find('ImageComponent')).to.be.not.exist;
        });

        it('Renders icon as image by default or when specified', () => {
            let wrapper = shallow(<ListItem image="users"/>);
            expect(wrapper.find(Icon)).to.be.exist;
            expect(wrapper.find(Icon)).to.have.prop('name', 'users');

            wrapper = shallow(<ListItem image="users" imageType="icon"/>);
            expect(wrapper.find(Icon)).to.be.exist;
            expect(wrapper.find(Icon)).to.have.prop('name', 'users');
        });

        it('Renders image if imageType was specified', () => {
            const wrapper = shallow(<ListItem image="test.png" imageType="image"/>);
            expect(wrapper.find(Image)).to.be.exist;
            expect(wrapper.find(Image)).to.have.prop('avatar', true);
            expect(wrapper.find(Image)).to.have.prop('src', 'test.png');
        });

        it('Renders as custom image component if provided', () => {
            const CustomImageComponent = ({ src }) => <Image size="tiny" src={src}/>;
            CustomImageComponent.displayName = "CustomImageComponent";
            const wrapper = shallow(<ListItem image="test.png" imageType="image" imageComponent={CustomImageComponent}/>);
            expect(wrapper.find('CustomImageComponent')).to.be.exist;
            expect(wrapper.find('CustomImageComponent').shallow()).to.have.prop('size', 'tiny');
            expect(wrapper.find('CustomImageComponent').shallow()).to.have.prop('src', 'test.png');
        });
    });

    describe('Renders content', () => {
        it('renders content', () => {
            const wrapper = shallow(<ListItem>Test</ListItem>);
            expect(wrapper.find(Content)).to.be.exist;
            expect(wrapper.find(Content).children()).to.have.text('Test');
        });

        it('Provides aligned prop to content', () => {
            const wrapper = shallow(<ListItem contentAligned="top">Test</ListItem>);
            expect(wrapper.find(Content)).to.be.exist;
            expect(wrapper.find(Content)).to.have.prop('aligned', 'top');
        });

        it('Doesn\'t render content in item when item contains another list', () => {
            const wrapper = shallow(<ListItem>Test<List></List></ListItem>);
            expect(wrapper.find(Content)).to.be.not.exist;
            expect(wrapper.childAt(0)).to.have.text('Test');
            expect(wrapper.childAt(1).is(List)).to.be.true;
        });
    });

    describe('Renders right floated content', () => {
        it('Doesnt render it if rightFloatedComponent wasn\'t provided', () => {
            const wrapper = shallow(<ListItem>Test</ListItem>);
            expect(wrapper.find('RightFloatedComponent')).to.be.not.exist;
        });

        it('Renders it under right floated content', () => {
            const RightFloatedComponent = () => <Button>Test</Button>;
            const wrapper = shallow(<ListItem rightFloatedComponent={RightFloatedComponent}>Test</ListItem>);
            expect(wrapper).to.have.exactly(2).descendants(Content);
            expect(wrapper.find(Content).at(1)).to.have.prop('floated', 'right');
            expect(wrapper.find(Content).at(1).find('RightFloatedComponent')).to.be.exist;
            expect(wrapper.find(Content).at(1).find('RightFloatedComponent').shallow().is(Button)).to.be.true;
        });
    });
});
