# Semantic React

## View current documentation [WIP](http://hallister.github.io/semantic-react/)
Many components are still undocumented, though they are fully functional

This project is a complete Semantic UI (SUI) to React. Currently, the majority of SUI has been ported to React however, much of the components are still untested. Major issues going forward include testing, documentation and various enhancements.

## Approach
Semantic-react uses react for any DOM changes. All animations are style-based, so we don't touch the DOM without React knowing.

Other Semantic UI projects out there, like [react-semantify](http://jessy1092.github.io/react-semantify/), are bindings for semantic-ui's existing javascript. So you'll need react-semantify, semantic-ui and jquery installed to use it. (around 400kb minified in overhead)

semantic-react (in its current state) is around 178kb, and there are no external dependencies besides React and ReactDOM. Once complete, the file size is expected end up around 200kb.

## Contributions
The project is currently in its infancy, however, much of the porting is complete. If you would like to contribute to the project, fork and follow the instructions below:

### Installation

```
npm install semantic-react --save
```

**You need to install react, react-dom and react-addons-shallow-compare manually**

### Development
```
npm install
npm run styleguide-server
```

### Typings

Library contain bundled Typescript definitions. You need to install react and react-motion typings before:
```
typings install react react-dom react-motion --global --save
```

### Radium

[Radium](http://stack.formidable.com/radium/) support included in the box:
```jsx
import { Button, Icon } from "semantic-react/radium";
```


### Releases

Latest release is 0.5.1 . Keep in mind that is still WIP and things may break over time.

Depending on your interest, an excellent place to begin contributing is the [High priority issues](https://github.com/hallister/semantic-react/labels/Priority%3A%20High).

[![devDependency Status](https://david-dm.org/hallister/semantic-react/dev-status.svg)](https://david-dm.org/hallister/semantic-react#info=devDependencies)

[![Dependency Status](https://david-dm.org/hallister/semantic-react.svg)](https://david-dm.org/hallister/semantic-react)
