/* eslint-env node, mocha */
import React from 'react';
import { Input, Button, Icon, Label } from '../../../elements';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { itShouldConsumeOwnAndPassCustomProps } from '../../../test-utils';

let consumedProps = {
    component: 'div',
    defaultClasses: true,
    actionComponent: () => <Button/>,
    actionPosition: 'right',
    fluid: true,
    icon: 'cloud',
    iconPosition: 'left',
    iconComponent: () => <Icon />,
    inverted: true,
    label: 'Test',
    labelPosition: 'left',
    labelComponent: () => <Label />,
    placeholder: 'Placeholder',
    size: 'small',
    state: 'disabled',
    transparent: true,
    value: 'test'
};

describe('Input', () => {
    
    describe('should render in the DOM', () => {
        it('renders as div with <input> inside', () => {
            let wrapper = shallow(<Input />);
            expect(wrapper).to.have.className('ui input');
            expect(wrapper).to.have.tagName('div');
            expect(wrapper.children()).to.have.tagName('input');
        });
    });

    it('should have fluid filling', () => {
        let wrapper = shallow(<Input fluid />);
        expect(wrapper).to.have.className('fluid');
    });

    it('should be noticable on dark backgrounds', () => {
        let wrapper = shallow(<Input inverted />);
        expect(wrapper).to.have.className('inverted');
    });

    it('should have a placeholder', () => {
        let wrapper = shallow(<Input placeholder="test" />);
        expect(wrapper.find('input').first()).to.have.prop('placeholder', 'test');
    });

    it('should have various sizes', () => {
        let wrapper = shallow(<Input size="small" />);
        expect(wrapper).to.have.not.className('size');
        expect(wrapper).to.have.className('small');
    });

    describe('should be stateful', () => {
        it('has an error state', () => {
            let wrapper = shallow(<Input state="error" />);
            expect(wrapper).to.have.className('error');
        });

        it('has a disabled state', () => {
            let wrapper = shallow(<Input state="disabled" />);
            expect(wrapper).to.have.className('disabled');
        });

        describe('has a loding state', () => {
            it('has a loading state', () => {
                let wrapper = shallow(<Input state="loading" />);
                expect(wrapper).to.have.className('loading');
                
                wrapper = shallow(<Input state={['loading']} />);
                expect(wrapper).to.have.className('loading');
            });
            
            it('Adds an icon class to the input', () => {
                let wrapper = shallow(<Input state="loading" />);
                expect(wrapper).to.have.className('icon');
            });
            
            it('Renders loading icon inside', () => {
                let wrapper = shallow(<Input state="loading" />);
                expect(wrapper.find(Icon)).to.be.exist;
                expect(wrapper.find(Icon)).to.have.prop('name', 'search');
            });
            
            it('Renders loading icon when state was given as array', () => {
                let wrapper = shallow(<Input state={['loading', 'disabled']} />);
                expect(wrapper.find(Icon)).to.be.exist;
                expect(wrapper.find(Icon)).to.have.prop('name', 'search');
            });
            
            it('Renders always search icon regardless of current icon', () => {
                let wrapper = shallow(<Input icon="cloud" state="loading" />);
                expect(wrapper.find(Icon).length).to.equal(1);
                expect(wrapper.find(Icon)).to.have.prop('name', 'search');
            });
        });
        
        it('has a focus state', () => {
            let wrapper = shallow(<Input state="focus" />);
            expect(wrapper).to.have.className('focus');
        });
        
        it('can have multiple states', () => {
            let wrapper = shallow(<Input state={['focus', 'loading', 'disabled']} />);
            expect(wrapper).to.have.className('focus');
            expect(wrapper).to.have.className('loading');
            expect(wrapper).to.have.className('disabled');
        });
    });

    it('may be transparent', () => {
        let wrapper = shallow(<Input transparent />);
        expect(wrapper).to.have.className('transparent');
    });
    
    describe('Can be action input', () => {
        it('Right action position by default', () => {
            let wrapper = shallow(<Input actionComponent={() => <Button>Test</Button>} />);
            expect(wrapper).to.have.className('right action');
            expect(wrapper.children().at(1).shallow().is(Button)).to.be.true;
        });
        
        it('Could be specified', () => {
            let wrapper = shallow(<Input actionComponent={() => <Button>Test</Button>} actionPosition="left" />);
            expect(wrapper).to.have.className('left action');
            expect(wrapper.children().at(0).shallow().is(Button)).to.be.true;
        });
    });
    
    describe('Can be input with icon inside', () => {
        it('Places icon at the right by default', () => {
            let wrapper = shallow(<Input icon="cloud" />);
            expect(wrapper).to.have.className('right icon');
            expect(wrapper.find(Icon)).to.be.exist;
            expect(wrapper.find(Icon)).to.have.prop('name', 'cloud');
        });
        
        it('Could place icon on the left side', () => {
            let wrapper = shallow(<Input icon="cloud" iconPosition="left" />);
            expect(wrapper).to.have.className('left icon');
            expect(wrapper.find(Icon)).to.be.exist;
            expect(wrapper.find(Icon)).to.have.prop('name', 'cloud');
        });
        
        it('Can have icon class name without icon component', () => {
            let wrapper = shallow(<Input icon />);
            expect(wrapper).to.have.className('right icon');
            expect(wrapper.find(Icon)).to.be.not.exist;
        });
        
        it('Allows to specify custom icon component', () => {
            let wrapper = shallow(
                <Input icon="cloud" 
                       iconComponent={() => <Icon size="big" circular name="cloud"/>} 
                       iconPosition="left" />
            );
            expect(wrapper).to.have.className('left icon');
            expect(wrapper.find('iconComponent')).to.be.exist;
            expect(wrapper.find('iconComponent').shallow()).to.have.prop('circular', true);
            expect(wrapper.find('iconComponent').shallow()).to.have.prop('size', 'big');
        });
    });
    
    describe('Can be input with label', () => {
        it('Places label at left side by default', () => {
            let wrapper = shallow(<Input label="Test" />);
            expect(wrapper).to.have.className('left labeled');
            expect(wrapper.find(Label)).to.be.exist;
            expect(wrapper.children().at(0).is(Label)).to.be.true;
        });
        
        it('Can specify label position', () => {
            let wrapper = shallow(<Input label="Test" labelPosition="right" />);
            expect(wrapper).to.have.className('right labeled');
            expect(wrapper.find(Label)).to.be.exist;
            expect(wrapper.children().at(1).is(Label)).to.be.true;
        });
        
        it('Can use left corner label', () => {
            let wrapper = shallow(<Input label="Test" labelPosition="left corner" />);
            expect(wrapper).to.have.className('left corner labeled');
            expect(wrapper.find(Label)).to.be.exist;
            expect(wrapper.children().at(0).is(Label)).to.be.true;
            expect(wrapper.find(Label)).to.have.prop('corner', 'left');
        });
        
        it('Can use right corner label', () => {
            let wrapper = shallow(<Input label="Test" labelPosition="right corner" />);
            expect(wrapper).to.have.className('right corner labeled');
            expect(wrapper.find(Label)).to.be.exist;
            expect(wrapper.children().at(1).is(Label)).to.be.true;
            expect(wrapper.find(Label)).to.have.prop('corner', 'right');
        });
        
        it('Allows to use custom label component', () => {
            let wrapper = shallow(<Input label="Test"
                                         labelComponent={({ children }) => <Label tag>{children}</Label>}
                                         labelPosition="right" />);
            expect(wrapper).to.have.className('right labeled');
            expect(wrapper.children().at(1).shallow().is(Label)).to.be.true;
            expect(wrapper.children().at(1).shallow()).to.have.prop('tag', true);
        });
    });
    
    it('passes standard props to input', () => {
        let wrapper = shallow(<Input value="test" type="password"/>);
        expect(wrapper.find('input')).to.have.prop('value', 'test');
        expect(wrapper.find('input')).to.have.prop('type', 'password');
    });
    
    itShouldConsumeOwnAndPassCustomProps(Input, consumedProps, false);

});
