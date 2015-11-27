/* eslint-env node, mocha */

import { createElement as $ } from 'react';
import { Flag as Element, Icon } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

let props = {
    name: 'france'
};

describe('Flag', () => {
    describe('should render in the DOM', () => {
        it('renders as <Icon>', () => {
            let tree = sd.shallowRender($(Element, props));
            let vdom = tree.getRenderOutput();

            expect(vdom.props.className).to.match(/flag/);
            expect(vdom.type).to.equal(Icon);
        });
    });

    describe('should properly pass props', () => {
        let tree = sd.shallowRender($(Element, props));
        let vdom = tree.getRenderOutput();


        it('passes the className prop', () => {
            expect(vdom.props.className).to.match(/flag/);
        });

        it('passes unused data props', () => {
            props['data-test'] = 'test';
            props['dataTest'] = 'test';

            vdom = sd.shallowRender($(Element, props)).getRenderOutput();

            expect(vdom.props).to.have.property('data-test', 'test');
            expect(vdom.props).to.have.property('dataTest', 'test');
        });
    });
});
