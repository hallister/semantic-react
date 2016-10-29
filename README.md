# Semantic React

## View current documentation [WIP](http://hallister.github.io/semantic-react/)
Many components are still undocumented, though they are fully functional

This project is a complete Semantic UI (SUI) to React. Currently, the majority of SUI has been ported to React however, much of the components are still untested. Major issues going forward include testing, documentation and various enhancements.

###[Official semantic-ui react library is here](https://github.com/Semantic-Org/Semantic-UI-React)
This doesn't mean that this project will be abandoned

## Approach
Semantic-react uses react for any DOM changes. Animation depends on semantic-ui css

## Contributions
The project is currently in its infancy, however, much of the porting is complete. If you would like to contribute to the project, fork and follow the instructions below:

### Installation

```
npm install semantic-react --save
```

**You need to install react, react-dom and manually**

### Development
```
npm install
npm run styleguide-server
```

### Typings

Library contains bundled Typescript definitions. You must use TS 2.0 or greater and use @types/react (will be installed automatically). This means it will conflict with react typings installed by *typings* program.

 Use **0.9.1** version if you're using typings or TS 1.* version

### Radium

[Radium](http://stack.formidable.com/radium/) support included in the box:
```jsx
import { Button, Icon } from "semantic-react/radium";
```
**Do not mix radium and non-radium components, when using semantic-react with Radium, import components only from 'semantic-react/radium'**


### Contributing

Depending on your interest, an excellent place to begin contributing is the [High priority issues](https://github.com/hallister/semantic-react/labels/Priority%3A%20High).

[![devDependency Status](https://david-dm.org/hallister/semantic-react/dev-status.svg)](https://david-dm.org/hallister/semantic-react#info=devDependencies)

[![Dependency Status](https://david-dm.org/hallister/semantic-react.svg)](https://david-dm.org/hallister/semantic-react)
