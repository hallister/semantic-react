require('babel-core/polyfill');

const chai = require('chai');
const chaiEnzyMe = require('chai-enzyme');

chai.use(chaiEnzyMe());

const testsContext = require.context('.', true, /-test\.(js|jsx)$/);
testsContext.keys().forEach(testsContext);

// const componentsContext = require.context('.', true, /\.(jsx|es6)$/);
// componentsContext.keys().forEach(componentsContext);
