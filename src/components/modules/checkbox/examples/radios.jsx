import React from 'react';
import Checkbox from '../checkbox';
import Form from '../../../collections/form/fields';
import Fields from '../../../collections/form/Fields';
import Field from './../../../collections/form/form';

class MyRadios extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null
        };
    }

    onClickRadio(value) {
        this.setState({
            value: value
        });
    }

    render() {
        let { value } = this.state;

        return (
            <Form>
                <Fields>
                    <label>Omg bananas!</label>
                    <Field>
                        <Checkbox
                            type="radio"
                            checked={value === 'one'}
                            onClick={this.onClickRadio.bind(this, 'one')}
                        >
                            One banana
                        </Checkbox>
                    </Field>
                    <Field>
                        <Checkbox
                            type="radio"
                            checked={value === 'two'}
                            onClick={this.onClickRadio.bind(this, 'two')}
                        >
                            Two banana
                        </Checkbox>
                    </Field>
                </Fields>
            </Form>
        );
    }
}

<MyRadios />
