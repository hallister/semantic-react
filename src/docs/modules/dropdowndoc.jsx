import React, { Component } from 'react';
import { DropdownExample } from './dropdown/dropdown';
import { SelectionExample } from './dropdown/selection';
import { SearchExample } from './dropdown/search';
import { Segment, Header, SubHeader, Divider } from '../../components/elements';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class DropdownDoc extends Component {
    render() {
    	return (
    		<Segment basic className="example">
                <Header dividing tag="h1">
                    Types
                </Header>
                <DropdownExample />
                <SelectionExample />
                <SearchExample />
    		</Segment>
    	);
    }
}