require('babel-core/polyfill');

const testsContext = require.context('.', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);

const componentsContext = require.context('.', true, /\.(jsx|es6)$/);
componentsContext.keys().forEach(componentsContext);
