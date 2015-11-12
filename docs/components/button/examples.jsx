import { Colors } from '../../utilities';
import { Button } from '../../../src/components/elements';

export default {
    default: {
        component: Button,
        children: 'Button',
        props: {
            key: 'default'
        }
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
    }
};
