/* eslint-env node, mocha */
/* global sinon, assert */
import { createElement as $ } from 'react';
import { SocialButton as Element, IconButton } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';


let props = {
    name: 'facebook'
};

describe('SocialButton', () => {
    beforeEach(function() {
        props = {
            name: 'facebook'
        };
    });

    it('should expect a name', () => {
        sinon.test(function() {
            let spy = sinon.stub(console, 'error');

            sd.shallowRender($(Element));

            assert(spy.called);
        });
    });


    describe('should render in the DOM', () => {
        beforeEach(function() {
            props = {
                name: 'facebook'
            };
        });

        it('renders as a <IconButton>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props).has.property('social', true);
            expect(vdom.props).has.property('icon', true);
            expect(vdom.type).to.equal(IconButton);
        });

        it('passes the custom component to <Button>', () => {
            props.component = 'div';
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props).has.property('component', 'div');
        });
    });

    it('passes unused data props', () => {
        props['data-test'] = 'test';
        props['dataTest'] = 'test';

        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();

        expect(vdom.props).to.have.property('data-test', 'test');
        expect(vdom.props).to.have.property('dataTest', 'test');
    });
});
