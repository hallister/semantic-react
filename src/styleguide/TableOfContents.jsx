import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem } from '../components/semantic-react';

export default class TableOfContents extends React.Component {
    static propTypes = {
        components: PropTypes.array.isRequired
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            searchTerm: ''
        }
    }
    
    render() {
        let {components} = this.props;
        return (
            <Menu
                inverted
                vertical
                style={{ marginTop: 0 }}
                text
            >
                {components.map(({name}) => (
                    <MenuItem menuValue={name} 
                              key={name} 
                              href={`#${name}`}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Menu>
        );
    }
}
