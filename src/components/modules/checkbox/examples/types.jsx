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
                        checked={isCheckbox}
                        onClick={this.onClickCheckbox.bind(this, 'isCheckbox')}
                    >
                        It Checkbox
                    </Checkbox>
                </Field>
                <Field>
                    <Checkbox
                        type="radio"
                        checked={isRadio}
                        onClick={this.onClickCheckbox.bind(this, 'isRadio')}
                    >
                        It Radio
                    </Checkbox>
                </Field>
                <Field>
                    <Checkbox
                        type="slider"
                        checked={isSlider}
                        onClick={this.onClickCheckbox.bind(this, 'isSlider')}
                    >
                        It Slider
                    </Checkbox>
                </Field>
                <Field>
                    <Checkbox
                        type="toggle"
                        checked={isToggle}
                        onClick={this.onClickCheckbox.bind(this, 'isToggle')}
                    >
                        It Toggle
                    </Checkbox>
                </Field>
            </Form>
        );
    }
}

<MyCheckboxes />
