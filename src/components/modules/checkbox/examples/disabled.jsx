import React from 'react';
import Checkbox from '../checkbox';
import Form from '../../../collections/form/fields';
import Field from './../../../collections/form/form';

class MyCheckboxes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isCheckbox: false,
            isRadio: false,
            isSlider: false,
            isToggle: false
        }
    }

    onClickCheckbox(name) {
        this.setState({
            [name]: !this.state[name]
        });
    }

    render() {
        let { isCheckbox, isRadio, isSlider, isToggle } = this.state;

        return (
            <Form>
                <Field>
                    <Checkbox
                        disabled
                        checked={isCheckbox}
                        onClick={this.onClickCheckbox.bind(this, 'isCheckbox')}
                    >
                        Disabled, you can test
                    </Checkbox>
                </Field>
                <Field>
                    <Checkbox
                        disabled
                        radio
                        checked={isRadio}
                        onClick={this.onClickCheckbox.bind(this, 'isRadio')}
                    >
                        Disabled, you can test
                    </Checkbox>
                </Field>
                <Field>
                    <Checkbox
                        disabled
                        slider
                        checked={isSlider}
                        onClick={this.onClickCheckbox.bind(this, 'isSlider')}
                    >
                        Disabled, you can test
                    </Checkbox>
                </Field>
                <Field>
                    <Checkbox
                        disabled
                        toggle
                        checked={isToggle}
                        onClick={this.onClickCheckbox.bind(this, 'isToggle')}
                    >
                        Disabled, you can test
                    </Checkbox>
                </Field>
            </Form>
        );
    }
}

<MyCheckboxes />
