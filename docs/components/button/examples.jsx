import { Colors } from '../../utilities';
import { Button, PrimaryButton, SuccessButton, WarningButton, DangerButton } from '../../../src/components/elements';

export default {
    default: {
        component: Button,
        children: 'Button'
    },
    color: {
        component: Button,
        each: Colors,
        do: {
            children: true,
            props: {
                color: true,
                key: true,
                style: {
                    marginTop: 5
                }
            }
        }
    },
    emphasis: [{
        component: PrimaryButton,
        children: 'Primary'
    }, {
        component: SuccessButton,
        children: 'Success'
    }, {
        component: WarningButton,
        children: 'Warning'
    }, {
        component: DangerButton,
        children: 'Danger'
    }]
};
