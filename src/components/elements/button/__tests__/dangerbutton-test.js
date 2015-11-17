/* eslint-env node, mocha */
import { createElement as $ } from 'react';
import { DangerButton as Element, Button } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

describe('DangerButton', () => {

    describe('should render in the DOM', () => {
        let tree = sd.shallowRender($(Element));
        let vdom = tree.getRenderOutput();

        it('renders as a <Button>', () => {
            expect(vdom.type).to.equal(Button);
        });

        it('DangerButton renders as red', () => {
            expect(vdom.props).has.property('color', 'red');
        });
    });
});
