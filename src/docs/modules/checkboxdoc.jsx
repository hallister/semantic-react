import React, { Component } from 'react';
//import { Card, Cards } from '../../components/views';
import { Segment, Input, Label } from '../../components/elements';
import { Checkbox, Checkboxes } from '../../components/modules';

export class CheckboxDoc extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	return (
    		<div>
    			<Segment>
                    <Checkbox name="checkbox1">
                        Make my profile visible
                    </Checkbox>
                </Segment>
                <Segment>  
                    <Checkbox radio name="radio">
                        Make my profile visible
                    </Checkbox>
                </Segment>
                <Segment>
                    <div className="ui form">
                        <Checkboxes inline radio name="test">
                            <label>How often do you use checkboxes?</label>
                            <Checkbox>
                                Once a week
                            </Checkbox>
                            <Checkbox>
                                2-3 times a week
                            </Checkbox>
                            <Checkbox>
                                Once a day
                            </Checkbox>
                            <Checkbox>
                                Twice a day
                            </Checkbox>
                        </Checkboxes>
                    </div>
                </Segment>
                <Segment>
                    <div className="ui form">
                        <Checkboxes grouped radio name="test">
                            <label>How often do you use checkboxes?</label>
                            <Checkbox>
                                Once a week
                            </Checkbox>
                            <Checkbox>
                                2-3 times a week
                            </Checkbox>
                            <Checkbox>
                                Once a day
                            </Checkbox>
                            <Checkbox>
                                Twice a day
                            </Checkbox>
                        </Checkboxes>
                    </div>
                </Segment>
                <Segment>
                    <Checkbox slider name="checkbox2">
                        Make my profile visible
                    </Checkbox>
                </Segment>
                <Segment>
                    <Checkboxes slider name="checkbox3">
                        <Checkbox>
                            20 mbps max
                        </Checkbox>    
                    </Checkboxes>
                </Segment>
                <Segment>
                    <Checkbox toggle name="checkbox4">
                        Subscribe to weekly newsletter
                    </Checkbox>
                </Segment>
                <Segment>
                    <Checkbox readOnly name="checkbox5">
                        Read Only
                    </Checkbox>
                </Segment>
                <Segment>
                    <Checkbox indeterminate name="checkbox6">
                        Indeterminate
                    </Checkbox>
                </Segment>
                <Segment>
                    <Checkbox disabled name="checkbox7">
                        Disabled
                    </Checkbox>
                </Segment>
    		</div>
    	);
    }
}

/*
<Checkbox name="test">
    My Label
</Checkbox>

<Form>
    <Checkboxes inline radio name="test">
        <Checkbox>
            Once
        </Checkbox>
    </Checkboxes>
</Form>

*/