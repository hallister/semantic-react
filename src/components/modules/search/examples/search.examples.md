# Search
A Search displays a collections of data grouped into list in popup
4 Themes

## Types

#### No icon
    
    'value' in state || setState({value: ''});
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        icon=''
        onChoice={(e, currentValue) => setState({value: currentValue})}
        value={state.value}
        placeholder="Search plz"
        results={[
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Northwest Territories',
            'Nunavut',
            'Yukon'
        ]}
    />

## Types results

#### List standard

    'value' in state || setState({value: ''});
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onChoice={(e, currentValue) => setState({value: currentValue})}
        value={state.value}
        placeholder="Search plz"
        results={[
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Northwest Territories',
            'Nunavut',
            'Yukon'
        ]}
    />

#### List objects

    'value' in state || setState({value: ''});
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onChoice={(e, currentValue) => setState({value: currentValue})}
        value={state.value}
        placeholder="Search plz"
        results={[
            { 
                title: 'Alberta',
                description: 'sub text'
            },
            { 
                title: 'British Columbia',
                description: 'sub text'
            },
            { 
                title: 'Manitoba',
                description: 'sub text'
            },
            { 
                title: 'New Brunswick'
            },
            { 
                title: 'Newfoundland and Labrador'
            }
        ]}
    />

#### Object lists

    'value' in state || setState({value: ''});
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onChoice={(e, currentValue) => setState({value: currentValue})}
        value={state.value}
        placeholder="Search plz"
        results={{
            animal: ['cat', 'dog'],
            noAnimal: ['noCat', 'noDog']
        }}
    />

## States

#### Loading

    'value' in state || setState({value: ''});
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onChoice={(e, currentValue) => setState({value: currentValue})}
        value={state.value}
        loading={true}
        placeholder="Search plz"

        results={[
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
            'Northwest Territories',
            'Nunavut',
            'Yukon'
        ]}
    />
