import React, { Component } from 'react';
import { DropdownExample } from './dropdown/dropdown';
import { SelectionExample } from './dropdown/selection';
import { Selection2Example } from './dropdown/selection2';
import { SearchExample } from './dropdown/search';
import { Search2Example } from './dropdown/search2';
import { MultipleSelectionDoc } from './dropdown/multipleselection';
import { Segment, Header, SubHeader, Divider } from '../../components/elements';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

/*
                <DropdownExample />
                <SelectionExample />
                <SearchExample />
                <MultipleSelectionDoc />
*/
export class DropdownDoc extends Component {
    render() {
    	return (
    		<Segment basic className="example">
                <Header dividing component="h1">
                    Types
                </Header>

                <Search2Example />
    		</Segment>
    	);
    }
}
