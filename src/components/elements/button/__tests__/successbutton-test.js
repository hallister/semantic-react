/* eslint-env node, mocha */
import { createElement as $ } from 'react';
import { SuccessButton as Element, Button } from '../../../elements';
import { expect } from 'chai';
import sd from 'skin-deep';

describe('SuccessButton', () => {

    describe('should render in the DOM', () => {
        let tree = sd.shallowRender($(Element));
        let vdom = tree.getRenderOutput();

        it('renders as a <Button>', () => {
            expect(vdom.type).to.equal(Button);
        });

        it('WarningButton renders as green', () => {
            expect(vdom.props).has.property('color', 'green');
        });
    });
});
