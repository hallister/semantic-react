# 0.12.0
* react-transition-group package is now required as peer dependency
* Updated for react 15.5

# 0.11.3
* Select: Fix error when option is null | undefined

# 0.11.1-2
* Modal: Recalculate modal position on resizing, use offsetHeight instead of getBoundingClientRect().height
* Modal: Delay calculation of modal height to next tick ```setTimeout(() => {}, 0)```

# 0.11.0
* Removed react-measure from dependencies
* Page dimmer adds 'dimmable dimmed' classes to the document.body
* Scrolling modal works now

# 0.10.5
* Input: renders loading state correctly when loading state was given in array

# 0.10.3
* Input: icon prop may take boolean to indicate icon input but without icon (input length will be different in this case)
* Input: multiple states could be specified as array

# 0.10.1
* Menu: event object is being passed as second parameter for onMenuItemClick()

# 0.10.0
### Breaking changes:
* Changes to TS definitions to support new @types. React.DOMAttributes changed to React.DOMAttributes<HTMLElement>. Now @types/react is required as dependency. This means version from typings (and from DT master) is not compatible now. Stick with 0.9 if you're using typings or DT master 

# 0.9.0
### Breaking changes:

* Reworked animation component, now the lib uses CSS transitions from semantic-ui, removed react-motion. This should help with performance
* Removed *initialAnimation*, *enterAnimation*, *leaveAnimation*, *onAnimationStyle* old props
* Added *enter*, *leave*, *enterDuration*, *leaveDuration* animation props instead
* Removed animation from accordion (temporary), removed *animating* prop from accordion

Updated deps
Removed react-addons-shallow-compare


# 0.8.5
Meta: Use correct class name
Popup: Target property is required now and can be DOM element or react component instance (from ref)

# 0.8.4
Checkbox: Allow to style inline label via labelClassName

# 0.8.3
Markup fix with rightFloatedComponent in MenuItem (thanks @Starefossen)
Do not stop propagating of click event in MenuItem

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
