import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';


export function itShouldConsumeOwnAndPassCustomProps(Component, props) {
    describe('should properly pass props', () => {
        it('consumes all used props', () => {
            let wrapper = shallow(<Component {...props} />);
            expect(wrapper).to.have.prop('className');
        });


        if (props.className) {
            it('passes the className prop', () => {
                let wrapper = shallow(<Component {...props} />);
                expect(wrapper).to.have.className(props.className);
            });
        }

        itShouldPassUnusedDataProps(Component, props);
    });
}

export function itShouldPassUnusedDataProps(Component, props) {
    it('passes unused data props', () => {

        let wrapper = shallow(<Component {...props}
            data-test="test"
            dataTest="test" />)

        expect(wrapper).to.have.prop('data-test', 'test');
        expect(wrapper).to.have.prop('dataTest', 'test');
    });
}