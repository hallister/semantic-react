/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

const standardProps = {
    style: {
        background: 'green'
    },
    className: 'test'
};

export function itShouldPassUnusedDataProps(Component, props) {
    it('passes unused data props', () => {

        let wrapper = shallow(<Component {...props}
            data-test="test"/>);

        expect(wrapper).to.have.prop('data-test', 'test');
    });
}

export function itShouldConsumeOwnAndPassCustomProps(Component, props, testPassDataProps = true) {
    describe('should properly pass props', () => {
        it('consumes all used props', () => {
            // Funny trick to check component and it's rendered output
            // We need to validate both props passed to component and props for the component's rendered output
            // If we do shallow(<Component {...props}/>) then shallow renderer will do component rendering instead
            // Actually component rendering will be performed later
            let wrapper = shallow(<div><Component {...props} /></div>);
            
            // Here the new wrapper for component rendered output
            let componentWrapper = wrapper.find(Component).shallow();

            for (let prop in props) {
                expect(wrapper.find(Component)).to.have.prop(prop, props[prop]);
                // Check if rendered output doesn't contain consumed prop
                // Using expect.fail() here to prevent standard error to avoid confusion, since it will display component name
                if (typeof componentWrapper.prop(prop) !== 'undefined') {
                    expect.fail(null, null, `Rendered output shouldn't have property: ${prop}`);
                }
            }
        });

        it('passes standard props', () => {
            let wrapper = shallow(<div><Component {...props} {...standardProps}/></div>);
            let componentWrapper = wrapper.find(Component).shallow();
            
            for (let prop in standardProps) {
                expect(wrapper.find(Component)).to.have.prop(prop, standardProps[prop]);
                if (typeof componentWrapper.prop(prop) === 'undefined') {
                    expect.fail(null, null, `Rendered output should have standard property: ${prop}`);
                }
            }
            
        });

        if (testPassDataProps) {
            itShouldPassUnusedDataProps(Component, props);
        }
    });
}

