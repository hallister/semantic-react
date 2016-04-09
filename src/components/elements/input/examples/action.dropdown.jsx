import React from 'react';
import Input from '../input';
import Select from '../../../modules/dropdown/select';
import Option from '../../../modules/dropdown/option';


class MyInputWithDropdown extends React.Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
            dropdownActive: false,
            dropdownVal: ["com"]
        };
    }
    
    render() {
        return (
            <div>
                <div style={{ display: 'block' }}>
                    You've typed {this.state.inputVal}.<strong>{this.state.dropdownVal.join('')}</strong>
                </div>
                <Input actionPosition="right"
                       value={this.state.inputVal}
                       onChange={(evt) => this.setState({ inputVal: evt.target.value })}
                       actionComponent={() => <Select compact active={this.state.dropdownActive}
                                                  selection
                                                  selected={this.state.dropdownVal}
                                                  onClick={() => this.setState({ dropdownActive: !this.state.dropdownActive })}
                                                  onRequestClose={() => this.setState({ dropdownActive: false })}
                                                  onSelectChange={val => this.setState({ dropdownVal: val, dropdownActive: false })}>
                                                <Option value="com">.com</Option>
                                                <Option value="org">.org</Option>
                                           </Select>}
                />
            </div>
        )
    }
}

<MyInputWithDropdown/>
