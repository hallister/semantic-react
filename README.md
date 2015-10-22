# Semantic React

### NOTE: THIS PROJECT IS EXPERIMENTAL.

Repository for my current work porting the majority of Semantic UI to React Components.
Status of various components are listed below. Testing is not implemented unless specified.
There are no well-written docs as of yet.

There are some notable issues with Semantic UI using a ton of descendant selectors and `:only-child`
selectors. As a resulta few components look "different" than SUI has them, in other cases (`Statistic`)
the markup is completely unusable in React. The most direct way of fixing this problem is to fork Semantic
and build inline styles into components, leaving the CSS for uses cases where descendant selectors
are an absolute must (a grid that is a child of a grid).

However, forking and maintaining a 35k CSS library is a little outside the scope of this project.

#### General Todo's
* Convert all stateless components to functional components (See `Message` and `Table`).
* Remove `@Animate` from any non-module component. Use Composed Components in modules.

#### Elements
* Button - Complete. Testing complete.
* Container - Complete.
* Divider - Complete.
* Flag - Complete.
* Header - Complete.
* Icon - Complete.
* Image - Mostly Complete (No SVG Support). Very low priority.
* Input - Complete.
* Label - Complete.
* List - Complete.
* Loader - Complete.
* Rail - Complete.
* Reveal - Complete.
* Segment - Complete.
* Simple - Complete. Set of simple elements (Actions, Author, Date, etc).
* Step - Not started. Low priority.

### Collections
* Breadcrumb - Not started. This feels tied to a router. [Existing option for react-router](https://github.com/svenanders/react-breadcrumbs).
* Form - Not started. High priority.
* Grid - Complete.
* Menu - Complete. Minor rework: Make AnimatedMenu component for the `@Animate` decorator in modules. We can then convert collections to stateless.
* Message - Complete (Stateless).
* Table - Complete (Stateless). Usefulness of `Td` and `Tr` components are debatable.

### Views
* Advertisement - Not started. Very low priority.
* Card - Complete.
* Comment - Complete (Stateless).
* Feed - Complete (Stateless).
* Item - Needs modification. Currently implemented as an element. Mid priority.
* Statistic - *Can't implement*. [Currently not feasible](https://github.com/hallister/semantic-react/issues/6).

### Modules
* Accordion - Needs rewrite. Mid Priority.
* Animate - Complete.
* Checkbox - Complete.
* Dimmer - Complete.
* Dropdown - `Select` complete, but `DropdownMenu` hasn't been implemented. High priority.
* Embed - Not started. Low priority.
* Modal - Complete.
* Nag - Not started. Semantic rewrite in-progress.
* Popup - Complete.
* Progress - Complete.
* Rating - Complete.
* Search - Not started. Low priority.
* Shape - Not started. Very low priority.
* Sticky - Not started. Very low priority. [react-sticky](https://github.com/captivationsoftware/react-sticky) is a substitute.
* Tab - Not started. High priority.
* Transition - Won't implement. Very "jQuery" way of handling things. Use Animate.

[![devDependency Status](https://david-dm.org/hallister/semantic-react/dev-status.svg)](https://david-dm.org/hallister/semantic-react#info=devDependencies)

[![Dependency Status](https://david-dm.org/hallister/semantic-react.svg)](https://david-dm.org/hallister/semantic-react)
