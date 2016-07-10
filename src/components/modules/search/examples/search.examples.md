# Search
A Search displays a collections of data grouped into list in popup
4 Themes

## Types

#### No icon
    
    initialState = { value: '' };
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        icon=''
        onSearchClick={(e, currentValue) => setState({value: currentValue})}
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

    initialState = { value: '' };
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onSearchClick={(e, currentValue) => setState({value: currentValue})}
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

    initialState = { value: '' };
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onSearchClick={(e, currentValue) => setState({value: currentValue})}
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

    initialState = { value: '' };
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onSearchClick={(e, currentValue) => setState({value: currentValue})}
        value={state.value}
        placeholder="Search plz"
        results={{
            animal: ['cat', 'dog'],
            noAnimal: ['noCat', 'noDog']
        }}
    />

## States

#### Loading

    initialState = { value: '' };
    <Search 
        onChange={e => setState({value: e.currentTarget.value})}
        onSearchClick={(e, currentValue) => setState({value: currentValue})}
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
