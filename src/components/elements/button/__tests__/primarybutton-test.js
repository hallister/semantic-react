/* eslint-env node, mocha */
import { createElement as $ } from 'react';
import { PrimaryButton as Element, Button } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

describe('PrimaryButton', () => {

    describe('should render in the DOM', () => {
        let tree = sd.shallowRender($(Element));
        let vdom = tree.getRenderOutput();

        it('renders as a <Button>', () => {
            expect(vdom.type).to.equal(Button);
        });

        it('PrimaryButton renders as blue', () => {
            expect(vdom.props).has.property('color', 'blue');
        });
    });
});
