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
