**Note: Only tabs with attached menu are supported. If you don't need menu for tabs when you don't need to use tabs as well**

Four tab is in loading state
```example
initialState = { active: 1 };

<Tabs onTabChange={(val) => setState({ active: val })} activeTab={state.active}>
    <TabMenu>
        <MenuItem menuValue={1}>First</MenuItem>
        <MenuItem menuValue={2}>second</MenuItem>
        <MenuItem menuValue={3}>Third</MenuItem>
        <MenuItem menuValue={4}>Four</MenuItem>
    </TabMenu>
    <Tab value={1}>
        First content
    </Tab>
    <Tab value={2}>
        Second content
    </Tab>
    <Tab value={3}>
        Third content
    </Tab>
    <Tab value={4} loading>
        Four content
    </Tab>
</Tabs>
```

## Loading tab
```example
<Tabs activeTab={1}>
    <TabMenu>
        <MenuItem menuValue={1}>First</MenuItem>
    </TabMenu>
    <Tab value={1} loading>
        First content
    </Tab>
</Tabs>
```
