# 0.8.1
Breadcrumb component, #25

# 0.8.0
Reworked Rating component
Step component (thanks @chris--jones)
Modal has close animation by default (thanks @jimmyn)
allowAdditions in Select (thanks @jimmyn)
MenuItem can be disabled now (thanks @jimmyn)


# 0.7.2
Fix react 15.2 error when used card component
Fix dimmable class not being applied correctly for Dimmable component

# 0.7.1
Added statistic to TS typings

# 0.7.0
* views/Items/Item: Rework. Item shouldn't be user in any context anymore, such as List contexts
* modules/Tab: Completely rework from scratch
* elements/List: Rework, added ListItem, removed SimpleListItem
* collections/Td: Td props: split aligned to aligned and valigned. Renamed type to emphasis, added selectable prop
* collections/Table: Added sortable prop
* collections/Message: removed type and state props, use emphasis instead. Icon class will be automatically set if message contains any icon
* elements/Segments: removed stacked, piled, raised, added type prop instead
* elements/Rail: removed closer prop, use close: 'very' instead now, added size prop
* Updated TS typings
